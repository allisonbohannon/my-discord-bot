const { SlashCommandBuilder } = require('discord.js');
const update = require('../../handlers/watchlist/updateHandler');

const main = async (title, type, genre, platform) => {
	const result = await update(title, type, genre, platform)
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
		.setName('update-watchlist')
		.setDescription('Edit a movie or show on your watchlist')
		.addStringOption(option =>
			option.setName('title')
				.setDescription('Input title')
				.setRequired(true))
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
				))
		.addStringOption(option =>
			option.setName('platform')
				.setDescription('Streaming service')
				.setRequired(true)
				.addChoices(
					{ name: 'AppleTv', value: 'AppleTv' },
					{ name: 'Hulu', value: 'Hulu' },
					{ name: 'HBO Max', value: 'HBO Max' },
					{ name: 'Netflix', value: 'Netflix' },
					{ name: 'Paramount', value: 'Paramount' },
					{ name: 'Peacock', value: 'Peacock' },
					{ name: 'Prime', value: 'Prime' },
					{ name: 'Other', value: 'Other' },
				)),
	async execute(interaction) {
		await interaction.deferReply();
		const title = interaction.options.getString('title');
		const type = interaction.options.getString('media-type');
		const genre = interaction.options.getString('genre');
		const platform = interaction.options.getString('platform');
		interaction.editReply({ content: await main(title, type, genre, platform) });
	},
};