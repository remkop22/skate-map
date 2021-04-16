<template>
  <div class="nav">
    <img class="hamburger" src="../assets/hamburger.svg" />
    <div class="nav-name">
      <vLottiePlayer
        ref="anim"
        name="Skatemap"
        loop
        height="105px"
        :animationData="require('../assets/logo.json')"
        :speed="0.2"
      />
    </div>
    <!-- <div class="nav-item-container">
      <router-link id="disc" class="nav-item" to="/Discover" ><h1>Discover</h1></router-link>
      <router-link id="feed" class="nav-item" to="/Feed" ><h1>Feed</h1></router-link>
    </div> -->
  </div>
</template>

<script></script>

<style scoped>
.hamburger {
  position: absolute;
  margin: 20px;
  max-width: 50px;
  max-height: 50px;
  left: 0;
  content: url(../assets/hamburger.svg);
  filter: invert(6%) sepia(35%) saturate(5041%) hue-rotate(206deg)
    brightness(98%) contrast(105%);
}

.nav {
  display: flex;
  min-height: 90px;
  justify-content: center;
  align-content: center;
  align-items: center;
}
</style>
