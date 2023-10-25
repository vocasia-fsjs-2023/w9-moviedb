'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie.hasMany(models.Review, {
        as: 'reviews',
        foreignKey: "movieId",
      });
    }
  }
  Movie.init({
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      max: 255,
      validate: {
        notEmpty: true
      },
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
      validate: {
        notEmpty: true
      },
    }
  }, {
    sequelize,
    modelName: 'Movie',
  });

  return Movie;
};