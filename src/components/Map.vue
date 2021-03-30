<template>
  <div class="map-container" id="map-container"></div>
</template>

<script>
import "leaflet/dist/leaflet.css"
import Leaflet from "leaflet"
import "leaflet.markercluster"
export default {
  name: "Map",
  props: {
    locations: Array
  },
  data(){
    return {
      center: [51.915, 4.456],
      map: undefined,
      markers: undefined
    }
  },
  methods: {
    setupLeaflet: function(){
      this.map = Leaflet.map("map-container").setView(this.center, 13)
      this.markers = Leaflet.markerClusterGroup()
      Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map)
      this.map.addLayer(this.markers)
    },
    updateMarkers: function(){
      this.locations.forEach(l => this.markers.addLayer(Leaflet.marker(l)))
    }
  },
  mounted(){
    this.setupLeaflet()
    this.updateMarkers()
  }
}
</script>

<style>
</style>
