import makeUserController from './user.controller';

import {addUserUC} from "../usesCases";

const userController = makeUserController(addUserUC)



export {userController}