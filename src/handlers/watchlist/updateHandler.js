const Title = require('../../db/models/Title');
const logger = require('../../utils/logger');

module.exports = async (title, type, genre, platform) => {
	const checkIfExists = await Title.findOne({
		where: { title: title },
	},
	);
	if (!checkIfExists) {
		return `${title} was not found in your watchlist, check your spelling or add using /add-to-watchlist`;
	};
	const titleToUpdate = await Title.update(
		{
			title: title,
			media_type: type,
			genre: genre,
			platform: platform,
	    },
		{ where: { title: title } },
	);
	return (`You updated ${checkIfExists.title}`);
};