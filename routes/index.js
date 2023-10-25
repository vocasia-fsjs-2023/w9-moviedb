const router = require("express").Router();
const todoController = require("../controllers/todoController");

{
    router.get("/todo", todoController.findAll);
    router.post("/todo", todoController.create);
    router.get("/todo/:id", todoController.findById);
    router.patch("/todo/:id/done", todoController.done);
}

module.exports = router;