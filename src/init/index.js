const initializeEvents = require('./initializeEvents');
const initializeCommands = require('./initializeCommands');
const deployCommands = require('./deployCommands');
const logger = require('../utils/logger');

module.exports = async (client) => {
	logger.info('Deploying commands');
	deployCommands();
	logger.info('Initializing event listeners');
	initializeEvents(client);
	logger.info('Initializing commands');
	initializeCommands(client);
};