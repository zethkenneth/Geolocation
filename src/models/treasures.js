'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Treasures extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Treasures.hasMany(models.Money_values, {
        foreignKey: "treasure_id",
      });
    }
  }
  Treasures.init(
    {
      id: DataTypes.INTEGER,
      latitude: DataTypes.FLOAT(11, 10),
      longtitude: DataTypes.FLOAT(11, 10),
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Treasures",
    }
  );
  return Treasures;
};