<template>
  <div class="discover-view">
    <div class="location-container">
      <Search />
      <LocationList v-if="!mapMode || !isMobile" />
    </div>
    <LocationMap v-if="mapMode || !isMobile" />
  </div>
</template>

<script>
import LocationMap from "@/components/LocationMap.vue";
import LocationList from "@/components/LocationList.vue";
import Search from "@/components/Search.vue";
import { mapGetters } from "vuex";

export default {
  name: "DiscoverView",
  components: {
    LocationMap,
    LocationList,
    Search,
  },
  computed: {
    ...mapGetters("discover", ["mapMode"]),
    ...mapGetters(["isMobile"]),
  },
};
</script>

<style scoped>
@media (max-width: 900px) {
  .discover-view {
    flex-direction: column;
    align-items: stretch;
    overflow: visible;
  }
  .location-container {
    max-width: 100%;
    height: unset !important;
  }
}

.discover-view {
  display: flex;
  overflow: hidden;
  height: 100%;
  padding: 1em;
}

.location-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.location-list-container {
  padding: 0 0.6em 0 0.6em;
}

.map-container {
  width: 100%;
  height: 100%;
  margin-left: 0.5em;
  margin-top: 0.5em;
  border-radius: 0.5em;
}
</style>
