'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Review, {
        as : "review2",
        foreignKey: "userId"
      })
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull : false,
      validate:{
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: true,
        isEmail: true,
      }
    },
    password:{
      allowNull: false,
      type: DataTypes.STRING,
     validate: {
      min: 8, 
      max: 20
     }
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    
    sequelize,
    modelName: 'User',
  });
  return User;
};