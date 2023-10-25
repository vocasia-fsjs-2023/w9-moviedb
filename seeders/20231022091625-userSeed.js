'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          nama: 'admin',
          email : 'admin@gmail.com',
          password: 'qwerty', 
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
