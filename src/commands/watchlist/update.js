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
			option.setName('genre')
				.setDescription('Add another genre')
				.setRequired(true)
				.addChoices(
					{ name: 'action', value: 'action' },
					{ name: 'comedy', value: 'comedy' },
					{ name: 'documentary', value: 'documentary' },
					{ name: 'drama', value: 'drama' },
					{ name: 'horror', value: 'horror' },
					{ name: 'romance', value: 'romance' },
					{ name: 'thriller', value: 'thriller' },
					{ name: 'sci-fi/fantasy', value: 'sci-fi/fantasy' },
				)),
	async execute(interaction) {
		await interaction.deferReply();
		const title = interaction.options.getString('title');
		const genre = interaction.options.getString('genre');
		interaction.editReply({ content: await main(title, genre) });
	},
};