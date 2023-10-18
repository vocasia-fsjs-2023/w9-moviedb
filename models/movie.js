"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Movie extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // Tambahkan association pada models movie dengan review, dengan asumsi satu movie bisa punya banyak review sehingga saat find si movie atau si review, akan eager loading data relation nya
            Movie.hasMany(models.Review, {
                foreignKey: "movieId",
                as: "reviews", // Gunakan alias yang sesuai
            });
        }
    }
    Movie.init(
        {
            title: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    max: 255,
                    notNull: true,
                },
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false,
                validate: {
                    max: 255,
                    notNull: true,
                },
            },
        },
        {
            sequelize,
            modelName: "Movie",
        }
    );
    return Movie;
};