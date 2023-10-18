"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Review extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // Tambahkan association pada models movie dengan review, dengan asumsi satu movie bisa punya banyak review sehingga saat find si movie atau si review, akan eager loading data relation nya
            Review.belongsTo(models.Movie, {
                foreignKey: "movieId",
                as: "movie", // Gunakan alias yang sesuai
            });

            Review.belongsTo(models.User, {
                foreignKey: "userId",
                as: "user", // Gunakan alias yang sesuai
            });
        }
    }
    Review.init(
        {
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            rating: {
                type: DataTypes.INTEGER,
                allowNull: false,
                // tambahkan validasi input tidak boleh kurang dari 0 dan lebih dari 5
                validate: {
                    min: 0,
                    max: 5,
                },
            },
            movieId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "Review",
        }
    );
    return Review;
};
