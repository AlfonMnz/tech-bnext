export default function makeGetContactsUC(userDb){
	return async function getContactsUC(userId){
		try {
			const user = await userDb.getUserById(userId, 1, "-_id contacts");
			if (!user) throw new Error("User not found");
			return user;
		} catch (e) {
			throw e;
		}
	}
}