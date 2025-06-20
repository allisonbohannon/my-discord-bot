const Title = require('../../db/models/Title');

module.exports = async (title, type) => {
	const newTitle = await Title.create({
		title: title,
		media_type: type,
	});
	return (`You added the ${newTitle.media_type} ${newTitle.title} to your watchlist!`);
};