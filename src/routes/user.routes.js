import {Router} from 'express';
import expressCallback from "../httpCallbacks/express.callback";
import {userController} from "../controllers";

const router = new Router();

router.post('/add', expressCallback(userController, "addUser"));
router.get('/contacts/:userId', expressCallback(userController, "getContacts"));
router.post('/sameContacts', expressCallback(userController, "getSameContacts"));

export default router;