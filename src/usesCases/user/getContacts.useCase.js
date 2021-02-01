export default function makeGetContactsUC(userDb){
	return async function getContactsUC(userId){
		try {
			return await userDb.getUserById(userId, 1, "-_id contacts");
		} catch (e) {
			throw e;
		}
	}
}