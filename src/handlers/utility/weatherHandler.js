const { request } = require('undici');
const convert = require('convert-units');
const { weatherAPIKey } = require('../../../config.json');


const weather = async (zipcode) => {
	const response = await request(`http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode}&appid=${weatherAPIKey}`);
	const { name, lat, lon } = await response.body.json();

	const response2 = await request(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherAPIKey}`);
	const weatherData = await response2.body.json();

	const temp = Math.round(convert(weatherData.main.temp).from('K').to('F')).toString();
	return { name: name, temp: temp };

};

module.exports = { weather: weather };

