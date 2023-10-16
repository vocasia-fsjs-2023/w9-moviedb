const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];

const sequelize = new Sequelize(config);

const Movie = require("./movie")(sequelize, Sequelize.DataTypes);
const Review = require("./review")(sequelize, Sequelize.DataTypes);

Movie.hasMany(Review, {
  foreignKey: "MovieId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Review.belongsTo(Movie, {
  foreignKey: "MovieId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

module.exports = {
  sequelize,
  Movie,
  Review,
};
