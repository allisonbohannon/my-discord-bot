const db = require('../index');
const { Model, DataTypes } = require('sequelize');

class Title extends Model {
	static associate() {};
};

Title.init(
	{
		title: {
			type: DataTypes.STRING,
		},
		media_type: {
			type: DataTypes.STRING,
		},
		genre: {
			type: DataTypes.STRING,
		},
		platform: {
			type: DataTypes.STRING,
		},
		watched: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
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