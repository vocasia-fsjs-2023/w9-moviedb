'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Movies",
      [
          {
              title: "Pamali: Dusun Hantu",
              description: "Ini adalah Film Horor.",
              createdAt: new Date(),
              updatedAt: new Date(),
          },
          {
              title: "Idiana Jones",
              description: "Ini adalah Film Perang.",
              createdAt: new Date(),
              updatedAt: new Date(),
          },
          {
              title: "Blue Battle",
              description: "Ini adalah Film Action.",
              createdAt: new Date(),
              updatedAt: new Date(),
          },
          {
              title: "Rumah Dara",
              description: "Ini adalah Film Horor.",
              createdAt: new Date(),
              updatedAt: new Date(),
          },
          {
              title: "Mak Tarjo",
              description: "Ini adalah Film Komedi.",
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
     */
    await queryInterface.bulkDelete('Movies', null, {});
     
  }
};
