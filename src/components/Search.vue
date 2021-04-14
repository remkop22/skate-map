<template>
  <div class="search-wrapper">
    <div class="search-container">
      <input
        type="search"
        class="search-bar search-bar-item"
        v-model="query"
        @input="searchSubmit"
      />
      <img
        v-if="isMobile"
        :src="
          mapMode ? require('@/assets/map.svg') : require('@/assets/list.svg')
        "
        class="switch-btn"
        :class="{ 'switch-btn-map': mapMode, 'switch-btn-list': !mapMode }"
        v-on:click="setMapMode(!mapMode)"
      />
    </div>
    <div class="filter-container">
      <img class="filterbutton" src="@/assets/settings.svg" height="80%" />
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

.search-wrapper {
  display: flex;
  flex-direction: column;
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
  min-height: 40px;
  max-width: 20px;
}

.search-bar {
  display: flex;
  width: 100%;
  background: url(../assets/search.svg) center left no-repeat,
    url(../assets/cursor.svg) center right 10px no-repeat;
  background-size: 28px, 12px;
  background-color: #c2c5cc;
  outline: none;
  padding-left: 12px;
}

.slidecontainer {
  width: 50%;
}

.stars {
  position: sticky;
}

.slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 5px;
  border-radius: 2px;
  background: $tertiary;
  opacity: 1;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

.slider:hover {
  opacity: 0.8;
}

.slider::-webkit-slider-thumb,
.slider::-moz-range-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  outline: none;
  background: $secondary;
  cursor: pointer;
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
  margin-right: 0 !important;
  filter: invert(6%) sepia(35%) saturate(5041%) hue-rotate(206deg)
    brightness(98%) contrast(105%);
  outline: none;
}
.v-select {
  outline: none;
}

.search-bar-item,
.sort {
  margin: 0 0.2em 0 0.3em;
  border: none;
  border-radius: 12px;
  appearance: none;
  outline: none;
  min-width: 40%;
  font-size: 0.9rem;
  color: $secondary;
}

.sort .vs__search::placeholder,
.sort .vs__dropdown-toggle,
.sort .vs__dropdown-menu {
  background: $primary;
  border: none;
  outline: none;
  min-width: 90px;
}

.sort .vs__selected {
  color: $secondary;
}

.sort .vs__search {
  color: #001334;
  outline: none;
}

.sort .vs__actions {
  color: red;
}
.sort .vs__dropdown-option--highlight {
  background-color: $tertiary;
}

.switch-btn {
  margin: 0 0.6em 0 0.6em;
  border: none;
  border-radius: 7px;
  appearance: none;
  outline: none;
}

.switch-btn-list {
  height: 24px;
}

.switch-btn-map {
  height: 24px;
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
</style>
