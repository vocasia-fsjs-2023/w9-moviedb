'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Movies', [
      {
        title: 'Ice Cold',
        description: 'Dokumentari Kematian Mirna',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Pamali',
        description: 'Horror',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Mencuri Raden saleh',
        description: 'Pencurian Lukisan Raden Saleh',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Nun',
        description: 'Horror',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Dilan 1990',
        description: 'Romance',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Movies', null, {});
  }
};
