export default function makeContactController(addContactUC) {
	async function addContact(httpRequest) {
		try {
			const contactData = httpRequest.body;
			const contact = await addContactUC(contactData);
			return {
				headers: {
					'Content-Type': 'application/json'
				},
				status: 201,
				data: {
					message: "Contact created correctly",
					data: contact
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

	return {addContact}
}