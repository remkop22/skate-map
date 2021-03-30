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
          image: 'park1.jpg',
          coord: {
            lat: 52.278241,
            lon: 5.167
          }
        },
        {
          name: 'Amsterdam Zuid',
          difficulty: 'Advanced',
          distance: 5,
          image: 'park2.jpg',
          coord: {
            lat: 51.278241,
            lon: 5.167
          }
        }  
      ],
    userLocation: undefined
  },
  getters: {
    locations: (state) => state.locations,
    userLocation: (state) => state.userLocation
  },
  mutations: {
    setUserLocation: (state, location) => state.userLocation = location
  },
  actions: {
  },
  modules: {
  }
})
