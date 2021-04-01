
import axios from 'axios'

export default {

  getLocations(query = undefined){
    console.log(query)
    return new Promise((resolve, reject) => 
      axios.get('http://localhost:8080/api/v1/locations')
      .then(res => resolve(res.data.locations))
      .catch(err => reject(err))
    )
  }

}
