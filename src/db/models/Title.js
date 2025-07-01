const db = require('../index');
const { Model, DataTypes } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
	const Title = sequelize.define('Title', {
		title: DataTypes.STRING,
		media_type: DataTypes.STRING,
	});

	Title.associate = models => {
		Title.belongsToMany(models.Genre, { through: 'TitleGenres' });
	};

	return Title;
};

class Title extends Model {
	static associate(models) {
		Title.belongsToMany(models.Genre, { through: 'TitleGenres' });
	};
};

Title.init(
	{
		title: {
			type: DataTypes.STRING,
		},
		media_type: {
			type: DataTypes.STRING,
		},
	},
	{
		paranoid: true,
		sequelize: db,
		modelName: 'Title',
		tableName: 'titles',
	},
);

module.exports = Title;