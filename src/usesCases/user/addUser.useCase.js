/**
 * AddUserUC The use case to add an user
 * @typedef {Object} AddUserUC
 */

import {makeUser} from "../../entities";

/**
 * Function to build the addUserUC
 * @param {UserDb} userDb The handler of user with DB
 * @returns {function(*=): Promise<*|undefined>}
 */
export default function makeAddUserUC(userDb) {
	/**
	 * Function to add an user on DB
	 * First make an user entity, then check if exist in the DB
	 * and if not exist insert the user in the DB
	 * @param {JSON} userData - The data of an user
	 * @return {UserEntity | Error}
	 */
	return async function addUserUC(userData) {
		try {
			const user = makeUser(userData);
			const exists = await userDb.getUserByName(user.name);
			if (exists) throw new Error('User already exists');
			return await userDb.addUser(user);
		} catch (e) {
			throw e;
		}

	}
}
