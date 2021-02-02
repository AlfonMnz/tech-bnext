export default function makeAddContactToUserUC(userDb) {
	return async function addContactToUserUC(contact, userId) {
		try {
			const user = await userDb.getUserById(userId);
			if (!user) throw new Error("User doesn't exists");
			user.contacts.push(contact._id);
			return await user.save();
		} catch (e) {
			throw e;
		}
	}
}