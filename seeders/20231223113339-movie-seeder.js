'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("movies",[{
              title: "Movie 1",
              description: "Ini movie 1",
              createdAt: new Date(),
              updatedAt: new Date(),
          },
          {
              title: "Movie 2",
              description: "Ini movie 2",
              createdAt: new Date(),
              updatedAt: new Date(),
          },
          {
              title: "Movie 3",
              description: "Ini movie 3",
              createdAt: new Date(),
              updatedAt: new Date(),
          },
          {
              title: "Movie 4",
              description: "Ini movie 4",
              createdAt: new Date(),
              updatedAt: new Date(),
          },
          {
              title: "Movie 5",
              description: "Ini movie 5",
              createdAt: new Date(),
              updatedAt: new Date(),
          },
      ],
      {}
  );
},

async down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete("Movies", null, {});
},
};
