import makeAddUserUC from "./user/addUser.useCase";
import makeCheckPhoneUC from "./user/checkPhone.useCase";
import makeAddContactUC from "./contact/addContact.useCase";
import axios from "axios";
import {userDb, contactDb} from "../db";


const addContactUC = makeAddContactUC(contactDb);
const addUserUC = makeAddUserUC(userDb);
const checkPhoneUC = makeCheckPhoneUC(axios);

export {addUserUC, checkPhoneUC, addContactUC}