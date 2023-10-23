"use strict";

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
      "movies",
      [
        {
          title: "The Walking Dead",
          description:
            "Deputi Sheriff Rick Grimes ditembak dan jatuh koma. Ketika terbangun dia menemukan dirinya dalam Zombie Apocalypse. Tidak tahu apa yang harus dia lakukan, dia menetapkan untuk menemukan keluarganya, setelah dia melakukan itu, dia terhubung dengan kelompok untuk menjadi pemimpin. Dia mengambil alih dan mencoba untuk membantu kelompok orang ini bertahan hidup, menemukan tempat tinggal dan mendapatkan mereka makanan. Acara ini adalah semua tentang kelangsungan hidup, risiko dan hal-hal yang harus Anda lakukan untuk bertahan hidup",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Transformers: RISE OF THE BEASTS",
          description:
            "Selama tahun 90-an, faksi baru Transformers Maximals  bergabung dengan Autobots sebagai sekutu dalam pertempuran untuk Bumi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "MEG 2: THE TRENCH",
          description:
            "Meg 2: The Trench (2023) Sebuah tim peneliti menghadapi banyak ancaman saat menjelajahi kedalaman laut, termasuk operasi penambangan yang jahat.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "BLUE BEETLE",
          description:
            "Blue Beetle (2023) Seorang scarab alien memilih Jaime Reyes untuk menjadi tuan rumah simbiosisnya, menganugerahi lulusan perguruan tinggi baru-baru ini dengan baju zirah yang mampu memiliki kekuatan luar biasa, selamanya mengubah takdirnya saat ia menjadi pahlawan super yang dikenal sebagai Blue Beetle.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "INDIANA JONES AND THE DIAL OF DESTINY",
          description:
            "Indiana Jones and the Dial of Destiny (2023) Arkeolog Indiana Jones berpacu dengan waktu untuk mengambil artefak legendaris yang dapat mengubah jalannya sejarah.",
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
    await queryInterface.bulkDelete("movies", null, {});
  },
};
