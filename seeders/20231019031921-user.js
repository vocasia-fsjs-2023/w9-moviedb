'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
          {
              name: "Radja",
              email: "radjaabc@gmail.com",
              password: "12345678",
              isAdmin: true,
              createdAt: new Date(),
              updatedAt: new Date(),
          },
      ],
      {}
  );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete("users", null, {});
    },
};
