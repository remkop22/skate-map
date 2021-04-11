<template>
  <div class="discover-view">
      <div class="search-container">
        <input type="search" class="search-bar search-bar-item">
        <select class="search-bar-item">
          <option>Nearby</option>
          <option>Popular</option>
          <option>Rating</option>
        </select>
        <router-link class="filter-btn search-bar-item" to="/Discover"></router-link>
      </div>
      <div class="filter-container">
          <div class="filterbutton"></div>
          <div class="stars"></div>
          <div class="sort"></div>
      </div>
    <LocationMap/>
  </div>
</template>

<script>
import LocationMap from '@/components/LocationMap.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'DiscoverView',
  components: {
    LocationMap
  },
  computed: {
    ...mapGetters(['locations'])
  }
}
</script>

<style scoped>

@media (max-width: 900px){
  .discover-view{
    flex-direction: column;
    align-items: stretch;
    overflow: visible;
  }
  .location-container{
    max-width: 600px;
  }
}
.search-bar{
  width: 100%;
  max-width: 400px;
  background: url(../assets/search.svg) center left  no-repeat, url(../assets/cursor.svg)center right no-repeat;
  background-size: 25px, 14px;
  background-origin: content-box;
  background-color: #C2C5CC;
}


.filter-btn{
  margin-right: 0 !important;
  background: url(../assets/list.svg) top left no-repeat;
  filter: invert(6%) sepia(35%) saturate(5041%) hue-rotate(206deg) brightness(98%) contrast(105%);
}

.search-bar-item{
  margin-right: 0.2em;
  border: none; 
  padding: 0.3em 1em;
  border-radius: 7px;
  appearance: none;
}

.search-container{
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

.discover-view{
  display: flex;
  overflow: hidden;
  height: 100%;
  padding: 1em;
}

.location-container{
  margin-right: 0.5em;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.map-container{
  height: 100%;
  margin-left: 0.5em;
  border-radius: 0.5em;
}

.filter-container{
  display: flex;
}

.filterbutton{
    width: 30px;
    height: 30px;
    margin-left: 20px;
    background: url(../assets/settings.svg) top left no-repeat;
}

.stars{
    width: 100%;
    height: 30px;
    margin-right: 20px;
    background: url(../assets/stars.svg) top right no-repeat;
}

.sort{
    width: 100px;
    height: 30px;
    margin-right: 20px;
    background: url(../assets/sort.svg) top right no-repeat;
}

.location-list-container{
  margin-top: 0.5em;
  height: 100%;
}
select{
  background-color: #C2C5CC;
  color: #001334;
}
</style>
