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
        <div class="slidecontainer">
          <v-slider
            step="1"
            :color="active.color"
            :thumb-size="10"
            thumb-label="always"
            :max="5"
            :min="1"
            :track-color="track.color"
            :thumb-color="thumb.color"
          >
            <template v-slot:thumb-label="{ value }">
              {{ satisfactionEmojis[Math.min(Math.floor(value / 1), 4)] }}
            </template>
          </v-slider>
        </div>
        <!-- <img class="stars" src="@/assets/stars.svg" height="80%" /> -->
        <v-select
          class="sort"
          :items="options"
          dense
          solo
          menu-props="auto"
          hide-details
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

export default {
  name: "Search",
  data() {
    return {
      active: { color: "#001334" },
      track: { color: "#C2C5CC" },
      thumb: { color: "#001334" },
      satisfactionEmojis: ["😭", "😢", "😞", "😄", "😍"],
      value: 5,
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
  max-width: 15rem;
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
  width: 10rem;
  margin: 0 0.6rem 0 0;
  z-index: 1;
}

// .slider {
//   justify-content: center;
//   transition: opacity 0.2s;
//   opacity: 1;
//   border-radius: 1rem;
//   background: $tertiary;
//   width: 100%;
//   height: 0.4rem;
//   -webkit-appearance: none;
//   appearance: none;
//   -webkit-transition: 0.2s;
//   position: relative;
// }

// .slider::-webkit-slider-thumb,
// .slider::-moz-range-thumb {
//   -webkit-appearance: none;
//   appearance: none;
//   background-color: $secondary;
//   border-radius: 50%;
//   border: none;
//   height: 0.9rem;
//   width: 0.9rem;
// }

// .rangeValue {
//   align-items: center;
//   line-height: 0.95rem;
// }

// .rangeValue::before {
//   align-items: center;
// }
</style>
