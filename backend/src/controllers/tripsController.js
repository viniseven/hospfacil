const knex = require("../database/index");

class TripsController {
	async show(request, response) {
		const user_id = request.user.id;

		const findTrips = await knex("trips")
			.select([
				"accommodations.id",
				"accommodations.name",
				"accommodations.city",
				"accommodations.state",
				"accommodations.country",
				"trips.price",
				"trips.created_at",
			])
			.where("user_id", user_id)
			.innerJoin(
				"accommodations",
				"accommodations.id",
				"trips.accommodation_id",
			);

		return response.json(findTrips);
	}
}

module.exports = TripsController;
