const { Client, Collection, GatewayIntentBits } = require('discord.js');
const eventHandler = require('./src/events/main.js');
const logger = require('./src/utils/logger.js');
const initializeCommands = require('./src/utils/initializeCommands.js');
const db = require('./src/db');
const models = require('./src/db/models');
const { forceDbReset } = require('./config.js');

const Title = require('./src/db/models/Title.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
client.commands = new Collection();


(async () => {
	logger.info('Bot beginning startup');

	initializeCommands();

	logger.info('Connecting to dabatase');
	// Object.keys(models).forEach(ele => {
	// 	models[ele].associate(models);
	// });

	// await db.sync({ force: forceDbReset });
	Title.sync({ force: forceDbReset });
	logger.info('Complated database connection');

	// client.on('ready', ready);
	// client.on('interactionCreate', interactionCreate);
	// client.on('messageCreate', messageCreate);

	// logger.info('Authenticating with Discord');
	// await client.login(discordToken);
	// logger.info('Completed Discord authentication');
})();


// ( () => { //set back to async
// 	logger.info('Starting up bots');

// 	console.log('Ready to connect to db');

// 	logger.info('Connecting to database');
// 	Object.keys(models).forEach((model) => {
// 		console.log(model);
// 		models(model).associate(models);
// 	});
// 	//await db.sync({ force: forceDbReset });
// 	logger.info('Completed database connection');

// 	// client.on('ready');
// 	// eventHandler();

// });
