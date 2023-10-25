'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'Users',
       [
        {
          name: 'zulfaa aprilia',
          email: 'zulfaapril25@gmail.com',
          password: '87654321',
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date()
    }
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
