const { SlashCommandBuilder } = require('discord.js');
const catFact = require('../../handlers/silly/catHandler');

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
		await interaction.deferReply();
		interaction.editReply({ content: await main() });
	},
};