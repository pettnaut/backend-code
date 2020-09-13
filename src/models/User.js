import Sequelize from "sequelize";
import { sequelize } from "../database/database"
import Role from "./Role";

const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,                // llave primaria, con la opcion de ser autoincrementable
        primaryKey: true,
        autoIncrement: true
    },
    avatar: {
        type: Sequelize.STRING
    },
    name: {
        type: Sequelize.STRING
    },
    lastname: {
        type: Sequelize.STRING
    },
    numberphone: {
        type: Sequelize.STRING
    },
    role: {
        type: Sequelize.INTEGER
    },
    status: {
        type: Sequelize.BOOLEAN
    }
}, {
    timestamps: false
});

Role.hasOne(User, {
    foreignKey: 'role', sourceKey: 'id'
});
User.belongsTo(Role, {
    as: 'charge', foreignKey: 'id', sourceKey: 'role'
})


export default User;