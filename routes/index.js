const router = require("express").Router();
const movieRouter = require("./movie/index");
const reviewRouter = require("./review/index");

router.use("/movie", movieRouter);
router.use("/review", reviewRouter);

module.exports = router;
