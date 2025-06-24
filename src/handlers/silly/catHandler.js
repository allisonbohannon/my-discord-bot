const { request } = require('undici');

module.exports = async () => {
	const response = await request('https://meowfacts.herokuapp.com/');
	const catData = await response.body.json();
	return catData.data[0];
};