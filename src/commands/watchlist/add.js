const { SlashCommandBuilder } = require('discord.js');
const add = require('../../handlers/watchlist/addHandler');

const main = async (title, type) => {
	const result = await add(title, type)
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
		.setName('add-to-watchlist')
		.setDescription('Add a movie or show to your watchlist')
        .addStringOption(option =>
			option.setName('title')
				.setDescription('Input title')
				.setRequired(true))
        .addStringOption(option =>
			option.setName('media-type')
				.setDescription('Movie or show')
				.setRequired(true)),
	async execute(interaction) {
		await interaction.deferReply();
        const title = interaction.options.getString('title');
        const type = interaction.options.getString('media-type');
		interaction.editReply({ content: await main(title, type) });
	},
};