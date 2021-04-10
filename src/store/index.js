import Vue from 'vue'
import Vuex from 'vuex'
import util from '@/util.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    locations: [
        {
          name: 'Utrecht Jaarbeurs',
          difficulty: 'Intermediate',
          image: 'jaarbeurs.gif',
          coords: {
            latitude: 52.089,
            longitude: 5.1068
          },
          id: 0
        },
        {
          name: 'Utrecht Griftpark',
          difficulty: 'Intermediate',
          image: 'park1.jpg',
          coords: {
            latitude: 52.09979,
            longitude: 5.12755
          },
          id: 1
        },
        {
          name: 'Amsterdam Zuid',
          difficulty: 'Advanced',
          image: 'park2.jpg',
          coords: {
            latitude: 52.34621,
            longitude: 4.86644
          },
          id: 2
        },
        {
          name: 'Rotterdam Zuid',
          difficulty: 'Advanced',
          image: 'park2.jpg',
          coords: {
            latitude: 51.91693,
            longitude: 4.47623
          },
          id: 3
        }
      ],
    userLocation: undefined,
    selectedLocationId: undefined,
    windowSize: undefined
  },
  getters: {
    locations: (state) => {
      if(state.userLocation){
        return state.locations.map(l => {
          l.distance = util.haversine(l.coords.latitude, l.coords.longitude, state.userLocation.coords.latitude, state.userLocation.coords.longitude)
          return l
        })
      }else{
        return state.locations
      }
    },
    userLocation: (state) => state.userLocation,
    selectedLocationId: (state) => state.selectedLocationId,
    selectedLocation: (state) => state.locations.find(l => l.id === state.selectedLocationId),
    getWindowSize: (state) => state.windowSize,
    isMobile: (state) => state.windowSize !== undefined && state.windowSize.width < 900
  },
  mutations: {
    setUserLocation: (state, location) => state.userLocation = location,
    setSelectedLocationId: (state, id) => state.selectedLocationId = id,
    setWindowSize: (state, {width, height}) => state.windowSize = {width, height}
  },
  actions: {
  },
  modules: {
  }
})
