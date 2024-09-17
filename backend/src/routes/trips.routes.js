const { Router } = require("express");

const tripsRoutes = Router();

const TripController = require("../controllers/tripsController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const tripController = new TripController();

tripsRoutes.get("/", ensureAuthenticated, tripController.show);

module.exports = tripsRoutes;
