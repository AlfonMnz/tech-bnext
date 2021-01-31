export default function makeContactDb(contactModel) {
	async function addContact(contact) {
		try {
			let newContactDb = await new contactModel(contact);
			return await newContactDb.save();
		} catch (e) {
			throw e;
		}
	}

	return {
		addContact
	}
}