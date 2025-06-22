// eslint-disable-next-line no-unused-vars
const dotenv = require('dotenv').config();

module.exports = {
	discordToken: process.env.DISCORD_TOKEN,
	discordClientId: process.env.CLIENT_ID,
	discordGuildId: process.env.GUILD_ID,
	weatherAPIKey: process.env.WEATHER_API_KEY,
	shouldCreateCommands: process.env.SHOULD_CREATE_COMMANDS === 'true',
	dbHost: process.env.DB_HOST,
	postgresUser: process.env.POSTGRES_USER,
	postgresDb: process.env.POSTGRES_DB,
	postgresPassword: process.env.POSTGRES_PASSWORD,
	forceDbReset: process.env.FORCE_DB_RESET === 'true',
};
