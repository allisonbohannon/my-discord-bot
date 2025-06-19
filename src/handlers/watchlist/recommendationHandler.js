const { request } = require('undici');

const recommendation = async () => {
	// const response = await request('https://meowfacts.herokuapp.com/');
	// const catData = await response.body.json();
	// return catData.data[0];
    return ('Why don\'t you go outside instead?');
};

module.exports = { recommendation: recommendation };