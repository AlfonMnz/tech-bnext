import {Router} from 'express';
import expressCallback from "../httpCallbacks/express.callback";
import {userController} from "../controllers";

const router = new Router();

router.post('/add', expressCallback(userController, "addUser"));
router.get('/contacts/:userId', expressCallback(userController, "getContacts"));

export default router;