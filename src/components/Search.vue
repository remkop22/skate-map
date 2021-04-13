<template>
  <div class="search-wrapper">
    <div class="search-container">
      <input
        type="search"
        class="search-bar search-bar-item"
        v-model="query"
        @input="searchSubmit"
      />
      <select class="search-bar-item" v-model="sort" @change="searchSubmit">
        <option value="distance">Nearby</option>
        <option value="popularity">Popular</option>
        <option value="rating">Rating</option>
      </select>
      <button
        class="switch-btn"
        v-if="isMobile"
        :class="{ 'switch-btn-map': mapMode, 'switch-btn-list': !mapMode }"
        v-on:click="setMapMode(!mapMode)"
      ></button>
    </div>
    <div class="filter-container">
      <div class="filterbutton"></div>
      <div class="stars"></div>
      <div class="sort"></div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
  name: "Search",
  data() {
    return {
      query: "",
      sort: "distance",
      filters: [],
    };
  },
  methods: {
    ...mapMutations("discover", ["setMapMode"]),
    ...mapActions("discover", ["fetchLocations"]),
    searchSubmit() {
      this.fetchLocations({
        query: this.query,
        sort: this.sort,
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
.search-wrapper {
  justify-content: space-between;
  display: flex;
  flex-direction: column;
}

.search-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 30px;
}

.filter-container {
  display: flex;
  justify-content: space-between;
  margin: 15px;
}

.search-bar {
  width: 100%;
  max-width: 80%;
  background: url(../assets/search.svg) top left no-repeat;
  background-size: 25px;
  background-color: #c2c5cc;
  outline: none;
}

.filter-btn {
  margin-right: 0 !important;
  background: url(../assets/map.svg) top left no-repeat;
  filter: invert(6%) sepia(35%) saturate(5041%) hue-rotate(206deg)
    brightness(98%) contrast(105%);
  outline: none;
}

.search-bar-item {
  margin-right: 0.2em;
  border: none;
  padding: 0.3em 1em;
  border-radius: 7px;
  appearance: none;
  outline: none;
}

.switch-btn {
  margin-right: 0.2em;
  border: none;
  padding: 0.3em 1em;
  border-radius: 7px;
  appearance: none;
  outline: none;
}

.switch-btn-list {
  background: url(../assets/map.svg) no-repeat;
  height: 24px;
}

.switch-btn-map {
  background: url(../assets/list.svg) no-repeat;
  height: 24px;
}

.location-list-container {
  margin-top: 0.5em;
  height: 100%;
}
.filterbutton {
  padding: 0.3em 1em;
  background: url(../assets/settings.svg) top left no-repeat;
}

.stars {
  width: 100%;
  height: 30px;
  padding: 0.3em 1em;
  background: url(../assets/stars.svg) top right no-repeat;
}

.sort {
  width: 100px;
  height: 30px;
  padding: 0.3em 1em;
  background: url(../assets/sort.svg) top right no-repeat;
}
select {
  background-color: #c2c5cc;
  color: #001334;
}
</style>
