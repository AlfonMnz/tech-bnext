import makeAddUserUC from "./user/addUser.useCase";
import makeCheckPhoneUC from "./user/checkPhone.useCase";
import axios from "axios";
import {userDb} from "../db";

const addUserUC = makeAddUserUC(userDb);
const checkPhoneUC = makeCheckPhoneUC(axios);

export {addUserUC, checkPhoneUC}