const Title = require('../../db/models/Title');
const logger = require('../../utils/logger');

module.exports = async (mediaType, genre) => {
	logger.info(`Looking for a ${genre} ${mediaType}`);
	
	const resp = await Title.findAndCountAll({
		where: { media_type: mediaType, genre: genre },
	});
	//logger.info(resp);

	if (resp.count === 0) {
		return ('No matches found!');
	};

	const randInt = Math.round(Math.random() * resp.count);
	const rec = resp.rows[randInt].dataValues;
	return (`Why don't you watch the ${rec.media_type} ${rec.title}?`);
};
