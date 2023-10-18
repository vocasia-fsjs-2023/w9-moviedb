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
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};