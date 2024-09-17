const path = require("path");

module.exports = {
	development: {
		client: "sqlite3",
		useNullAsDefault: true,
		connection: {
			filename: path.resolve(__dirname, "src", "database", "database.db"),
		},
		migrations: {
			directory: path.resolve(__dirname, "src", "database", "migrations"),
		},
		pool: {
			afterCreate: (connection, done) =>
				connection.run("PRAGMA foreign_keys = ON", done),
		},
	},
};
