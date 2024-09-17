const knex = require("../database");
const { compare } = require("bcrypt");
const AppError = require("../utils/AppError");
const authConfig = require("../configs/auth");
const { sign } = require("jsonwebtoken");

class SessionController {
	async create(request, response) {
		const { email, password } = request.body;

		if (!email || !password) {
			throw new AppError("Preencha todos os campos");
		}

		const findUser = await knex("users").where({ email }).first();

		if (!findUser) {
			throw new AppError("Usuário e/ou senha incorreta");
		}

		const comparePassword = await compare(password, findUser.password);

		if (!comparePassword) {
			throw new AppError("Usuário e/ou senha incorreta");
		}

		const { secret, expiresIn } = authConfig.jwt;
		const token = sign({}, secret, {
			subject: String(findUser.id),
			expiresIn,
		});

		return response.json({ findUser, token });
	}
}
module.exports = SessionController;
