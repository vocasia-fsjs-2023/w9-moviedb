"use strict";

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Reviews", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            title: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            description: {
                allowNull: false,
                type: DataTypes.TEXT,
            },
            rating: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
            movieId: {
                allowNull: false,
                type: DataTypes.INTEGER,
                references: {
                    model: "Movies",
                    key: "id",
                },
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Reviews");
    },
};
