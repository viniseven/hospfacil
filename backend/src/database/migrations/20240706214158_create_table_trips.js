exports.up = (knex) =>
	knex.schema.createTable("trips", (table) => {
		table.increments("id");
		table
			.integer("user_id")
			.references("id")
			.inTable("users")
			.onDelete("CASCADE");
		table
			.integer("accommodation_id")
			.references("id")
			.inTable("accommodations")
			.onDelete("CASCADE");
		table.float("price");
		table.integer("guests");
		table.date("start_date");
		table.date("end_date");
		table.timestamp("created_at").default(knex.fn.now());
		table.timestamp("updated_at").default(knex.fn.now());
	});

exports.down = (knex) => knex.schema.dropTable("trips");
