'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Review extends Model {
    static associate(models) {
      Review.belongsTo(models.Movie, {
        foreignKey: "movieId",
        as: "movie",
      });

      Review.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user",
      });
    }
  }

  Review.init(
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
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Review',
      hooks: {
        beforeCreate: (review, options) => {
          console.log('Hook beforeCreate dijalankan pada Review.');
        },
      },
    }
  );

  return Review;
};
