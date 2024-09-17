const { Router } = require("express");
const accommodationRoutes = Router();
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const AccommodationController = require("../controllers/accommodationController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const accommodationController = new AccommodationController();

const upload = multer(uploadConfig.MULTER);

accommodationRoutes.post(
	"/",
	ensureAuthenticated,
	upload.single("filename"),
	accommodationController.create,
);
accommodationRoutes.put(
	"/:id",
	ensureAuthenticated,
	upload.single("filename"),
	accommodationController.update,
);
accommodationRoutes.get(
	"/:id",
	ensureAuthenticated,
	accommodationController.index,
);
accommodationRoutes.get("/", accommodationController.show);
accommodationRoutes.delete(
	"/:id",
	ensureAuthenticated,
	accommodationController.delete,
);

module.exports = accommodationRoutes;
