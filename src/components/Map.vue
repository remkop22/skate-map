<template>
  <div class="map-container" id="map-container"></div>
</template>

<script>
import "leaflet/dist/leaflet.css"
import Leaflet from "leaflet"
import "leaflet.markercluster"
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: "Map",
    data(){
    return {
      center: [52.1326, 5.2913],
      map: undefined,
      markers: undefined
    }
  },
  methods: {
    ...mapMutations(['setUserLocation']),
    setupLeaflet: function(){
      this.map = Leaflet.map("map-container").setView(this.center, 6.8)
      this.markers = Leaflet.markerClusterGroup()
      Leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map)
      this.map.addLayer(this.markers)
    },
    updateMarkers: function(){
      this.locations.forEach(l => this.markers.addLayer(Leaflet.marker([l.coords.latitude, l.coords.longitude]).on('click', e => console.log(e))))
    },
    askUserLocation: function(){
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(this.setUserLocation)
      }
    }
  },
  mounted(){
    this.askUserLocation()
    this.setupLeaflet()
    this.updateMarkers()
  },
  computed: {
    ...mapGetters(['userLocation', 'locations'])
  },
  watch: {
    userLocation: function(newVal){
      this.map.setView([newVal.coords.latitude, newVal.coords.longitude], 10)
    }
  }
}
</script>

<style>
</style>
