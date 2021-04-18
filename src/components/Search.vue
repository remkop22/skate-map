<template>
  <div class="search-wrapper">
    <div class="search-container">
      <input
        type="search"
        class="search-bar search-bar-item"
        v-model="query"
        @input="searchSubmit"
      />
      <transition name="fade">
        <img
          v-if="isMobile"
          :src="
            mapMode ? require('@/assets/map.svg') : require('@/assets/list.svg')
          "
          class="switch-btn"
          :class="{ 'switch-btn-map': mapMode, 'switch-btn-list': !mapMode }"
          v-on:click="setMapMode(!mapMode)"
        />
      </transition>
    </div>
    <div class="filter-container">
      <img class="filterbutton" src="@/assets/settings.svg" height="24rem" />
      <div class="starssort">
        <div class="slider-component justify-center justify-items-center w-20">
          <div class="value justify-self-center flex mb-3">
            <svg
              class="items-center"
              v-for="i in 5"
              :key="i"
              :class="i <= currentValue ? 'text-secondary' : 'text-tertiary'"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </div>
          <div class="slidecontainer justify-self-center">
            <input
              ref="input"
              v-model="currentValue"
              type="range"
              :min="1"
              :max="5"
              class="slider"
              @input="onInput"
            />
          </div>
        </div>
        <div class="dropdown">
          <button
            src="../assets/sort1.svg"
            class="dropbtn flex justify-content-center p-2 rounded-lg ml-4 whitespace-nowrap align-middle cursor-pointer font-bold"
          >
            Sort by
            <img src="../assets/sort1.svg" />
          </button>
          <div class="dropdown-content">
            <a href="#">{{ options["0"] }}</a>
            <a href="#">{{ options["1"] }}</a>
            <a href="#">{{ options["2"] }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
import "vue-select/dist/vue-select.css";
export default {
  name: "Search",
  data() {
    return {
      currentValue: this.value,
      query: "",
      sort: "",
      filters: [],
      options: ["Distance", "Popularity", "Rating"],
    };
  },
  methods: {
    onInput() {
      this.$emit("input", parseInt(this.currentValue));
    },
    ...mapMutations("discover", ["setMapMode"]),
    ...mapActions("discover", ["fetchLocations"]),
    searchSubmit() {
      this.fetchLocations({
        query: this.query,
        sort: this.sort.toLowerCase(),
        filters: this.filters,
      }).catch((err) => console.error(err));
    },
  },
  computed: {
    ...mapGetters("discover", ["userLocation", "mapMode"]),
    ...mapGetters(["isMobile"]),
  },
  watch: {
    userLocation() {
      if (this.sort == "distance") {
        this.searchSubmit();
      }
    },
  },
  mounted() {
    this.searchSubmit();
  },
};
</script>

<style lang="scss">
@import "../../scss/variables.scss";
@import "vue-select/src/scss/vue-select.scss";

.dropbtn {
  background-color: $tertiary;
  color: $secondary;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: $tertiary;
  border-radius: 1rem;
  min-width: 8em;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 500;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: $secondary;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  border-radius: 1rem;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: $primary;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  opacity: 0.9;
}

.slider::-webkit-slider-thumb .slider::-moz-range-thumb {
  opacity: 1;
  border: 1rem;
}

.slider {
  -webkit-appearance: none;
  appearance: none;
  height: 0.25rem;
  border-radius: 2px;
  background: $tertiary;
  outline: none;
  opacity: 1;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

.slider-component .slidecontainer .slider:hover {
  opacity: 0.8;
}

.slider-component .slidecontainer .slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  background: $secondary;
  height: 0.7rem;
  width: 0.7rem;
  cursor: pointer;
  border-radius: 50%;
}

.slider-component .slidecontainer .slider::-moz-range-thumb {
  background: $secondary;
  cursor: pointer;
  height: 0.7rem;
  width: 0.7rem;
  border-radius: 50%;
}

.search-wrapper {
  display: flex;
  flex-direction: column;
}
.filterbutton {
  align-self: center;
}
.search-container,
.filter-container {
  display: flex;
  justify-content: space-between;
  margin: 0 1em 1.4em 1em;
  height: 1.7rem;
}
.filter-container {
  padding-left: 15px;
}
.options {
  max-width: 20px;
  min-height: 40px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.search-bar {
  display: flex;
  outline: none;
  background: url(../assets/search.svg) center left no-repeat,
    url(../assets/cursor.svg) center right 10px no-repeat;
  background-color: #c2c5cc;
  background-size: 1.7rem, 0.9rem;
  width: 100%;
  padding-left: 0.9rem;
}
.stars {
  position: sticky;
}

.starssort {
  display: flex;
  justify-content: flex-end;
}
input:focus {
  background-image: none;
}
.filter-btn {
  outline: none;
  filter: invert(6%) sepia(35%) saturate(5041%) hue-rotate(206deg)
    brightness(98%) contrast(105%);
}

.search-bar-item,
.sort {
  margin: 0 0.2em 0 0.3em;
  outline: none;
  border: none;
  border-radius: 1rem;
  min-width: 4rem;
  color: $secondary;
  font-size: 1rem;
  appearance: none;
}
.slider .v-slider__thumb-label {
  opacity: 0;
}

.switch-btn {
  align-self: center;
  margin: 0 0.2rem 0 0.2rem;
  outline: none;
  border: none;
  appearance: none;
}
.switch-btn-list,
.switch-btn-map {
  height: 76%, 80%;
}

.location-list-container {
  margin-top: 0.5em;
  height: 100%;
}

.slidecontainer {
  display: flex;
  flex-direction: column;
  z-index: 1;
}
</style>
