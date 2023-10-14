'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Movie extends Model {
    static associate(models) {
      Movie.hasMany(models.Review, {
        foreignKey: 'movieId',
        as: 'reviews',
      });
    }
  }

  Movie.init(
    {
      title: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'Movie',
      hooks: {
        beforeCreate: (movie, options) => {
          console.log('Hook beforeCreate dijalankan.');
        },
      },
    }
  );

  return Movie;
};
