const { discordToken } = require('../../config');
const fs = require('node:fs');
const path = require('node:path');

// Import needed functions from discord.js module
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] }); //configure which events the discord bot can receive

// Attach a command file to the client to access commands from other files
client.commands = new Collection();

client.on('ready', () => {
	console.log('bot is ready');
});

// Dynamically retrieve command files

const getAllFiles = () => {
	// Construct a path to the Command directory
	const foldersPath = path.join(__dirname, '../commands');
	// Returns a array of all folders in the path
	const commandFolders = fs.readdirSync(foldersPath);

	for (const folder of commandFolders) {
		const commandsPath = path.join(foldersPath, folder);
		// Returns an array of all relevant files within the folder
		const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js')); 
		for (const file of commandFiles) {
			const filePath = path.join(commandsPath, file);
			const command = require(filePath);
			// Set a new item in the Collection with the key as the command name and the value as the exported module
			if ('data' in command && 'execute' in command) {
				// Dynamically set commands for each file in the folder
				client.commands.set(command.data.name, command);
			} else {
				console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
			}
		}
	};
};


// Dynamically retrieve all of the events
const getAllCommands = () => {
	const eventsPath = path.join(__dirname, '../events');
	const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

	for (const file of eventFiles) {
		const filePath = path.join(eventsPath, file);
		const event = require(filePath);
		if (event.once) {
			client.once(event.name, (...args) => event.execute(...args));
		} else {
			client.on(event.name, (...args) => event.execute(...args));
		}
	};
};

const eventHandler = () => {
	getAllFiles();
	getAllCommands();
    client.login(discordToken);
    console.log('Done')
};

module.exports = eventHandler();