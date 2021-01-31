/**
 * The namespace of the entities
 * @namespace Entities
 */

import buildMakeUser from "./user/user.entity";
import buildMakeContact from "./contact/contact.entity";
import sanitize from 'sanitize';

const makeUser = buildMakeUser();
const makeContact = buildMakeContact();
export {makeUser, makeContact}