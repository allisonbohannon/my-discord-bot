const Title = require('../../db/models/Title');
const logger = require('../../utils/logger');

module.exports = async (title) => {
	logger.info(`Removing ${title}`);
	const titleToRemove = await Title.destroy({
		where: { title: title },
		truncate: true,
	});
	logger.info(titleToRemove);
	if (!titleToRemove) {
		return `Could not find ${title}`;
	}
	return `Removed ${title} from watchlist`;
};