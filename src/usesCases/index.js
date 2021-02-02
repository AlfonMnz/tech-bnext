import makeAddUserUC from "./user/addUser.useCase";
import makeCheckPhoneUC from "./user/checkPhone.useCase";
import makeAddContactUC from "./contact/addContact.useCase";
import makeAddContactToUserUC from "./user/addContactToUser.useCase";
import makeGetContactsUC from "./user/getContacts.useCase";
import makeGetSameContactsUC from "./user/getSameContacts.useCase";

import axios from "axios";
import {userDb, contactDb} from "../db";

const getContactsUC = makeGetContactsUC(userDb);
const addContactUC = makeAddContactUC(contactDb);
const addUserUC = makeAddUserUC(userDb);
const checkPhoneUC = makeCheckPhoneUC(axios);
const addContactToUserUC = makeAddContactToUserUC(userDb);
const getSameContactsUC = makeGetSameContactsUC(userDb);

export {addUserUC, checkPhoneUC, addContactUC, addContactToUserUC, getContactsUC, getSameContactsUC}