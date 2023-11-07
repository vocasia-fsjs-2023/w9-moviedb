'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert(
      "Users", [
        {
          name: "Irhas Wira",
          email: "wirairhas@gmail.com",
          password: "irhas11",
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {})
  }
};
