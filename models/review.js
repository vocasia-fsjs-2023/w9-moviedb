'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      review.belongsTo(models.movie,{
        as:"movies",foreignKey:"movieId"
      })
    }
  }
  review.init({
    title: {
      max: 255,
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    rating: {
      min: 0,
      max: 5,
      allowNull: false,
      type: DataTypes.INTEGER
    },
    movieId: {
      references: {
        model : "movies",
        key: "id"
      },
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'review',
  });
  return review;
};