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
        foreignKey: "movieId",
        as: "reviews",
      });
    }
  }
  Movie.init({
    title: {
      type: DataTypes.STRING,
        allowNull: false, // tidak boleh null
        validate: {
        max: 255, // maksimal panjang string 255 karakter
        notNull: true
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false, // tidak boleh null
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