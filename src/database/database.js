import Sequelize from 'sequelize';

const database = process.env.DATABASE || 'postgres';        // nombre de tu base de datos
const username = process.env.USER || 'postgres';        // nombre de tu usuario
const password = process.env.PASSWORD || 'postgres';        // contraseña de el usuario (en este caso el usuario es 'postgres')

export const sequelize = new Sequelize(database, username, password, {
    host: 'localhost',
    dialect: 'postgres',            // base de datos que usaremos
    pool: {
        max: 5,
        min: 0,
        require: 30000,
        idle: 10000
    },
    logging: false
});
