"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        name: "Shefia Anggraeni",
        email: "shefiaanggraeni37@gmail.com",
        password: "0977684",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Tambahkan data seeder lainnya di sini
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
