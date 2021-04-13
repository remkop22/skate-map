const toRad = (val) => (val * Math.PI) / 180;

const haversine = (p1, p2) => {
  const { latitude: lat1, longitude: lon1 } = p1;
  const { latitude: lat2, longitude: lon2 } = p2;
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

export default {
  haversine,
};
