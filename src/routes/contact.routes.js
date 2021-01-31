import {Router} from 'express';
import expressCallback from "../httpCallbacks/express.callback";
import {contactController} from "../controllers";

const router = new Router();

router.post('/add', expressCallback(contactController, "addContact"));

export default router;