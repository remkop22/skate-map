<template>
  <div class="hamburger-menu" v-if="hamburgerActive"></div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "HamburgerMenu",
  computed: {
    ...mapGetters(["hamburgerActive"]),
  },
};
</script>

<style lang="scss" scoped>
@import "./scss/variables.scss";

.hamburger-menu {
  width: clamp(200px, 40vw, 80vw);
  height: 100%;
  z-index: 10;
  background: $primary;
}
</style>
