const { SlashCommandBuilder } = require('discord.js');
const showAll = require('../../handlers/watchlist/showAllHandler');

const main = async () => {
	const result = await showAll()
		.then(data => {
			return data;
		})
		.catch(error => {
			console.error('Error:', error);
		});
	return result;
};

module.exports = {
	data: new SlashCommandBuilder()
		.setName('show-full-watchlist')
		.setDescription('Displays information for all titles currently on watchlist'),
	async execute(interaction) {
		await interaction.deferReply();
		interaction.editReply({ content: await main() });
	},
};