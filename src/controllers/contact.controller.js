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

	async function addContacts(httpRequest) {
		try {
			const data = httpRequest.body;
			const contacts = data.contacts;
			for (let contact of contacts) {
				await addContactUC(contact, data.userId)
			}
			return {
				headers: {
					'Content-Type': 'application/json'
				},
				status: 201,
				data: {
					message: "Contacts created correctly",
					data: contacts
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

	return {addContact, addContacts}
}