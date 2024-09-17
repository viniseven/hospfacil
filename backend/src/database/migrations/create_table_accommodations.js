exports.up = (knex) =>
	knex.schema.createTable("accommodations", (table) => {
		table.increments("id");
		table.string("name"),
			table.string("city"),
			table.string("state"),
			table.string("country"),
			table.float("daily"),
			table.string("category"),
			table.string("image_url"),
			table.timestamp("created_at").default(knex.fn.now());
		table.timestamp("updated_at").default(knex.fn.now());
	});

exports.down = (knex) => knex.schema.dropTable("accommodations");
