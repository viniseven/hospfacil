const knex = require("../database");
const AppError = require("../utils/AppError");
const StorageFile = require("../providers/StorageFile");

class AccommodationController {
	async create(request, response) {
		const { name, city, state, country, daily, category } = request.body;

		const image = request.file.filename;

		const findAccommodation = await knex("accommodations")
			.where({ name })
			.first();

		if (findAccommodation) {
			throw new AppError("Acomodação com mesmo nome já existe");
		}

		const storageFile = new StorageFile();

		const filename = await storageFile.saveFile(image);

		await knex("accommodations").insert({
			name,
			city,
			state,
			country,
			daily,
			category,
			image_url: filename,
		});

		return response.status(201).json("Accomodação cadastrada com sucesso");
	}

	async update(request, response) {
		const id = request.params;
		const { name, city, state, country, daily, category } = request.body;

		const image = request.file.filename;

		const findAccommodation = await knex("accommodations").where(id).first();

		if (!findAccommodation) {
			throw new AppError("Acomodação não encontrada");
		}

		const storageFile = new StorageFile();

		if (findAccommodation.image_url) {
			await storageFile.deleteFile(findAccommodation.image_url);
		}

		const filename = await storageFile.saveFile(image);

		findAccommodation.name = name ?? findAccommodation.name;
		findAccommodation.city = city ?? findAccommodation.city;
		findAccommodation.state = state ?? findAccommodation.state;
		findAccommodation.country = country ?? findAccommodation.country;
		findAccommodation.daily = daily ?? findAccommodation.daily;
		findAccommodation.category = category ?? findAccommodation.category;
		findAccommodation.image_url = filename ?? findAccommodation.image_url;

		await knex("accommodations").where(id).update({
			name: findAccommodation.name,
			city: findAccommodation.city,
			state: findAccommodation.state,
			country: findAccommodation.country,
			daily: findAccommodation.daily,
			category: findAccommodation.category,
			image_url: findAccommodation.image_url,
			updated_at: knex.fn.now(),
		});

		return response.status(200).json("Dados atualizados com sucesso");
	}

	async index(request, response) {
		const id = request.params;

		const findAccommodation = await knex("accommodations").where(id).first();

		if (!findAccommodation) {
			throw new AppError("Acomodação não encontrada");
		}

		return response.status(200).json({ findAccommodation });
	}

	async show(request, response) {
		const { name } = request.query;

		let findAccommodation = await knex("accommodations")
			.whereLike("name", `%${name}%`)
			.orderBy("name");

		if (findAccommodation == "") {
			throw new AppError("Acomodação não encontrada");
		}

		return response.status(200).json(findAccommodation);
	}

	async delete(request, response) {
		const id = request.params;

		const findAccommodation = await knex("accommodations").where(id);

		if (findAccommodation == "") {
			throw new AppError("Acomodação não encontrada");
		}

		await knex("accommodations").where(id).del();

		return response.status(200).json("Acomodação excluída com sucesso");
	}
}

module.exports = AccommodationController;
