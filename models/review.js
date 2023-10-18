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
        as: "movie",
      });
    }
  }
  Review.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false, // Kolom tidak boleh null
      validate: {
          notNull: {
            msg: 'Username tidak boleh null', // Pesan kesalahan kustom jika null
          },
          notEmpty: {
            msg: 'Username tidak boleh kosong', // Pesan kesalahan kustom jika string kosong
          },
          len: {
            args: [1, 255], // Batasi panjang string antara 1 hingga 255 karakter
            msg: 'Panjang string harus antara 1 hingga 255 karakter', // Pesan kesalahan kustom
          },
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false, // Kolom tidak boleh null
      validate: {
          notNull: {
            msg: 'Username tidak boleh null', // Pesan kesalahan kustom jika null
          },
          notEmpty: {
            msg: 'Username tidak boleh kosong', // Pesan kesalahan kustom jika string kosong
          },
      },
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false, // Kolom tidak boleh null
      validate: {
        min: 0,
        max:5,
      },
    },
    movieId: {
      type: DataTypes.INTEGER,
      allowNull: false, // Kolom tidak boleh null
    }
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};