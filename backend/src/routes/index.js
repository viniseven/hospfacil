const { Router } = require("express");

const accommodationRoutes = require("./accommodation.routes");
const usersRoutes = require("./users.routes");
const sessionRoutes = require("./session.routes");
const purchaseTripRoutes = require("./purchaseTrip.routes");
const tripsRoutes = require("./trips.routes");
const assessmentsRoutes = require("./assessments.routes");

const routes = Router();

routes.use("/accommodations", accommodationRoutes);
routes.use("/users", usersRoutes);
routes.use("/auth", sessionRoutes);
routes.use("/purchase-trip", purchaseTripRoutes);
routes.use("/mytrips", tripsRoutes);
routes.use("/assessments", assessmentsRoutes);

module.exports = routes;
