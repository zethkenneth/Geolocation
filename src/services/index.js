
const haversine = require("haversine");
// const haversine = require("haversine-distance");
const geolib = require("geolib");
const { QueryTypes, Sequelize } = require("sequelize");

const sequelize = new Sequelize("geo_db", "root", "rootpassword", {
  host: "localhost",
  dialect: "mysql", // or 'mysql', 'sqlite', 'mariadb', 'mssql'
});

function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in kilometers
  return distance;
}

module.exports = {
  geoLoc: async (data) => {
    try {

    const { lat, lon, dist, prize } = data.body;

    const treasureBoxes = await sequelize.query(
      "SELECT * FROM geo_db.Treasures INNER JOIN geo_db.Money_values ON geo_db.Treasures.id = geo_db.Money_values.treasure_id",
      {
        type: QueryTypes.SELECT,
      }
    );


    const userLocation = {
        latitude: lat,
        longtitude: lon
    };

    const result = treasureBoxes.filter(async (box) => {
      const boxLocation = {
        latitude: box.latitude,
        longitude: box.longitude,
      };

      const distance = getDistance(lat, lon, box.latitude, box.longitude);    
      return distance;
    });


      return result;
    } catch (error) {
      return error;
    }
  }
};
