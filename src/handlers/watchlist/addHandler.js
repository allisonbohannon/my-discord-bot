const Title = require('../../db/models/Title');

module.exports = async (title, type, genre, platform) => {
	const newTitle = await Title.create({
		title: title,
		media_type: type,
		genre: genre,
		platform: platform,
	});
	return (`You added the ${newTitle.media_type} ${newTitle.title} to your watchlist!`);
};