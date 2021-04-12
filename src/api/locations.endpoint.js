
import axios from 'axios'

const base = '/api/v1/locations'

export default {

  getLocations: async (query, sort, filters, userLocation) => {
    let params = {}
    
    if(query) params['q'] = query;
    if(sort) params['sort'] = sort;
    
    if(userLocation && sort == 'distance'){
      params['latitude'] = userLocation.latitude;
      params['longitude'] = userLocation.longitude;
    }

    if(filters !== undefined && filters.length > 0){
      params['filter'] = filters
    }

    return axios.get(base, { params })
      .then(res => res.data.locations)
  },

  getTags: async () => axios.get(base + '/tags')
    .then(res => res.data.tags),

  getObjects: async () => axios.get(base + '/objects')
    .then(res => res.data.objects)

}
