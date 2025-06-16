const { request } = require('undici');

const catFact = async () => {
	const response = await request('https://meowfacts.herokuapp.com/');
	const catData = await response.body.json();
	return catData.data[0];
};

module.exports = { catFact: catFact };