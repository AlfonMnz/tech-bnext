import makeUserController from './user.controller';
import makeContactController from "./contact.controller";


import {addUserUC, addContactUC} from "../usesCases";

const userController = makeUserController(addUserUC)
const contactController = makeContactController(addContactUC);

export {userController, contactController}