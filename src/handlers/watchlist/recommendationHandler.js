const Title = require('../../db/models/Title');
const logger = require('../../utils/logger');

module.exports = async (mediaType, genre) => {
	logger.info(`Looking for a ${genre} ${mediaType}`);
	const resp = await Title.findOne({
		where: { genre: genre },
	});
	logger.info(resp);
	if (!resp) {
		return ('No matches found!');
	}
	const rec = resp.get();
    return (`Why don't you watch the ${rec.media_type} ${rec.title}?`);
};
