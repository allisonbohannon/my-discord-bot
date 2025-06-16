const { SlashCommandBuilder } = require('discord.js');
const { catFact } = require('../../handlers/catHandler');

const main = async () => {
	const result = await catFact()
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
		.setName('cats')
		.setDescription('Gives a random cat fact'),
	async execute(interaction) {
		interaction.reply({ content: await main() });
	},
};