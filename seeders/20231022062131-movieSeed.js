'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'movies',
      [
        {
          title: 'Ngeri-ngeri sedap',
          description : 'Drama',
          createdAt: new Date(),
          updatedAt: new Date(),
          },
          {
            title: 'Sewu dino',
            description : 'Horor',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: 'Imperfect',
            description : 'Romance',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: 'Nanti kita cerita tentang hari ini',
            description : 'Drama',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            title: 'Laundry show',
            description : 'Comedy',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Movies', null, {});
  }
};
