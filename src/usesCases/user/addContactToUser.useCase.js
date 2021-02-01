export default function makeAddContactToUserUC(userDb) {
	return async function addContactToUserUC(contact, userId) {
		try {
			const user = await userDb.getUserById(userId);
			user.contacts.push(contact._id);
			return await user.save();
		} catch (e) {
			throw e;
		}
	}
}