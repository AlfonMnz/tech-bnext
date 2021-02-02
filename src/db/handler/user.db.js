export default function makeUserDb(userModel, objectId) {
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

	async function getContactsByArrayIds(contactsId, userId) {
		try {
			return await userModel.findOne({
				contacts: {
					$in: contactsId.map((el) => {
						return objectId(el)
					})
				},
				id: userId
			}).populate('contacts');
		} catch (e) {
			throw e;
		}
	}

	return {
		getUserByName,
		addUser,
		getUserById,
		getContactsByArrayIds
	}
}