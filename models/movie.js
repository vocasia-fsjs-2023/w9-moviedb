'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {

    static associate(models) {
      Movie.hasMany(models.Review, {
        foreignKey: "movieId",
        as: "reviews",
      });
    }
  }
  Movie.init({
    title: {
      type: DataTypes.STRING,
        allowNull: false,
        validate: {
        max: 255,
        notNull: true
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: true
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