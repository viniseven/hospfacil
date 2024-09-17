const { Router } = require("express");
const assessmentsRoutes = Router();

const AssessmentsController = require("../controllers/assessmentsController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const assessmentsController = new AssessmentsController();

assessmentsRoutes.post(
	"/:id",
	ensureAuthenticated,
	assessmentsController.create,
);

module.exports = assessmentsRoutes;
