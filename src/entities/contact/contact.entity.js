/**
 * Function to build the make contact entity function
 * @typedef ContactEntity
 * @returns {function(*): {contactData: {phone}|{contactName}|*}}
 */
export default function buildMakeContact() {
	/**
	 * Function to valid and make a contact entity
	 * @param contactData
	 * @returns {{contactData: ({phone}|{contactName})}}
	 */
	const generatorId = makeId(0);
	return function makeContact(contactData) {
		if (!contactData.contactName) throw new Error('Contact name is required');
		if (!contactData.phone) throw new Error('Phone is required');
		contactData.id = generatorId.next().value;
		return contactData
	}

	function* makeId(init) {
		while (true) {
			init++;
			yield init;
		}
	}
}