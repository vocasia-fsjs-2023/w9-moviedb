/* VERSI BAWAAN DARI 
npx sequelize-cli model:generate --name Review --attributes "title:string,description:text,rating:integer,
movieId:integer,createdAt:date,updatedAt:date"
*/

// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Review extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Review.init({
//     title: DataTypes.STRING,
//     description: DataTypes.TEXT,
//     rating: DataTypes.INTEGER,
//     movieId: DataTypes.INTEGER,
//     createdAt: DataTypes.DATE,
//     updatedAt: DataTypes.DATE
//   }, {
//     sequelize,
//     modelName: 'Review',
//   });
//   return Review;
// };

/* SETELAH MENGUBAHNYA VERSI 1 */
// const { Sequelize } = require('sequelize');
// const sequelize = require('../config/config.json');
// const Movie = require('./movie');

// const Review = sequelize.define('Review', {
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
//   rating: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     validate: {
//       min: {
//         args: 0,
//         msg: 'Rating cannot be less than 0.',
//       },
//       max: {
//         args: 5,
//         msg: 'Rating cannot be greater than 5.',
//       },
//     },
//   },
//   movieId: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     references: {
//       model: Movie,
//       key: 'id',
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

// // Menambahkan asosiasi dengan model Movie
// Review.belongsTo(Movie, { as: 'movie', foreignKey: 'movieId' });

// module.exports = Review;

/* VERSI 2 */
// review.js
// const { DataTypes, Model } = require('sequelize');
// const sequelize = require('../config/sequelize'); // Adjust the path accordingly
// const Movie = require('./movie');

// class Review extends Model {}

// Review.init({
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
//   rating: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     validate: {
//       min: {
//         args: 0,
//         msg: 'Rating cannot be less than 0.',
//       },
//       max: {
//         args: 5,
//         msg: 'Rating cannot be greater than 5.',
//       },
//     },
//   },
//   movieId: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     references: {
//       model: Movie,
//       key: 'id',
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
//   modelName: 'Review',
// });

// // Adding association with the Movie model
// Review.belongsTo(Movie, { as: 'movie', foreignKey: 'movieId' });

// module.exports = Review;

/* VERSI 3 */
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/sequelize'); // Adjust the path accordingly

class Review extends Model {}

Review.init({
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
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: {
        args: 0,
        msg: 'Rating cannot be less than 0.',
      },
      max: {
        args: 5,
        msg: 'Rating cannot be greater than 5.',
      },
    },
  },
  movieId: {
    type: DataTypes.INTEGER,
    allowNull: false,
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
  modelName: 'Review',
});

module.exports = Review;
