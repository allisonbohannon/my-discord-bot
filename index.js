require('dotenv').config();
const fs = require('node:fs');
const path = require('node:path');

const { Client, Collection, Events, GatewayIntentBits } = require('discord.js'); //import needed functions from discord.js module
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] }); //configure which events the discord bot can receive

client.commands = new Collection(); //Attach a command file to the client to access commands from other files 


client.on('ready', () => {
    console.log('bot is ready');
});


//Dynamically retrieve command files
const foldersPath = path.join(__dirname, 'commands'); //Construct a path to the Command directory
const commandFolders = fs.readdirSync(foldersPath); //Returns a array of all folders in the path

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder); 
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js')); //Returns an array of all relevant files within the folder
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		// Set a new item in the Collection with the key as the command name and the value as the exported module
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command); //Dynamically set commands for each file in the folder
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}; 

// Receive Command interactions 


client.on(Events.InteractionCreate, async interaction => {
    console.log('test');
	if (!interaction.isChatInputCommand()) return;
	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'There was an error while executing this command!', flags: MessageFlags.Ephemeral });
		} else {
			await interaction.reply({ content: 'There was an error while executing this command!', flags: MessageFlags.Ephemeral });
		}
	}
});


client.on('messageCreate', async (message) => {
    if (message.content === 'ping') {
        message.reply({
            content: 'pong',
        });
    }
});

client.login(process.env.DISCORD_BOT_ID); //logs in with the discord_bot_id token saved in the .env file
