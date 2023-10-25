'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
     Review.belongsTo(models.Movie, {
      as: 'movies',
      foreignKey: 'movieId'
     });

     Review.belongsTo(models.User,{
      as: 'users',
      foreignKey: 'userId'
     });
    }
  }
  Review.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      len : [0,255],
      validate: {
        notEmpty: true
      },
    },
    description: {
      type:DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true
      },
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        min : 0,
        max: 5
      }
     
    },
    movieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Review',
  });

  return Review;
};