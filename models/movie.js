/* VERSI BAWAAN DARI 
npx sequelize-cli model:generate --name Movie --attributes "title:string,description:text,
createdAt:date,updatedAt:date"
*/

// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Movie extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Movie.init({
//     title: DataTypes.STRING,
//     description: DataTypes.TEXT,
//     createdAt: DataTypes.DATE,
//     updatedAt: DataTypes.DATE
//   }, {
//     sequelize,
//     modelName: 'Movie',
//   });
//   return Movie;
// };

/* SETELAH MENGUBAHNYA VERSI 1 */
// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/config.json');
// const Review = require('./review');

// const Movie = sequelize.define('Movie', {
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     allowNull: false,
//     autoIncrement: true,
//   },
//   title: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     validate: {
//       notEmpty: {
//         args: true,
//         msg: 'Title cannot be empty or null.', // Pesan kesalahan jika validasi notEmpty gagal
//       },
//       len: {
//         args: [1, 255],
//         msg: 'Title length must be between 1 and 255 characters.', // Pesan kesalahan jika validasi len gagal
//       },
//     },
//   },
//   description: {
//     type: DataTypes.TEXT,
//     allowNull: false,
//     validate: {
//       notEmpty: {
//         args: true,
//         msg: 'Description cannot be empty or null.', // Pesan kesalahan jika validasi notEmpty gagal
//       },
//     },
//   },
//   createdAt: {
//     type: DataTypes.DATE,
//     allowNull: false,
//   },
//   updatedAt: {
//     type: DataTypes.DATE,
//     allowNull: false,
//   },
// });

// // Menambahkan asosiasi dengan model Review
// Movie.hasMany(Review, { as: 'reviews', foreignKey: 'movieId' });

// module.exports = Movie;

/* VERSI 2 */
// const { DataTypes, Model } = require('sequelize');
// const sequelize = require('../config/sequelize'); // Adjust the path accordingly
// const Review = require('./review'); // Adjust the path accordingly

// class Movie extends Model {}

// Movie.init({
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     allowNull: false,
//     autoIncrement: true,
//   },
//   title: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     validate: {
//       notEmpty: {
//         args: true,
//         msg: 'Title cannot be empty or null.',
//       },
//       len: {
//         args: [1, 255],
//         msg: 'Title length must be between 1 and 255 characters.',
//       },
//     },
//   },
//   description: {
//     type: DataTypes.TEXT,
//     allowNull: false,
//     validate: {
//       notEmpty: {
//         args: true,
//         msg: 'Description cannot be empty or null.',
//       },
//     },
//   },
//   createdAt: {
//     type: DataTypes.DATE,
//     allowNull: false,
//   },
//   updatedAt: {
//     type: DataTypes.DATE,
//     allowNull: false,
//   },
// }, {
//   sequelize,
//   modelName: 'Movie',
// });

// // Adding association with the Review model
// Movie.hasMany(Review, { as: 'reviews', foreignKey: 'movieId' });

// module.exports = Movie;

/* VERSI 4 */
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/sequelize'); // Adjust the path accordingly

class Movie extends Model {}

Movie.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        args: true,
        msg: 'Title cannot be empty or null.',
      },
      len: {
        args: [1, 255],
        msg: 'Title length must be between 1 and 255 characters.',
      },
    },
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: {
        args: true,
        msg: 'Description cannot be empty or null.',
      },
    },
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Movie',
});

// Function to associate models
const associateModels = () => {
  const Review = require('./review');
  Movie.hasMany(Review, { as: 'reviews', foreignKey: 'movieId' });
  Review.belongsTo(Movie, { as: 'movie', foreignKey: 'movieId' });
};

// Call the function to associate models
associateModels();

module.exports = Movie;
