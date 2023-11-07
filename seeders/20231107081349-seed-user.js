'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert(
      "Users", [
        {
          name: "Leonardo Ephraim",
          email: "leonardoephraim24@gmail.com",
          password: "123454321",
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