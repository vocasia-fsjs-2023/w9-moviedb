'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {

    static associate(models) {
      Review.belongsTo(models.Movie, {
        foreignKey: "movieId",
        as: "movies", 
    });

    Review.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user", 
    });
    }
  }
  Review.init({
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
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false, 
      validate: {
        min: 0,
        max: 5,
      },
    },
    movieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Movies",
        key: "id",
    }
    },
    userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Review",
  }
  );
  return Review;
};