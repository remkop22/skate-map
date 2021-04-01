
import axios from 'axios'

export default {

  getLocations(query = undefined){
    console.log(query)
    return new Promise((resolve, reject) => 
      axios.get('https://localhost:3000/api/v1/locations')
      .then(res => resolve(res.data.locations))
      .catch(err => reject(err))
    )
  }

}
