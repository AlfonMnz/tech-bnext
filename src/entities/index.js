import buildMakeUser from "./user/user.entity";
import buildMakeContact from "./contact/contact.entity";

const makeUser = buildMakeUser();
const makeContact = buildMakeContact();
export {makeUser, makeContact}