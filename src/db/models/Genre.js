const db = require('../index');
const { Model, DataTypes } = require('sequelize');


class Genre extends Model {
	static associate(models) {
		Genre.belongsToMany(models.Title, { through: 'TitleGenres' });
	};
};

Genre.init(
	{
		genre: {
			type: DataTypes.STRING,
		},
	},
	{
		paranoid: true,
		sequelize: db,
		modelName: 'Genre',
		tableName: 'genres',
	},
);

module.exports = Genre;