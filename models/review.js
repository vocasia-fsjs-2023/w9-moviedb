'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      Review.belongsTo(models.Movie, { 
        foreignKey: "movieId",
        as: "movie" 
      });
      Review.belongsTo(models.User, { 
        foreignKey: "userId" 
      });
    }
  }
  Review.init({
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
    rating: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0, 
        max: 5, 
        notEmpty: true,
      },
    },
    movieId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};