import Vue from "vue";
import Vuex from "vuex";

import discoverModule from "@/store/discover.module.js";

Vue.use(Vuex);

const state = {
  windowSize: undefined,
};

const getters = {
  isMobile: (state) =>
    state.windowSize ? state.windowSize.innerWidth < 900 : false,
};

const mutations = {
  setWindowSize: (state, { innerWidth, innerHeight }) =>
    (state.windowSize = { innerWidth, innerHeight }),
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  modules: {
    discover: discoverModule,
  },
});
