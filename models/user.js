"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            User.hasMany(models.Review, {
                foreignKey: "userId",
                as: "reviews",
            }); 
        }
    }
    User.init(
        {
            name: DataTypes.STRING,
            email: {
                type: DataTypes.STRING,
                validate: {
                    isEmail: {
                        args: true,
                        msg: "Email tidak valid",
                    },
                },
            },
            password: {
                type: DataTypes.STRING,
                validate: {
                    len: {
                        args: [8, Infinity], // Minimal 8 karakter
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
            modelName: "User",
        }
    );

    User.beforeCreate(async (user, options) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
    });
    return User;
};