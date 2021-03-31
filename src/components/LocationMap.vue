<template>
  <div class="map-container" id="map-container"></div>
</template>

<script>
import "leaflet/dist/leaflet.css"
import Leaflet from "leaflet"
import "leaflet.markercluster/dist/MarkerCluster.Default.css"
import "leaflet.markercluster"
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: "LocationMap",
    data(){
    return {
      center: [52.1326, 5.2913],
      map: undefined,
      markers: undefined
    }
  },
  methods: {
    ...mapMutations(['setUserLocation', 'setSelectedLocationId']),
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
      this.locations.forEach(l => this.markers.addLayer(Leaflet.marker([l.coords.latitude, l.coords.longitude]).on('click', () => this.setSelectedLocationId(l.id))))
    },
    askUserLocation: function(){
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(this.setUserLocation)
      }
    },
    moveToLocation: function(location, zoom = 10){
      if(zoom == undefined){
        this.map.setView([location.coords.latitude, location.coords.longitude])
      }else{
        this.map.setView([location.coords.latitude, location.coords.longitude], zoom)
      }
    }
  },
  mounted(){
    this.askUserLocation()
    this.setupLeaflet()
    this.updateMarkers()
  },
  computed: {
    ...mapGetters(['userLocation', 'locations', 'selectedLocation', 'selectedLocationId'])
  },
  watch: {
    userLocation(newVal){
      if(this.setSelectedLocationId === undefined){
        this.moveToLocation(newVal)
      }
    },
    selectedLocation(newVal){
      if(newVal === undefined){
        this.moveToLocation(this.userLocation, undefined)
      }else{
        this.moveToLocation(newVal, undefined)
      }
    }
  }
}
</script>

<style>
</style>
