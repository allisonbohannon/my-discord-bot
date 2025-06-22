const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('call')
		.setDescription('responds!'),
	async execute(interaction) {
		await interaction.deferReply();
		interaction.editReply({ content: 'response' });
	},
};