import Vue from 'vue'
import Vuex from 'vuex'
import util from '@/util.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    locations: [
        {
          name: 'Utrecht Griftpark',
          difficulty: 'Intermediate',
          image: 'park1.jpg',
          coord: {
            lat: 52.09979,
            lon: 5.12755
          }
        },
        {
          name: 'Amsterdam Zuid',
          difficulty: 'Advanced',
          image: 'park2.jpg',
          coord: {
            lat: 52.34621,
            lon: 4.86644
          }
        },
        {
          name: 'Amsterdam Zuid',
          difficulty: 'Advanced',
          image: 'park2.jpg',
          coord: {
            lat: 51.91693,
            lon: 4.47623
          }
        }
      ],
    userLocation: undefined
  },
  getters: {
    locations: (state) => {
      if(state.userLocation){
        return state.locations.map(l => {
          l.distance = util.haversine(l.coord.lat, l.coord.lon, state.userLocation.coords.latitude, state.userLocation.coords.longitude)
          return l
        })
      }else{
        return state.locations
      }
    },
    userLocation: (state) => state.userLocation
  },
  mutations: {
    setUserLocation: (state, location) => {
      state.userLocation = location
    }
  },
  actions: {
  },
  modules: {
  }
})
