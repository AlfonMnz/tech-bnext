
export default function buildMakeUser() {
	const generatorId = makeId(0);
	return function makeUser(userData) {
		if (typeof userData === "undefined") throw new Error("the user data can't be empty")
		if (!userData.name) throw new Error('Name is required');
		if (!userData.lastName) throw new Error('Lastname is required');
		if (!userData.phone) throw new Error('Phone is required');
		userData.id = generatorId.next().value;
		return userData

	}

	function* makeId(init) {
		while (true) {
			init++;
			yield init;
		}
	}
}