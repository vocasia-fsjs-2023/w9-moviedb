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
      //Relasi tabel atau Asosiasi
      Movie.hasMany(models.Review, { foreignKey: "movieId", onDelete: "CASCADE" });
    }
  }
  Movie.init(
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
    },
    {
      sequelize,
      modelName: "Movie",
    }
  );
  return Movie;
};
