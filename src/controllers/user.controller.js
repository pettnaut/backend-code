import User from '../models/User';
import Credential from '../models/Credential';
import { sequelize } from "../database/database"
import Role from '../models/Role';


export async function createUser(req, res) {

    const { name, avatar, lastname, role, numberphone, email, password } = req.body;
    const t = await sequelize.transaction();

    try {
        const newUser = await User.create({
            name,
            avatar,
            lastname,
            numberphone,
            role
        }, { transaction: t });

        const newCredential = await Credential.create({
            email,
            password,
            userid: newUser.id
        }, { transaction: t })

        await t.commit()

        return res.json({
            message: "User created successfully",
            data: newUser
        });

    } catch (error) {

        await t.rollback();
        return res.status(500).json({
            message: `the email ${error.fields.email} has already been registered`,
            data: {}
        })
    }
}

export async function getUsers(req, res) {

    try {
        const users = await User.findAll({
            include: {
                model: Role,
                as: 'charge'
            },
            where: {
                status: true
            },
            attributes: ['avatar', 'name', 'lastname', 'numberphone']
        });
        return res.json({
            data: users
        })
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: "Something goes wrong",
            data: {}
        })
    }
}
