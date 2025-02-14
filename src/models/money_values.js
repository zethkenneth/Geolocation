'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Money_values extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Money_values.belongsTo(models.Treasures, {
        foreignKey: "id",
      });
    }
  }
  Money_values.init(
    {
      treasure_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Treasures",
          key: "id",
        },
      },
      amt: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Money_values",
    }
  );
  return Money_values;
};