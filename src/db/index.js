const { Sequelize } = require('sequelize');
const { postgresUser, postgresDb, postgresPassword, dbHost, postgresPort } = require('../config');

const sequelize = new Sequelize(postgresDb, postgresUser, postgresPassword, {
	host: dbHost,
	dialect: 'postgres',
	port: postgresPort,
});

module.exports = sequelize;