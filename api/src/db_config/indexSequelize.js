const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    'gestionEssence',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql',
        logging: false
    }
);

module.exports = {
    sequelize,
    DataTypes
}