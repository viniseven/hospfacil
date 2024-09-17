const { Router } = require("express");
const purchaseTripRouter = Router();

const PurchaseTripController = require("../controllers/purchaseTripController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const purchaseTripController = new PurchaseTripController();

purchaseTripRouter.post(
	"/:id",
	ensureAuthenticated,
	purchaseTripController.create,
);

module.exports = purchaseTripRouter;
