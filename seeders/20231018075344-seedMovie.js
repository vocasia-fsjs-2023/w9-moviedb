'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Movies", 
    [
       {
         title: "Sounds of Freedom",
         description: "Thriller",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         title: "Dawn of the Dead",
         description: "Horror",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         title: "Chongseon",
         description: "Romance",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         title: "Oppenheimer",
         description: "History",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         title: "Tokobagus",
         description: "Comedy",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       
    ],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete("Movies", null, {});
  }
};
