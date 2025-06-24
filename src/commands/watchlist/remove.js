const { SlashCommandBuilder } = require('discord.js');
const remove = require('../../handlers/watchlist/removeHandler');

const main = async (title) => {
	const result = await remove(title)
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
		.setName('remove-from-watchlist')
		.setDescription('Delete any entry from your watchlist')
		.addStringOption(option =>
			option.setName('title')
				.setDescription('Add title to remove')
				.setRequired(true)),
	async execute(interaction) {
		await interaction.deferReply();
		const title = interaction.options.getString('title');
		interaction.editReply({ content: await main(title) });
	},
};