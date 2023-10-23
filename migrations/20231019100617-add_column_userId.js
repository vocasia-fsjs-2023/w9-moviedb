'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("reviews","userId",{
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id"
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("reviews","userId");
  },
};
