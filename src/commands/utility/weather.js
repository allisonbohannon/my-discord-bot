const { SlashCommandBuilder } = require('discord.js');
const { weather } = require('../../handlers/utility/weatherHandler');

const main = async () => {
	const result = await weather()
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
		.setName('weather')
		.setDescription('Provides a weather update'),
	async execute(interaction) {
		interaction.reply({ content: await main() });
	},
};