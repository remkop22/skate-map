<template>
  <div class="discover-view">
    <div class="location-container">
      <div class="search-container">
        <input type="search" class="search-bar search-bar-item">
        <select class="search-bar-item">
          <option>Nearby</option>
          <option>Popular</option>
          <option>Rating</option>
        </select>
        <component v-bind:is="icon"></component>
        <button v-on:click="icon = 'map'" class="filter-btn search-bar-item"></button>
      </div>
            <div class="filter-container">
          <div class="filterbutton"></div>
          <div class="stars"></div>
          <div class="sort"></div>
      </div>
      <LocationList/>
    </div>
    <LocationMap/>
  </div>
</template>

<script>
import LocationMap from '@/components/LocationMap.vue'
import LocationList from '@/components/LocationList.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    'map': LocationMap,
    'list': LocationList
  },
  data() {
    return {
      bak: 'list'
    }
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
    max-width: 100%;
  }
}
.search-bar{
  width: 100%;
  max-width: 400px;
  background: url(../assets/search.svg) top left  no-repeat;
  background-color: #C2C5CC;
}


.filter-btn{
  margin-right: 0 !important;
  background: url(../assets/map.svg) top left no-repeat;
  filter: $filter;
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

.filter-container{
  display: flex;
}
.discover-view{
  display: flex;
  overflow: hidden;
  height: 100%;
  padding: 1em;
}

.location-container{
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
select{
  background-color: #C2C5CC;
  color: $primary;
}
</style>
