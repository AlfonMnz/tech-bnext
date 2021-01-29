import mongoose from "mongoose";

const Schema = mongoose.Schema;

const contactSchema = new Schema({
	contactName: {
		type: String,
		required: "{PATH} is required"
	},
	phone: {
		type: String,
		required: "{PATH} is required"
	}
});

const ContactModel = mongoose.model("contact", contactSchema)
export default ContactModel;