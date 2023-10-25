'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    static associate(models) {
      Movie.hasMany(models.Review, {
        foreignKey: 'movieId',
        as: "reviews"
      })
    }
  }
  Movie.init({
    title: {
      type: DataTypes.STRING,
      validate:{
        len: [1,255],
        notEmpty: true,
      },
    },
    description: {
      type: DataTypes.TEXT,
      validate:{
        notEmpty: true,
      },
    },
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};