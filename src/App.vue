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

<style>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap');

html, body{
  margin: 0;
  box-sizing: border-box;
  height: 100%;
}

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-weight: 700;
  color: #1D3557;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color : #F7F1DA;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
