const { TimestampStyles } = require('discord.js');
const { Genre, Title } = require('../../db/models');
const logger = require('../../utils/logger');


module.exports = async () => {
	const resp = await Title.findAll({
		include: Genre,
	});
	if (!resp) {
		return 'No titles found!';
	}
	let str = 'You have the following titles on your watchlist:\n';
	resp.forEach(title => {
		const genresArr = title.Genres;
		const arrLength = genresArr.length;
		const multi = arrLength > 1 ? 's' : '';
		let genreStr = `with the genre${multi}: `;
		for (let i = 0; i < arrLength - 1; i++) {
			logger.info(genresArr[i]);
			genreStr += `${genresArr[i].dataValues.genre}, `;
		};
		genreStr += genresArr[arrLength - 1].dataValues.genre;
		str += `- ${title.title}, a ${title.media_type} ${genreStr}\n`;
	});
	logger.info(str);
	return str;
};