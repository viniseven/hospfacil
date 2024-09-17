const knex = require("../database/index");
const AppError = require("../utils/AppError");

class AssessmentsController {
	async create(request, response) {
		const user_id = request.user.id;
		const { id } = request.params;
		const { rating, description } = request.body;

		const findAssessment = await knex("assessments").where({
			user_id,
			accommodation_id: id,
		});

		if (findAssessment) {
			throw new AppError("Esta viagem já foi avaliada por você");
		}

		await knex("assessments").insert({
			user_id,
			accommodation_id: id,
			rating,
			description,
		});

		return response.status(201).json("Viagem avaliada com sucesso");
	}
}

module.exports = AssessmentsController;
