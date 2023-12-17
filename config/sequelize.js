// sequelize.js

const { Sequelize } = require('sequelize');
const config = require('../config/config.json');

const sequelize = new Sequelize(config.development); // You can adjust this based on your environment

module.exports = sequelize;
