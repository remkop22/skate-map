<template>
  <div id="app">
    <Nav/>
    <router-view/>
  </div>
</template>


<script>
import Nav from '@/components/Nav.vue'
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {
    Nav
  },
  mounted(){
    this.$nextTick(() => window.addEventListener('resize', this.handleResize))
  },
  beforeDestroy(){
    window.removeEventListener('resize', this.handleResize)
  },
  computed: {
    ...mapGetters(['isMobile', 'getWindowSize'])
  },
  methods: {
    ...mapMutations(['setWindowSize']),
    handleResize(){
      this.setWindowSize({width: window.innerWidth, height: window.innerHeight}) 
    }
  }
}
</script>

<style>

/* @import "./scss/variables.scss"; */
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
  color: #1D3557;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color : #F2F2F2;
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
