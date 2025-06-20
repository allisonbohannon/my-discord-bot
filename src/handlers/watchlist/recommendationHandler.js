const Title = require('../../db/models/Title');

module.exports = async () => {
	const resp = await Title.findOne({

	});
	const rec = resp.get();
    return (`Why don't you watch the ${rec.media_type} ${rec.title}?`);
};
