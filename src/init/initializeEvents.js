const fs = require('node:fs');
const path = require('node:path');
const logger = require('../utils/logger');


module.exports = async (client) => {
	const eventsPath = path.join(__dirname, '../events');
	const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

	for (const file of eventFiles) {
		const filePath = path.join(eventsPath, file);
		const event = require(filePath);
		//logger.info(`Loading event ${filePath}`);
		if (event.once) {
			try {
				client.once(event.name, (...args) => {
					event.execute(...args);
					logger.info(`Executed once event: ${event.name}`);
				});
			} catch (error) {
				logger.err(error, 'An error has occured');
			}
		} else {
			try {
				client.on(event.name, (...args) => {
					event.execute(...args);
				});
			} catch (error) {
				logger.err(error, 'An error has occured');
			}
		}
	};
};