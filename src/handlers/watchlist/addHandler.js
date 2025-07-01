const db = require('../../db');
const Genre = require('../../db/models/Genre');
const Title = require('../../db/models/Title');
const logger = require('../../utils/logger');

module.exports = async (title, type, genreName) => {

	try {
		// Check if title already exists
		const checkIfExists = await Title.findOne({
			where: { title: title, media_type: type },
		});

		if (checkIfExists) {
			return 'Title already exists!';
		}

		// Find of create a new genre
		const [genre] = await Genre.findOrCreate({
			where: { genre: genreName },
		});

		// Check if title exists
		// Create a new title
		const newTitle = await Title.create({
			title: title,
			media_type: type,
		});
		// Add genre to title
		await newTitle.addGenre(genre);

		return (`You added the ${newTitle.media_type} ${newTitle.title} to your watchlist!`);

	} catch (error) {
		console.error('Error creating title:', error);
	};
};