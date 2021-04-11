<template>
  <div id="app">
    <Nav/>
    <router-view/>
  </div>
</template>


<script>
import Nav from '@/components/Nav.vue'
export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style lang="scss">

@import "./scss/variables.scss";
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap');

html, body{
  margin: 0;
  box-sizing: border-box;
  height: 100%;
}

#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $secondary;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color : $primary;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: $secondary;
}

#nav a.router-link-exact-active {
  color: $secondary;
}
</style>
