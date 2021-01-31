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
	return function makeContact(contactData) {
		if (!contactData.contactName) throw new Error('Contact name is required');
		if (!contactData.phone) throw new Error('Phone is required');
		//@todo Ask if contactName is from the new contact or for the user to link the phone
		return {
			contactData
		}
	}
}