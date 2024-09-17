const path = require("path");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const TMP_FOLDER = path.resolve(__dirname, "..", "..", "tmp");
const UPLOADS_FOLDER = path.resolve(__dirname, "..", "..", "tmp", "uploads");

const MULTER = {
	storage: multer.diskStorage({
		destination: TMP_FOLDER,
		filename(request, file, callback) {
			const fileName = `${uuidv4()}-${file.originalname}`;

			return callback(null, fileName);
		},
	}),
};

module.exports = {
	TMP_FOLDER,
	UPLOADS_FOLDER,
	MULTER,
};
