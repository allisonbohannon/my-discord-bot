const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('weather')
		.setDescription('Gives weather information'),
	async execute(interaction) {
		await interaction.reply('75 and sunny!');
	},
};