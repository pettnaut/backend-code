import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Role = sequelize.define('roles', {
    id: {
        type: Sequelize.INTEGER,                // llave primaria, con la opcion de ser autoincrementable
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false
})

export default Role;