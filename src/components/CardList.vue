<template>
  <div class="card-list-container">
    <div class="card" v-for="card, i in cards" :key="i">
      <div class="picture-container">
        <img :src="require(`@/assets/${card.image}`)"  />
      </div>
      <div class="properties-container">
        <div class="properties">
          <h3>{{card.name}}</h3>
          <p>{{card.difficulty}}</p>
          <p v-if="card.distance">Distance: {{card.distance.toFixed(1)}} km</p>
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
export default {
  name: 'CardList',
  props: {
    cards: Array
  }
}
</script>


<style scoped>
.card{
  width: 100%;
  height: 150px;
  display: flex;
  border-radius: 0.5em;
  border: 1px solid #dddddd;
  margin-bottom: 0.5em;
  box-sizing: border-box;
  overflow: hidden;
}

.card:hover{
  border: 1px solid #666666;
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
  color: darkgray;
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

.card-list-container{
  overflow-y: auto;
  overflow-x: visible;
}

</style>
