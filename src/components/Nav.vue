<template>
  <div class="nav">  
    <div class="nav-name" :class="{'is-animated': isanimated}" @click="isanimated = !isanimated">
      <vLottiePlayer
        ref="anim"
        name="Skatemap"
        loop
        height=105px
        :animationData="require('../assets/logo.json')" :speed="0.2"
      />
      </div>
    <div class="nav-item-container">
      <div v-anime="{ rotate: '1turn', backgroundColor: '#FFF', duration: 2000, loop: true }"></div>
      <router-link id="disc" class="nav-item" to="/Discover" :class="{'is-animated': isanimated}" @click="isanimated = !isanimated"><h1>Discover</h1></router-link>
      <router-link id="feed" class="nav-item" to="/Feed" :class="{'is-animated': isanimated}" @click="isanimated = !isanimated"><h1>Feed</h1></router-link>
    </div>
  </div>
</template>

<script>
// import VueLottiePlayer from "vue-lottie-player";
export default {
  name: 'Nav',
  data(){return{
    isanimated: false 
  }},
}
</script>

<style scoped>

.nav{
  display: flex;
  border-bottom: 2px solid #dddddd;
  align-items: center;
  min-height: 90px;
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
  color: #001334;
  font-weight: light;
}
h1{
   margin: 0.5em 1em; 
  text-decoration: none;
  text-decoration-thickness: auto;
  color: #001334;
  font-weight: light;
}

.router-link-exact-active{
  text-decoration: underline;
}

/* .nav-name{
  max-height: 90px;
} */

  .nav-name.is-animated{
    max-width: 240px;
    /* height: 43px; */
  }

#disc.is-animated{
  content: url(../assets/compass.svg);
  color: transparent; 
  max-width: 40px;
  min-height: 60px;
  filter: invert(6%) sepia(35%) saturate(5041%) hue-rotate(206deg) brightness(98%) contrast(105%);
}

#feed.is-animated{
  content: url(../assets/feed.svg);
  filter: invert(6%) sepia(35%) saturate(5041%) hue-rotate(206deg) brightness(98%) contrast(105%);
  color: transparent; 
  max-width: 40px;
  min-height: 60px;
  
}

</style>
