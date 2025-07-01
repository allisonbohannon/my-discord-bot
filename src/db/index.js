const Sequelize = require('sequelize');
const { postgresUser, postgresDb, postgresPassword, dbHost, postgresPort } = require('../config');


// Initialize sequlize instance
const sequelize = new Sequelize(
	postgresDb,
	postgresUser,
	postgresPassword,
	{
		host: dbHost,
		port: postgresPort,
		dialect: 'postgres',
		define: {},
	},
);

module.exports = sequelize;