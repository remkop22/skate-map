<template>
  <div class="search-container">
        <input type="search" class="search-bar search-bar-item">
        <select class="search-bar-item">
          <option>Nearby</option>
          <option>Popular</option>
          <option>Rating</option> 
        </select>
        <button class="switch-btn search-bar-item" 
        :class="{'switch-btn-map': mapMode, 'switch-btn-list': !mapMode}"  
        v-on:click="setMapMode(!mapMode)"></button>
        <div class="filter-container"></div>
        <div class="filterbutton"></div>
        <div class="stars"></div>
        <div class="sort"></div>
   </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default{
  name: 'Search',
  computed: {
    ...mapGetters(['mapMode'])
  },
  methods: {
    ...mapMutations(['setMapMode'])
  }
}
</script>

<style lang="scss" scoped>
.search-bar{
  width: 100%;
  max-width: 400px;
  background: url(../assets/search.svg) top left  no-repeat;
  background-size: 25px;
  background-color: #C2C5CC;
}


.filter-btn{
  margin-right: 0 !important;
  background: url(../assets/map.svg) top left no-repeat;
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

.filter-container{
  display: flex;
}

.switch-btn-list{
  background: url(../assets/list.svg) top left no-repeat;
}

.switch-btn-map{
  background: url(../assets/map.svg) top left no-repeat;
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
  color: #001334;
}
</style>