const db = require("../core/helper/sequelize.js")
const { QueryTypes } = require("sequelize");

const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const toRad = (value) => (value * Math.PI) / 180;
  const R = 6371; // Radius of the Earth in km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

module.exports = {
  geoLoc: async (data) => {
    const { lat, lon, dist, prize } = data;

    const userLocation = {
      latitude: lat,
      longitude: lon,
    };

    try {

      const treasureBoxes = await db.query("SELECT * FROM geo_db.Treasures INNER JOIN geo_db.Money_values ON geo_db.Treasures.id = geo_db.Money_values.treasure_id",
        {
          type: QueryTypes.SELECT,
        }
      )
      
      const prizes = [];
        treasureBoxes.forEach((box) => {
          const distance = calculateDistance(
            userLocation.latitude,
            userLocation.longitude,
            box.latitude,
            box.longitude
          );

          const isWithinDistance = distance <= dist;
          const hasValidPrize = prize === undefined || box.amt >= prize;

          let t;
          
          if (isWithinDistance && hasValidPrize) {
            t = {
              treasure_name: box.name,
              treasure_price: box.amt,
            };
          } else{
            return;
          }

          if (t) {
            prizes.push(t);
          }
        });


      return prizes;
    } catch (error) {
      console.log("Error", error);      
      return error
    }
  }
};
