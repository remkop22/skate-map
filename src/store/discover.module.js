
import locationsAPI from '@/api/locations.endpoint.js'
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
    setLocations: (state, locations) => state.locations = locations,
    setSelectedLocationId: (state, id) => state.selectedLocationId = id
  },
  
  getters: {
    locations: (state) => state.locations.map(l => {
      l.distance = state.userLocation ? util.haversine(l.coords, state.userLocation.coords) : undefined
      return l
    }),
    userLocation: (state) => state.userLocation,
    selectedLocationId: (state) => state.selectedLocationId,
    selectedLocation: (state) => state.locations.find(l => l.id === state.selectedLocationId)
  },
  
  actions: {
    fetchLocations: async ({commit, state}, {query, filters, sort}) => 
      locationsAPI.getLocations(query, sort, filters, state.userLocation)
        .then(locations => commit('setLocations', locations)),
  }
}

