
import axios from 'axios'

export default {

  getLocations(query = undefined){
    return new Promise((resolve, reject) => 
      axios.get('http://localhost:8080/api/v1/locations', {
        params: {
          q: query
        }
      })
      .then(res => resolve(res.data.locations))
      .catch(err => reject(err))
    )
  }

}
