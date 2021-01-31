/**
 * UserEntity the entity of an user
 * @typedef {Object} UserEntity
 * @property {Function} makeUser
 * @memberOf Entities
 */

/**
 * Function to build the make user entity function
 * @memberOf Entities.UserEntity.buildMakeUser
 * @returns {function({JSON} userData The data of the user): {userData: {JSON}}
 */
export default function buildMakeUser() {
	/**
	 * Function to valid and make a user entity
	 * @param {JSON} userData The data of an user
	 * @memberOf UserEntity.makeUser
	 * @returns {{userData: ({phone}|{name}|{lastName})}}
	 */
	return function makeUser(userData) {
		if (typeof userData === "undefined") throw new Error("the user data can't be empty")
		if (!userData.name) throw new Error('Name is required');
		if (!userData.lastName) throw new Error('Lastname is required');
		if (!userData.phone) throw new Error('Phone is required');
		//@todo Make phone validation with API
		return userData

	}
}