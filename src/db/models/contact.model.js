import mongoose from "mongoose";

const Schema = mongoose.Schema;

const contactSchema = new Schema({
	id: {
		type: Number,
		required: "{PATH} is required",
	},
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