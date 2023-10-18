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
        as: "movie", // Gunakan alias yang sesuai
    });
    }
  }
  Review.init({
    
      title: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      description: {
          type: DataTypes.TEXT,
          allowNull: false,
      },
      rating: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
            max: 5,
              min: 0,
              
          },
      },
      movieId: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};