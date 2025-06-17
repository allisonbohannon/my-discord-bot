const { SlashCommandBuilder } = require('discord.js');
const { weather } = require('../../handlers/utility/weatherHandler');

const main = async (zipcode) => {
	const result = await weather(zipcode)
		.then(data => {
			return data;
		})
		.catch(error => {
			console.error('Error:', error);
		});
	return `It's ${result.temp} in ${result.name}`;
};

module.exports = {
	data: new SlashCommandBuilder()
		.setName('weather')
		.setDescription('Replies with the local weather')
		.addStringOption(option =>
			option.setName('zipcode')
				.setDescription('Input your zipcode')
				.setRequired(true)),
	async execute(interaction) {
		const zipcode = interaction.options.getString('zipcode');
		interaction.reply({ content: await main(zipcode) });
	},
};