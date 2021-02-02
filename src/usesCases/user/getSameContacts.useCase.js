export default function makeGetSameContactsUC(userDb) {
	return async function getSameContactsUC(userId1, userId2) {
		try {
			const user1 = await userDb.getUserById(userId1);
			return await userDb.getContactsByArrayIds(user1.contacts, userId2);
		} catch (e) {
			throw e;
		}
	}
}