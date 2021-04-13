<template>
  <div class="location-list-container">
    <div
      class="location-card"
      v-for="(location, i) in locations"
      :key="i"
      :class="{ 'location-card-selected': selectedLocationId === location.id }"
      @click="setSelectedLocationId(location.id)"
    >
      <div class="picture-container">
        <img :src="require(`@/assets/${location.image}`)" />
      </div>
      <div class="properties-container">
        <div class="properties">
          <h3>{{ location.name }}</h3>
          <p>{{ location.difficulty }}</p>
          <p v-if="location.distance">
            Distance: {{ location.distance.toFixed(1) }} km
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "LocationList",
  methods: {
    ...mapMutations("discover", ["setSelectedLocationId"]),
  },
  computed: {
    ...mapGetters("discover", ["locations", "selectedLocationId"]),
  },
};
</script>

<style scoped>
.location-card {
  background-color: #c2c5cc;
  width: 100%;
  height: 110px;
  display: flex;
  border-radius: 32px;
  margin-bottom: 10px;
  box-sizing: border-box;
  overflow: hidden;
}

.location-card-selected {
  background: #c2c5cc;
}

.properties-container {
  flex: 1 1 0;
}

.properties {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  padding: 6px;
  font-weight: 500;
}

.properties h3,
p {
  display: flex;
  text-align: cet;
  margin: 2px 40px 0px 0px;
}

.properties p {
  color: #1d3557;
  font-weight: 300;
  font-size: 11pt;
}

.picture-container {
  flex: 1 1 0;
}

.picture-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.location-list-container {
  overflow-y: auto;
  overflow-x: visible;
}
</style>
