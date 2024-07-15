'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Treasures", {
      id: {
        type: Sequelize.INTEGER,
      },
      latitude: {
        type: Sequelize.FLOAT(11, 5),
      },
      longtitude: {
        type: Sequelize.FLOAT(11, 5),
      },
      name: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Treasures');
  }
};