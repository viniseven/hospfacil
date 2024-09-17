exports.up = (knex) =>
	knex.schema.createTable("users", (table) => {
		table.increments("id");
		table.string("name");
		table.string("second_name");
		table.string("email"), table.string("password");
		table.date("date_birth");
		table.timestamp("created_at").default(knex.fn.now());
		table.timestamp("updated_at").default(knex.fn.now());
	});

exports.down = (knex) => knex.schema.dropTable("users");
