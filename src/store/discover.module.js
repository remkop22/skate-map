
import util from '@/util.js'

export default {
  namespaced: true,
  state: () => ({
    locations: [],
    userLocation: undefined,
    selectedLocationId: undefined
  }),
  mutations: {
    setUserLocation: (state, location) => state.userLocation = location,
    setSelectedLocationId: (state, id) => state.selectedLocationId = id
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
    selectedLocation: (state) => state.locations.find(l => l.id === state.selectedLocationId)
  }
}

