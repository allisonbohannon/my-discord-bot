const { SlashCommandBuilder } = require('discord.js');
const recommendation = require('../../handlers/watchlist/recommendationHandler');

const main = async () => {
	const result = await recommendation()
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
		.setName('recommend-something-to-watch')
		.setDescription('Gives a recommendation for what to watch based on your watchlist'),
	async execute(interaction) {
		await interaction.deferReply();
		interaction.editReply({ content: await main() });
	},
};