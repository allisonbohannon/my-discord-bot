const { SlashCommandBuilder } = require('discord.js');
const recommendation = require('../../handlers/watchlist/recommendationHandler');
const logger = require('../../utils/logger');

const main = async (mediaType, genre) => {
	const result = await recommendation(mediaType, genre)
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
		.setDescription('Gives a recommendation for what to watch based on your watchlist')
		.addStringOption(option =>
			option.setName('media-type')
				.setDescription('Movie or show')
				.setRequired(true)
				.addChoices(
					{ name: 'movie', value: 'movie' },
					{ name: 'show', value: 'show' },
				))
		.addStringOption(option =>
			option.setName('genre')
				.setDescription('Genre')
				.setRequired(true)
				.addChoices(
					{ name: 'action', value: 'action' },
					{ name: 'comedy', value: 'comedy' },
					{ name: 'documentary', value: 'documentary' },
					{ name: 'drama', value: 'drama' },
					{ name: 'horror', value: 'horror' },
					{ name: 'romance', value: 'romance' },
					{ name: 'thriller', value: 'thriller' },
				)),
	async execute(interaction) {
		await interaction.deferReply();
		const mediaType = interaction.options.getString('media-type');
		const genre = interaction.options.getString('genre');
		//logger.info(`Looking for a ${genre} ${mediaType}`);
		interaction.editReply({ content: await main(mediaType, genre) });
	},
};