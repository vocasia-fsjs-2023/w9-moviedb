"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "Movies",
            [
                {
                    title: "Movie 1",
                    description: "This is the first movie.",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Movie 2",
                    description: "This is the second movie.",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Movie 3",
                    description: "This is the third movie.",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Movie 4",
                    description: "This is the fourth movie.",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Movie 5",
                    description: "This is the fifth movie.",
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
