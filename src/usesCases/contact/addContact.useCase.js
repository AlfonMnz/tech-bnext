import {makeContact} from "../../entities";
import {checkPhoneUC} from "../index";
import {addContactToUserUC} from "../index";

export default function makeAddContactUC(contactDb) {
	return async function addContactUC(contactData, userId) {
		try {
			if (typeof userId != "number") throw new Error('UserId must be integer');
			const contact = makeContact(contactData);
			const validated = await checkPhoneUC(contact.phone);
			if (!validated) throw new Error('Must be a valid phone number');
			const newContact = await contactDb.addContact(contact);
			return await addContactToUserUC(newContact, userId);
		} catch (e) {
			throw e;
		}
	}
}