const { Genre, Title } = require('../../db/models');
const logger = require('../../utils/logger');

module.exports = async (mediaType, genre) => {
	logger.info(`Looking for a ${genre} ${mediaType}`);

	const resp = await Title.findAndCountAll({
		where: { media_type: mediaType },
		include: {
			model: Genre,
			where: { genre: genre },
			through: { attributes: [] },
		},
		attributes: ['title', 'media_type'],
	});

	if (resp.count === 0) {
		return ('No matches found!');
	};

	const randInt = Math.round(Math.random() * resp.count);
	const rec = resp.rows[randInt];
	return (`Why don't you watch the ${rec.media_type} ${rec.title}?`);
};
