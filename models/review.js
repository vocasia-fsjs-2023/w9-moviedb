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
      //Relasi tabel atau Asosiasi
      Review.belongsTo(models.Movie, { foreignKey: "movieId", onDelete: "CASCADE" });
    }
  }
  Review.init(
    {
      title: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
          len: [1, 255],
        },
      },
      description: {
        type: DataTypes.TEXT,
        validate: {
          notEmpty: true,
        },
      },
      rating: {
        type: DataTypes.INTEGER,
        validate: {
          min: 0,
          max: 5,
        },
      },
      movieId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Review",
    }
  );
  return Review;
};
