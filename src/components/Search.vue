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
      <img class="filterbutton" src="@/assets/settings.svg" height="70%" />
      <div class="starssort">
        <div class="slidecontainer">
          <Slider v-model="value" class="slider" />
        </div>
        <!-- <img class="stars" src="@/assets/stars.svg" height="80%" /> -->
        <v-select
          class="sort"
          :options="options"
          v-model="sort"
          placeholder="Sort by"
          :searchable="false"
          @input="searchSubmit"
        ></v-select>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "@vueform/slider/dist/slider.vue2.js";
import { mapMutations, mapGetters, mapActions } from "vuex";
import "vue-select/dist/vue-select.css";
export default {
  components: {
    Slider,
  },
  name: "Search",
  data() {
    return {
      value: 20,
      query: "",
      sort: "",
      filters: [],
      options: ["Distance", "Popularity", "Rating"],
    };
  },
  methods: {
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
// @import "../../scss/style.css";

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
  height: 30px;
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
}
.slidecontainer {
  width: 50%;
}
.stars {
  position: sticky;
}

.starssort {
  display: flex;
  justify-content: flex-end;
  min-width: 35%;
}
input:focus {
  background-image: none;
}
.filter-btn {
  outline: none;
  filter: invert(6%) sepia(35%) saturate(5041%) hue-rotate(206deg)
    brightness(98%) contrast(105%);
}
.v-select {
  outline: none;
}
.search-bar-item,
.sort {
  margin: 0 0.2em 0 0.3em;
  outline: none;
  border: none;
  border-radius: 1rem;
  min-width: 40%;
  color: $secondary;
  font-size: 1rem;
  appearance: none;
}

.sort .vs__dropdown-toggle,
.sort .vs__dropdown-menu {
  outline: none;
  border: none;
  background: $primary;
  min-width: 7rem;
}

.sort .vs__search::placeholder {
  text-align: right;
  color: $secondary;
}

.sort .vs__selected {
  color: $secondary;
}
.sort .vs__search {
  outline: none;
  color: #001334;
}
.sort .vs__actions {
  color: red;
}
.sort .vs__dropdown-option--highlight {
  background-color: $tertiary;
}

.sort .vs__selected-options {
  max-height: 2rem;
  text-align: right;
}
.switch-btn {
  align-self: center;
  margin: 0 0.2rem 0 0.2rem;
  outline: none;
  border: none;
  appearance: none;
}
.switch-btn-list {
  height: 76%;
}
.switch-btn-map {
  height: 80%;
}
.location-list-container {
  margin-top: 0.5em;
  height: 100%;
}
select {
  background-color: #c2c5cc;
  color: #001334;
}
option {
  outline: none;
}

.slider {
  transition: opacity 0.2s;
  opacity: 1;
  border-radius: 1rem;
  background: $tertiary;
  width: 100%;
  height: 0.3rem;
  -webkit-appearance: none;
  appearance: none;
  -webkit-transition: 0.2s;
}
</style>
