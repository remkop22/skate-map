import Vue from 'vue'
import Vuex from 'vuex'

import discoverModule from '@/store/discover.module.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    discover: discoverModule
  }
})
