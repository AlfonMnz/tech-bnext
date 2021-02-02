export default function makeGetSameContactsUC(userDb) {
	return async function getSameContactsUC(userId1, userId2) {
		try {
			if (!userId1) throw new Error("UserId1 is required");
			if (typeof userId1 != "number") throw new Error("UserId1 must be integer");

			if (!userId2) throw new Error("UserId2 is required");
			if (typeof userId2 != "number") throw new Error("UserId2 must be integer");

			const user1 = await userDb.getUserById(userId1);
			return await userDb.getContactsByArrayIds(user1.contacts, userId2);
		} catch (e) {
			throw e;
		}
	}
}