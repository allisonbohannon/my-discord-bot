const { Client, Collection, GatewayIntentBits } = require('discord.js');
const eventHandler = require('./src/events/main.js');
//const { Titles } = require('./src/db/model.js');


const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
// Attach a command file to the client to access commands from other files
client.commands = new Collection();

client.on('ready', () => {
	console.log('bot is ready');
});

(() => {
	eventHandler();
});
