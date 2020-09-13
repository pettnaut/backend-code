import Role from '../models/Role'

export async function getRoles(req, res) {
    try {
        const roles = await Role.findAll();
        return res.json({
            data: roles
        })
    } catch (e) {
        return res.status(500).json({
            message: "Something goes wrong",
            data: {}
        })
    }

}