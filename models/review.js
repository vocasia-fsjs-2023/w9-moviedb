'use strict';
const {
  Model
} = require('sequelize');
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
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false, // tidak boleh null
      validate: {
        min: 0,
        max: 5,
      },
    },
    movieId: {
      type: DataTypes.INTEGER,
      allowNull: false, // tidak boleh null
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