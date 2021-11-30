import Sequelize from 'sequelize';
require('dotenv').config();

const {
    DATABASE_NAME,
    DATABASE_USERNAME,
    DATABASE_PASSWORD,
    DATABASE_DIALECT
} = process.env;

const sequelize = new Sequelize(DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD, {dialect: DATABASE_DIALECT});

export default sequelize;
