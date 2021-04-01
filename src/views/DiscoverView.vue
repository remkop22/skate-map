<template>
  <div class="discover-view">
    <div class="location-container">
      <div class="search-container">
        <input type="search" class="search-bar search-bar-item" placeholder="Name, location or type" @keydown.enter="searchSubmit">
        <select class="search-bar-item">
          <option>Nearby</option>
          <option>Popular</option>
          <option>Rating</option>
        </select>
        <input type="button" value="filter" class="filter-btn search-bar-item"/>
      </div>
      <LocationList/>
    </div>
    <LocationMap/>
  </div>
</template>

<script>
import LocationMap from '@/components/LocationMap.vue'
import LocationList from '@/components/LocationList.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'DiscoverView',
  components: {
    LocationMap,
    LocationList
  },
  methods: {
    ...mapActions('discover', ['fetchLocations']),
    searchSubmit(){
      this.fetchLocations().catch(err => console.error(err))
    }
  },
  computed: {
    ...mapGetters('discover' ,['locations'])
  }
}
</script>

<style scoped>

.search-bar{
  width: 100%;
}

.filter-btn{
  margin-right: 0 !important;
}

.search-bar-item{
  margin-right: 0.2em;
  background-color: transparent;
  border: 2px solid #dddddd; 
  padding: 0.3em 1em;
  border-radius: 7px;
  appearance: none;
}

.search-container{
  display: flex;
}

.discover-view{
  display: flex;
  overflow: hidden;
  height: 100%;
  padding: 1em;
}

.location-container{
  width: 50%;
  margin-right: 0.5em;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.map-container{
  width: 100%;
  height: 100%;
  margin-left: 0.5em;
  border-radius: 0.5em;
}

.location-list-container{
  margin-top: 0.5em;
  height: 100%;
}
</style>
