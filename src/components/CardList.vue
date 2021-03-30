<template>
  <div class="card-list-container">
    <div class="card" v-for="card, i in cards" :key="i">
      <div class="picture-container"></div>
      <div class="property-container">
        <h3>{{card.name}}</h3>
        <p>{{card.difficulty}}</p>
        <p>Distance: {{card.distance}} km</p>
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
  display: flex;
  border-radius: 0.5em;
  border: 1px solid #dddddd;
  margin-bottom: 0.5em;
  box-sizing: border-box;
}

.card:hover{
  border: 1px solid #666666;
}

.property-container{
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  padding: 1em;
}

.property-container h3, p{
  margin: 0.2em 0;
}

.property-container p{
  color: darkgray;
  font-size: 0.9em;
}

.picture-container{
  width: 100%; 
}

.card-list-container{
  overflow-y: auto;
  overflow-x: visible;
}

</style>
