<template>
  <div class="location-list-container">
    <div class="location-card" v-for="location, i in locations" :key="i" :class="{'location-card-selected': selectedLocationId === location.id}" 
      @click="setSelectedLocationId(location.id)" >
      <div class="picture-container">
        <img :src="require(`@/assets/${location.image}`)"  />
      </div>
      <div class="properties-container">
        <div class="properties">
          <h3>{{location.name}}</h3>
          <p>{{location.difficulty}}</p>
          <p v-if="location.distance">Distance: {{location.distance.toFixed(1)}} km</p>
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
  name: 'LocationList',
  methods: {
    ...mapMutations(['setSelectedLocationId'])
  },
  computed: {
    ...mapGetters(['locations', 'selectedLocationId'])
  }
}
</script>


<style scoped>
.location-card{
  background-color: #C2C5CC;
  width: 100%;
  height: 150px;
  display: flex;
  border-radius: 1.7em;
  margin-bottom: 0.5em;
  box-sizing: border-box;
  overflow: hidden;
}

.location-card-selected{
  background: #C2C5CC;
}

.location-card:hover{

}

.properties-container{
  flex: 1 1 0;
}

.properties{
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  padding: 1em;
}

.properties h3, p{
  margin: 0.2em 0;
}

.properties p{
  color: #1D3557;
  font-size: 0.9em;
}

.picture-container{
  flex: 1 1 0
}

.picture-container img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.location-list-container{
  overflow-y: auto;
  overflow-x: visible;
}
h3{
  font-weight: bold;
}

</style>
