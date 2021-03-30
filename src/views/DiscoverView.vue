<template>
  <div class="discover-view">
    <div class="result-container">
      <div class="search-container">
        <input type="search" class="search-bar search-bar-item" placeholder="Name, location or type">
        <select class="search-bar-item">
          <option>Nearby</option>
          <option>Popular</option>
          <option>Rating</option>
        </select>
        <input type="button" value="filter" class="filter-btn search-bar-item"/>
      </div>
      <CardList :cards="locations" />
    </div>
    <Map :locations="[[51.915, 4.456], [53, 6]]" />
  </div>
</template>

<script>
import Map from '@/components/Map.vue'
import CardList from '@/components/CardList.vue'
export default {
  name: 'DiscoverView',
  components: {
    Map,
    CardList
  },
  data(){
    return {
      locations: [
        {
          name: 'Utrecht Griftpark',
          difficulty: 'Intermediate',
          distance: 0.3
        },
        {
          name: 'Amsterdam Zuid',
          difficulty: 'Advanced',
          distance: 5
        }  
    
      ]
    }
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

.result-container{
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

.card-list-container{
  margin-top: 0.5em;
  height: 100%;
}
</style>
