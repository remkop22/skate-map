import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    locations: [
        {
          name: 'Utrecht Griftpark',
          difficulty: 'Intermediate',
          distance: 0.3,
          coord: {
            lat: 52.278241,
            lon: 5.167
          }
        },
        {
          name: 'Amsterdam Zuid',
          difficulty: 'Advanced',
          distance: 5,
          coord: {
            lat: 51.278241,
            lon: 5.167
          }
        }  
    
      ]
  },
  getters: {
    locations: (state) => state.locations
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
