<template>
  <div class="nav">  
    <div class="nav-name" :class="{'is-animated': isanimated}" @click="isanimated = !isanimated"><vLottiePlayer
        name="workoutMonkeyAnim"
        loop
        height=105px
        speed=0.1
        :animationData="require('../assets/logo.json')"
      /></div>
    <div class="nav-item-container">
      <router-link id="disc" class="nav-item" to="/Discover" :class="{'is-animated': isanimated}" @click="isanimated = !isanimated"><h1>Discover</h1></router-link>
      <router-link id="feed" class="nav-item" to="/Feed" :class="{'is-animated': isanimated}" @click="isanimated = !isanimated"><h1>Feed</h1></router-link>
    </div>
  </div>
</template>

<script>
import VueLottiePlayer from "vue-lottie-player";
export default {
  name: 'Nav',
  data(){return{
    isanimated: false 
  }},
  components: {
  vLottiePlayer: VueLottiePlayer
  }
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
  color: #1D3557;;
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
  fill: #1D3557;
  filter: invert(18%) sepia(7%) saturate(4981%) hue-rotate(177deg) brightness(97%) contrast(93%);
}

#feed.is-animated{
  content: url(../assets/feed.svg);
  fill:#1D3557;
  filter: invert(18%) sepia(7%) saturate(4981%) hue-rotate(177deg) brightness(97%) contrast(93%);
  color: transparent; 
  max-width: 40px;
  min-height: 60px;
  
}

</style>
