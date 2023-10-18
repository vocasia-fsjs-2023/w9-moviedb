'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
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
      'Movies', 
      [
        {
          title: 'Kimetsu No Yaiba',
          description: 'is a Japanese manga series written and illustrated by Koyoharu Gotōge.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Naruto',
          description: 'is a manga series by Masashi Kishimoto which was adapted into an anime series.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Shingeki no Kyojin,',
          description: 'is a Japanese shōnen manga series written and illustrated by Hajime Isayama.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Black Clover',
          description: 'is a Japanese fantasy shōnen manga series written and illustrated by Yūki Tabata.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Hunter x Hunter',
          description: 'is a Japanese shōnen manga series written and illustrated by Yoshihiro Togashi.',
          createdAt: new Date(),
          updatedAt: new Date()
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
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Users', null, {});
  }
};

