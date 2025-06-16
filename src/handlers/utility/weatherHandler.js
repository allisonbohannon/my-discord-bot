const { request } = require('undici');
const { weatherAPIKey } = require('../../../config.json');

const weather = async (zipcode) => {
	// const response = await request(`https://api.openweathermap.org/data/2.5/weather?lat=37.80&lon=-122.42&appid=61338fc63748811c1185c7affdbd62e`);
	// const weatherData = await response.body.json();
	// console.log(weatherData);
	// return weatherData.data;
    return `It's 75 and sunny in ${zipcode}`;
};

module.exports = { weather: weather };