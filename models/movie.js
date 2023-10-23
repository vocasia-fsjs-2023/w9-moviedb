'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      movie.hasMany(models.review,{
        as:"reviews",
        foreignKey:"movieId",
        onDelete: "CASCADE"
      });
      
    }
  }
  movie.init({
    title: {
      max: 255,
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT
    },
  }, 
  {
    sequelize,
    modelName: 'movie',
  });
  return movie;
};