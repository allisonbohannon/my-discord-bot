const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const main = require('./init/index');
const db = require('./db/index');
const models = require('./db/models/index');
const { discordToken, forceDbReset } = require('./config.js');
const logger = require('./utils/logger');

(async () => {
	logger.info('Bot beginning startup');

	await main(client);

	logger.info('Connecting to dabatase');
	Object.keys(models).forEach(ele => {
		models[ele].associate(models);
	});

	await db.sync({ force: forceDbReset }).then(() => {
		logger.info('Complated database connection');
	});

	logger.info('Authenticating with Discord');
	await client.login(discordToken).then(() => {
		logger.info('Completed Discord authentication');
	});
})();