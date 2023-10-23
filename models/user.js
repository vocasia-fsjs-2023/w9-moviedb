'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany(models.review,{
        foreignKey: "userId",
        as: "users"
      });
    }
  }
  user.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
  },
    email: {
      type: DataTypes.STRING,
      validate: {
          isEmail: {
              args: true,
              msg: "Email tidak valid",
          },
      },
    },password: {
      type: DataTypes.STRING,
      validate: {
          min: {
              args: 8,
              msg: "Password minimal 8 karakter",
          },
      },
  },
  isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
  },
},
{
    sequelize,
    modelName: 'user',
  });
  return user;
};