
import axios from 'axios'

export default {

  getLocations(query = undefined, sort = undefined, userLocation = undefined){
    let params = {}
   
    query ? params['q'] = query : undefined
    sort ? params['sort'] = sort : undefined
    if(userLocation && sort == 'distance'){
      params['latitude'] = userLocation.latitude
      params['longitude'] = userLocation.longitude
    }

    return new Promise((resolve, reject) => 
      axios.get('/api/v1/locations', { params })
      .then(res => resolve(res.data.locations))
      .catch(err => reject(err))
    )
  }

}
