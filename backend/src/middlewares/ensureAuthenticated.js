const { verify } = require("jsonwebtoken");
const AppError = require("../utils/AppError");
const authConfig = require("../configs/auth");

function ensureAuthenticated(request, response, next) {
	const tokenHeader = request.headers.authorization;

	if (!tokenHeader) {
		throw new AppError("Token não informado", 401);
	}

	const [, token] = tokenHeader.split(" ");

	try {
		const { sub: user_id } = verify(token, authConfig.jwt.secret);

		request.user = {
			id: Number(user_id),
		};

		return next();
	} catch {
		throw new AppError("Token não informado", 401);
	}
}

module.exports = ensureAuthenticated;
