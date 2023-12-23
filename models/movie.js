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
      // define association here
      movie.hasMany(models.Review, {
        foreignKey: "movieId",
        as: "reviews",
        onDelete: "CASCADE", // Menentukan tindakan kaskade
    });
}
}
  movie.init(
{
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            max: 255,
            notNull: true,
        },
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            max: 255,
            notNull: true,
        },
    },
},
  {
    sequelize,
    modelName: 'movie',
  });
  return movie;
};