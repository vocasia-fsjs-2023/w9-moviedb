'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Movies', [
      {
        title: 'watermelon',
        description: 'apa aja',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: '7 escape',
        description: 'ini adalah deskripsi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Movies', null, {});
  },
};
