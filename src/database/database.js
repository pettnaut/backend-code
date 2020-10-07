import Sequelize from 'sequelize';

export const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://postgres:postges@127.0.0.1:5432/postges') // Example for postgres
