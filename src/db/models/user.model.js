import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * UserModel
 * @typedef {Object} UserModel
 * @property {String} name The name of the user
 * @property {String} lastName the last name of the user
 * @property {String} phone The phone of the user
 * @property {Array<ContactEntity>} contacts The contacts of the user
 */
const userSchema = new Schema({
	name: {
		type: String,
		required: "{PATH} is required",
	},
	lastName: {
		type: String,
		required: "{PATH} is required"
	},
	phone: {
		type: String,
		required: "{PATH} is required"
	},
	contacts: [{
		type: Schema.Types.ObjectId, ref: "contact",
		default: []
	}]
});

const UserModel = mongoose.model("user", userSchema);
export default UserModel;