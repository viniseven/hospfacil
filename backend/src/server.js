require("express-async-errors");

const express = require("express");
const app = express();
const port = 3000;
const AppError = require("./utils/AppError");
const uploadConfig = require("./configs/upload");

const routes = require("./routes");

app.use(express.json());

app.use("/files", express.static(uploadConfig.TMP_FOLDER));

app.use(routes);

app.use((error, request, response, next) => {
	if (error instanceof AppError) {
		return response.status(error.statusCode).json({
			status: "error",
			message: error.message,
		});
	}
	console.error(error);

	return response.status(500).json({
		status: "error",
		message: "Internal server error",
	});
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}🚀`);
});
