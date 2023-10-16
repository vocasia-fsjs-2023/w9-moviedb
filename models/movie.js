"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Movie.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: {
            msg: "Please enter a title",
          },
          notEmpty: {
            msg: "Please enter a title",
          },
          max: {
            args: [255],
            msg: "The title can not be longer than 255 characters",
          },
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Please enter a description",
          },
          notEmpty: {
            msg: "Please enter a description",
          },
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
