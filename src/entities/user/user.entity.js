export default function buildMakeUser() {
	return function makeUser(userData) {
		if (!userData.name) throw new Error('Name is required');
		if (!userdata.lastName) throw new Error('Lastname is required');
		if (!userData.phone) throw new Error('Phone is required');
		//@todo Make phone validation with API
		return {
			userData
		}
	}
}