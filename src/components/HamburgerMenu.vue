<template>
  <div class="hamburger-menu" v-if="false"></div>
</template>

<script>
export default {
  name: "HamburgerMenu",
};
</script>

<style lang="scss" scoped>
@import "./scss/variables.scss";

.hamburger-menu {
  width: 50vw;
  height: 100%;
  z-index: 10;
  background: $primary;
}
</style>
