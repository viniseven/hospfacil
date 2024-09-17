const { Router } = require("express");
const usersRoutes = Router();

const UserController = require("../controllers/userController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const userController = new UserController();

usersRoutes.post("/", userController.create);
usersRoutes.put("/:id", ensureAuthenticated, userController.update);

module.exports = usersRoutes;
