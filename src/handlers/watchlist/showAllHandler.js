const Title = require('../../db/models/Title');
const logger = require('../../utils/logger');


module.exports = async () => {
	const resp = await Title.findAll({});
	if (!resp) {
		return 'No titles found!';
	}
	logger.info(resp);
	let str = 'You have the following titles on your watchlist:\n';
	resp.forEach(title => {
		str += `- ${title.title}, a ${title.media_type}\n`;
	});
	logger.info(str);
	return str;
};