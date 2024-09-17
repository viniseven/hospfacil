const dayjs = require("dayjs");
const knex = require("../database/index");
const AppError = require("../utils/AppError");

class PurchaseTripController {
	async create(request, response) {
		const user_id = request.user.id;
		const { id } = request.params;
		let { startDate, endDate, guests } = request.body;

		const findAccommodation = await knex("accommodations")
			.where({ id })
			.first();

		if (!findAccommodation) {
			throw new AppError("Acomodação não encontrada");
		}

		if (dayjs(startDate).isBefore(new Date())) {
			throw new AppError("Insira uma data válida");
		}

		if (dayjs(endDate).isBefore(startDate)) {
			throw new AppError("Insira uma data válida");
		}

		const intervalDate = dayjs(endDate).diff(dayjs(startDate), "day");

		const price = findAccommodation.daily * intervalDate;

		await knex("trips").insert({
			user_id,
			accommodation_id: id,
			price,
			guests,
			start_date: startDate,
			end_date: endDate,
		});
		return response.status(201).json("Hospedagem reservada com sucesso");
	}
}

module.exports = PurchaseTripController;
