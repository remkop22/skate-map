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
        <div class="slider-component">
          <span> {{ this.currentValue }}</span>
          <div class="slidecontainer">
            <input
              ref="input"
              v-model="currentValue"
              type="range"
              :min="1"
              :max="5"
              class="slider"
              @input="onInput"
            />
            <!-- <div class="relative inline-block text-left dropdown">
            <span class="rounded-md shadow-sm"
              ><button
                class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                type="button"
                aria-haspopup="true"
                aria-expanded="true"
                aria-controls="headlessui-menu-items-117"
              >
                <span>Options</span>
                <svg
                  class="w-5 h-5 ml-2 -mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg></button
            ></span>
            <div
              class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95"
            >
              <div
                class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                aria-labelledby="headlessui-menu-button-1"
                id="headlessui-menu-items-117"
                role="menu"
              >
                <div class="px-4 py-3">
                  <p class="text-sm leading-5">Signed in as</p>
                  <p
                    class="text-sm font-medium leading-5 text-gray-900 truncate"
                  >
                    tom@example.com
                  </p>
                </div>
                <div class="py-1">
                  <a
                    href="javascript:void(0)"
                    tabindex="0"
                    class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                    role="menuitem"
                    >Account settings</a
                  >
                  <a
                    href="javascript:void(0)"
                    tabindex="1"
                    class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                    role="menuitem"
                    >Support</a
                  >
                  <span
                    role="menuitem"
                    tabindex="-1"
                    class="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 cursor-not-allowed opacity-50"
                    aria-disabled="true"
                    >New feature (soon)</span
                  >
                  <a
                    href="javascript:void(0)"
                    tabindex="2"
                    class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                    role="menuitem"
                    >License</a
                  >
                </div>
                <div class="py-1">
                  <a
                    href="javascript:void(0)"
                    tabindex="3"
                    class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                    role="menuitem"
                    >Sign out</a
                  > -->
            <!-- </div>
              </div>
            </div>
          </div> -->
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
  props: {
    value: {
      type: Number,
      required: true,
    },
    min: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
  },
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
// @import "../../scss/style.css";

$slider-thumb-size: 0px;

.dropdown:focus-within .dropdown-menu {
  opacity: 1;
  transform: translate(0) scale(1);
  visibility: visible;
}

.slider-component .slidecontainer {
  width: 100%;
}

.slider-component .slidecontainer .slider {
  -webkit-appearance: none;
  appearance: none;
  width: 50%;
  height: 4px;
  border-radius: 2px;
  background: $tertiary;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

.slider-component .slidecontainer .slider:hover {
  opacity: 1;
}

.slider-component .slidecontainer .slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  background: $secondary;
  cursor: pointer;
  border-radius: 50%;
}

.slider-component .slidecontainer .slider::-moz-range-thumb {
  width: 18px;
  height: 18px;
  background: $secondary;
  cursor: pointer;
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
