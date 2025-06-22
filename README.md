# discord-weather-bot

## Overview
A bot that can be used in a discord server

Key Functionality: 
1) /cats: pulls a random cat fact from 
2) /weather
    - user will be prompted to enter a zipcode
    - uses OpenWeather API to provide a weather update for the inputted zipcode
3) /schedule: 
    - will prompt you to log-in to your google calendar on first use
    - prints out remaining calendar events for the day
4) Media Watchlist management (hosted on localhost database via PostgreSQL)
     - /add-to-watchlist: Add a movie or tv show to your watchlist (title, media type, genre)
     - /recommend-something-to-watch: User inputs media-type and genre, bot returns a recommendation of what to watch from your watchlist
     - /update-watchlist: Shows list of existing titles, prompts user to make updates to media-type or genre
     - /remove-from-watchlist: Shows list of existing titles, user is able to delete and entry


## Requirements
- node
- postgres

## Set Up

### Create a discord-bot
Follow the instructions on to create your bot and add your bot to a server. Update the bot's token, clientId, and the serverId in the config file (or create a dotenv file to manage these entries). 

### Configure the files to your Postgres
Update config/dotenv files to reflect your Postgres instance: database, username, password, and port.

### Run the code
- npm i 
- node .

Logging is included for optimal use with nodemon my-discord-bot | pino-pretty

Test your connection by typing /ping, the bot should respond with 'Pong!'

## Needed Tokens and API Keys
Discord Bot: bot token, server-id, client-id
OpenWeather for Weather and geo-location data


## NPM Packages Used

- discord.js
- unidici
- convert-units
- google calendar api 
- sequelize
- node-fetch
- pino