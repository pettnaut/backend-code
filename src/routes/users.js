import { Router } from 'express';
const router = Router();

import { createUser, getUsers } from "../controllers/user.controller"


router.post('/', createUser);
router.get('/', getUsers);


export default router;