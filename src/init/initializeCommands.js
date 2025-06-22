const fs = require('node:fs');
const path = require('node:path');
const { Collection } = require('discord.js');

// Dynamically retrieve command files

module.exports = (async (client) => {

	// Attach a command file to the client to access commands from other files
client.commands = new Collection();
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
});
