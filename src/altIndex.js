const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const { discordToken } = require('./config.js');
const main = require('./init/index');
const logger = require('./utils/logger.js');

(async () => {
	await main(client);

	logger.info('Authenticating with Discord');
	await client.login(discordToken);
	logger.info('Completed Discord authentication');
})();
