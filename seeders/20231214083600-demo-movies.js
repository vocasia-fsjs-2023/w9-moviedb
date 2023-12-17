// 'use strict';

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up (queryInterface, Sequelize) {
//     /**
//      * Add seed commands here.
//      *
//      * Example:
//      * await queryInterface.bulkInsert('People', [{
//      *   name: 'John Doe',
//      *   isBetaMember: false
//      * }], {});
//     */
//   },

//   async down (queryInterface, Sequelize) {
//     /**
//      * Add commands to revert seed here.
//      *
//      * Example:
//      * await queryInterface.bulkDelete('People', null, {});
//      */
//   }
// };

/* SEBELUMNYA DIATAS */

/* SESUDAHNYA */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Movies', [
      {
        title: 'Movie 1',
        description: 'Description for Movie 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Movie 2',
        description: 'Description for Movie 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Movie 3',
        description: 'Description for Movie 3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Movie 4',
        description: 'Description for Movie 4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Movie 5',
        description: 'Description for Movie 5',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Movies', null, {});
  }
};
