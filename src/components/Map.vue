<template>
  <div class="map-container" id="map-container"></div>
</template>

<script>
import "leaflet/dist/leaflet.css"
import Leaflet from "leaflet"
export default {
  name: "Map",
  data(){
    return {
      center: [51.915, 4.456]
    }
  },
  methods: {
    setupLeaflet: function(){
      const mapDiv = Leaflet.map("map-container").setView(this.center, 13)
      Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapDiv)
    }
  },
  mounted(){
    this.setupLeaflet()
  }
}
</script>

<style>
.map-container{
  width: 100%;
  height: 500px;
}
</style>
