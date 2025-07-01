const db = require('../../db/models/index')

module.exports = async (title, genreName) => {
	// Find title
	const updatedTitle = await db.Title.findOne({
		where: { title: title },
	});

	// Return message if title does not exist
	if (!updatedTitle) {
		return `${title} was not found in your watchlist, check your spelling or add using /add-to-watchlist`;
	};

	// Find or create genre
	const [genre] = await db.Genre.findOrCreate({
		where: { genre: genreName },
	});

	// Attach genre to title
	await updatedTitle.addGenre(genre);

	return (`You added the genre '${genre.genre}' to ${updatedTitle.title}`);
};