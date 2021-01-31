import makeAddUserUC from "./user/addUser.useCase";

import {userDb} from "../db";

const addUserUC = makeAddUserUC(userDb);

export {addUserUC}