'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     //Add seed commands here.
     return queryInterface.bulkInsert(
      'Movies',
       [
        {
      title: 'Kisah Tanah Jawa: Pocong Gundul',
      description: 'Nonton bareng Kisah Tanah Jawa di Bioskop XXI',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Petualangan Sherina',
      description: 'Nonton bareng Petualangan Sherina di Bioskop XXI ',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Frozen 3',
      description: 'Nonton bareng Frozen di Bioskop XXI',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Elementals',
      description: 'Nonton bareng Elementals di Bioskop XXI ',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      title: 'Dread Out',
      description: 'Kisah anak sekolah yang awalnya masuk ke gedung tua buat vlog, nonton deh!',
      createdAt: new Date(),
      updatedAt: new Date()
    }

  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Movies', null, {});
  }
};
