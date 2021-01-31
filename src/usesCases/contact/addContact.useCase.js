import {makeContact} from "../../entities";
import {checkPhoneUC} from "../index";

export default function makeAddContactUC(contactDb) {
	return async function addContactUC(contactData) {
		try {
			const contact = makeContact(contactData);
			//const exist = await contactDb.getContactByPhone(contact.phone);
			//if (exist) throw new Error('Contact exists with this phone on this user');
			const validated = await checkPhoneUC(contact.phone);
			if (!validated) throw new Error('Must be a valid phone number');
			return await contactDb.addContact(contact);
		} catch (e) {
			throw e;
		}
	}
}