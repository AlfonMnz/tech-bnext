export default function makeUserController(addUserUC) {
	async function addUser(httpRequest) {
		try {
			const userData = httpRequest.body;
			const user = await addUserUC(userData);
			return {
				headers: {
					'Content-Type': 'application/json'
				},
				status: 201,
				data: {
					message: "User created correctly",
					data: user
				}
			}
		} catch (e) {
			return {
				headers: {
					'Content-Type': 'application/json',
				},
				status: 400,
				data: {
					message: e.message
				}
			}
		}

	}

	return {addUser}
}