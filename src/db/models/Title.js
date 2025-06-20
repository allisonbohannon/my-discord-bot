const db = require('../index');
const { Model, DataTypes } = require('sequelize');

class Title extends Model {
	// Needed to create foreign key / primary key relationships. This method will be used for those joins
	// eslint-disable-next-line no-empty-function
	static associate() {

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
	},
);

module.exports = Title;