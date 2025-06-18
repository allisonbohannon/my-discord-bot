const { SlashCommandBuilder } = require('discord.js');
const { getEvents } = require('../../handlers/utility/scheduleHandler');

const main = async () => {
	const result = await getEvents()
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
		.setName('schedule')
		.setDescription('Lists out all remaining calendar events for the day'),
	async execute(interaction) {
		interaction.reply({ content: await main() });
	},
};