"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     */
    await queryInterface.bulkInsert(
      "Movies",
      [
        {
          title: "The Avenger: Infinity War",
          description: "Diproduksi oleh Marvel Studios",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Iron Man 3",
          description: "Diproduksi oleh Marvel Studios",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Wall-E",
          description: "Diproduksi oleh Pixar Animation Studios",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Ponyo",
          description: "Diproduksi oleh Studio Ghibli",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Kung Fu Panda 2",
          description: "Diproduksi oleh DreamWorks Animation",
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
     */
    await queryInterface.bulkDelete("Movies", null, {});
  },
};
