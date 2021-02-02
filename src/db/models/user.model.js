import mongoose from "mongoose";

const Schema = mongoose.Schema;
const userSchema = new Schema({
	id: {
		type: Number,
		required: "{PATH} is required",
	},
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