import makeUserController from './user.controller';
import makeContactController from "./contact.controller";


import {addUserUC, addContactUC, getContactsUC} from "../usesCases";

const userController = makeUserController(addUserUC, getContactsUC)
const contactController = makeContactController(addContactUC);

export {userController, contactController}