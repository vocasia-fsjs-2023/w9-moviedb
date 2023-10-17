'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert(
      "Movies",
      [
        {
          title: "Movie 1",
          description: "Description Movie 1.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Movie 2",
          description: "Description Movie 2.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Movie 3",
          description: "Description Movie 3.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Movie 4",
          description: "Description Movie 4.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Movie 5",
          description: "Description Movie 5.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Movies", null, {});
  }
};
