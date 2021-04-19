<template>
  <div class="nav pb-8 min-h-full">
    <img
      @click="activeSidebar = !activeSidebar"
      class="hamburger m-8"
      src="../assets/hamburger.svg"
    />
    <vs-sidebar
      absolute
      v-model="active"
      :open.sync="activeSidebar"
    ></vs-sidebar>
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
    <div class="hamburger2"></div>
    <!-- <div class="nav-item-container">
      <router-link id="disc" class="nav-item" to="/Discover" ><h1>Discover</h1></router-link>
      <router-link id="feed" class="nav-item" to="/Feed" ><h1>Feed</h1></router-link>
    </div> -->
  </div>
</template>

<script>
export default {
  data: () => ({
    active: "home",
    activeSidebar: false,
  }),
};
</script>

<style scoped>
.hamburger {
  filter: invert(6%) sepia(35%) saturate(5041%) hue-rotate(206deg)
    brightness(98%) contrast(105%);
  cursor: pointer;
}

.nav {
  display: flex;
  min-height: 90px;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}
</style>
