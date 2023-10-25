'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users",
      [
          {
              name: "Uti Tiyanum",
              email: "utitiyanum@admin.com",
              password: "1234567890",
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
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
  }
};
