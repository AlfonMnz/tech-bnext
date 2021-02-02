/**
 * AddUserUC The use case to add an user
 * @typedef {Object} AddUserUC
 */

import {makeUser} from "../../entities";
import {checkPhoneUC} from "../index";

/**
 * Function to build the addUserUC
 * @param {UserDb} userDb The handler of user with DB
 * @returns {function(*=): Promise<*|undefined>}
 */
export default function makeAddUserUC(userDb) {

	return async function addUserUC(userData) {
		try {
			const user = makeUser(userData);
			const exists = await userDb.getUserByName(user.name);
			if (exists) throw new Error('User already exists');

			const validated = await checkPhoneUC(user.phone);
			if (!validated) throw new Error('Must be a valid phone number');

			return await userDb.addUser(user);
		} catch (e) {
			throw e;
		}

	}
}
