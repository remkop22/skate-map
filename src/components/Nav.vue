<template>
  <div class="nav">  
    <h3 class="nav-name">skate-map</h3>
    <div class="nav-item-container">
      <router-link class="nav-item" to="/Feed"><h1>Feed</h1></router-link>
      <router-link class="nav-item" to="/"><h1>Map</h1></router-link>
      <router-link class="nav-item" to="/Discover"><h1>Discover</h1></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style scoped>

.nav{
  display: flex;
  border-bottom: 2px solid #dddddd;
  align-items: center;
}

.nav-item-container{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.nav-item, .nav-name{
  margin: 0.5em 1em; 
  text-decoration: none;
  color: black;
}

.router-link-exact-active{
  text-decoration: underline;
}

.nav-name{
  color: black;
  user-select: none;
  position: absolute;
}

</style>
