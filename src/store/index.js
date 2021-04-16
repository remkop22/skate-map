import Vue from "vue";
import Vuex from "vuex";

import discoverModule from "@/store/discover.module.js";

Vue.use(Vuex);

const state = {
  windowSize: undefined,
  hamburgerActive: false,
};

const getters = {
  isMobile: (state) =>
    state.windowSize ? state.windowSize.innerWidth < 900 : false,
  hamburgerActive: (state, getters) =>
    state.hamburgerActive && getters.isMobile,
};

const mutations = {
  setWindowSize: (state, { innerWidth, innerHeight }) =>
    (state.windowSize = { innerWidth, innerHeight }),
  toggleHamburger: (state) => (state.hamburgerActive = !state.hamburgerActive),
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  modules: {
    discover: discoverModule,
  },
});
