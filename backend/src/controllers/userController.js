const dayjs = require("dayjs");
const knex = require("../database");
const { hash } = require("bcrypt");
const AppError = require("../utils/AppError");

class UserController {
	async create(request, response) {
		const { name, second_name, email, password, date_birth } = request.body;

		const findUser = await knex("users").where({ email }).first();

		if (findUser) {
			throw new AppError("Este email já está em uso");
		}

		const hashedPassword = await hash(password, 8);

		const dateBirth = dayjs(date_birth).format("YYYY-MM-DD");

		await knex("users").insert({
			name,
			second_name,
			email,
			password: hashedPassword,
			date_birth: dateBirth,
		});

		return response.status(201).json("Cadastrado com sucesso");
	}

	async update(request, response) {
		const id = request.params;
		const { name, second_name, email, password, date_birth } = request.body;

		const findUser = await knex("users").where(id).first();

		if (findUser == "") {
			throw new AppError("Usuário não encontrado");
		}

		const hashedPassword = await hash(password, 8);

		findUser.name = name ?? findUser.name;
		findUser.second_name = second_name ?? findUser.second_name;
		findUser.email = email ?? findUser.email;
		findUser.password = hashedPassword ?? findUser.password;
		findUser.date_birth = date_birth ?? findUser.date_birth;

		await knex("users").where(id).update({
			name: findUser.name,
			second_name: findUser.second_name,
			email: findUser.email,
			password: hashedPassword,
			date_birth: findUser.date_birth,
			updated_at: knex.fn.now(),
		});

		return response.status(200).json("Dados atualizados com sucesso");
	}
}

module.exports = UserController;
