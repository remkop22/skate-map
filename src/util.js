
export default {

  haversine: (lat1, lon1, lat2, lon2) => {
    console.log(lat1, lon1, lat2, lon2)
    const R = 6371
    const r1 = lat1 * Math.PI/180
    const r2 = lat2 * Math.PI/180
    const delta_r = (lat2 - lat1) * Math.PI/180
    const delta_s = (lon2 - lon1) * Math.PI/180
    const a = (Math.sin(delta_r/2) ** 2) + (Math.cos(r1) * Math.cos(r2)) + (Math.sin(delta_s) ** 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return (R * c) / 1000
  }

}
