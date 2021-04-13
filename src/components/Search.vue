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
        <img class="stars" src="@/assets/stars.svg" height="80%" />
        <v-select
          :options="options"
          class="sort"
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
import { mapMutations, mapGetters, mapActions } from "vuex";
import "vue-select/dist/vue-select.css";
export default {
  name: "Search",
  data() {
    return {
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

<style lang="scss" scoped>
@import "vue-select/src/scss/vue-select.scss";

.search-wrapper {
  justify-content: space-between;
  display: flex;
  flex-direction: column;
}

.search-container,
.filter-container {
  display: flex;
  margin: 0 1em 1.4em 1em;
  height: 30px;
}

.search-bar {
  width: 100%;
  background: url(../assets/search.svg) top left no-repeat,
    url(../assets/cursor.svg) center right 10px no-repeat;
  background-size: 25px, 12px;
  background-color: #c2c5cc;
  outline: none;
}

.starssort {
  display: flex;
  justify-content: flex-end;
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
  min-width: 30%;
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

.sort {
  font-size: 0.9rem;
  text-align: center;
}

select {
  background-color: #c2c5cc;
  color: #001334;
}

option {
  outline: none;
}
</style>
