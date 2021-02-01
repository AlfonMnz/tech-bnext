/**
 * UserDb The handler of user with DB
 * @typedef {Object} UserDb
 * @property {UserModel} userModel the model of the user in DB
 */

/**
 * Function to build the UserDb's functions
 * @param {UserModel} userModel The model of the user in DB
 * @return {UserDb} The user Db
 */
export default function makeUserDb(userModel) {
	/**
	 * Function to get an user by name
	 * @param {String} userName The name of the user
	 * @returns {UserEntity|Error} Return a user entity or and error
	 */
	async function getUserByName(userName) {
		try {
			return await userModel.findOne({name: userName});
		} catch (e) {
			throw e;
		}
	}

	async function addUser(user) {
		try {
			let newUserDb = await new userModel(user);
			return await newUserDb.save();
		} catch (e) {
			throw e;
		}
	}

	async function getUserById(userId, populate = 0, filter = null) {
		try {
			return populate ? await userModel.findOne({id: userId}, filter != null ? filter : "").populate('contacts') : await userModel.findOne({id: userId}, filter != null ? filter : "");
		} catch (e) {
			throw e;
		}
	}

	return {
		getUserByName,
		addUser,
		getUserById,
	}
}