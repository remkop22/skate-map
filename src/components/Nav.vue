<template>
  <div class="nav">
    <div class="flex-group-left">
      <img
        v-if="isMobile"
        class="hamburger"
        src="../assets/hamburger.svg"
        @click="toggleHamburger()"
      />
    </div>
    <div class="flex-group-center">
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
    </div>
    <div class="flex-group-right"></div>
    <!-- <div class="nav-item-container">
      <router-link id="disc" class="nav-item" to="/Discover" ><h1>Discover</h1></router-link>
      <router-link id="feed" class="nav-item" to="/Feed" ><h1>Feed</h1></router-link>
    </div> -->
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Nav",
  methods: {
    ...mapMutations(["toggleHamburger"]),
  },
  computed: {
    ...mapGetters(["isMobile"]),
  },
};
</script>

<style scoped>
.hamburger {
  margin: 20px;
  content: url(../assets/hamburger.svg);
  filter: invert(6%) sepia(35%) saturate(5041%) hue-rotate(206deg)
    brightness(98%) contrast(105%);
}

.flex-group-left,
.flex-group-right {
  flex: 1 1 0;
}

.flex-group-left {
  display: flex;
  justify-content: left;
}

.flex-group-center {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}

.nav {
  display: flex;
  min-height: 90px;
  justify-content: space-around;
  align-content: center;
  align-items: center;
}
</style>
