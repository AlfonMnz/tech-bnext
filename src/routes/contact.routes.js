import {Router} from 'express';
import expressCallback from "../httpCallbacks/express.callback";
import {contactController} from "../controllers";

const router = new Router();

router.post('/add', expressCallback(contactController, "addContact"));
router.post('/addContacts', expressCallback(contactController, "addContacts"));
export default router;