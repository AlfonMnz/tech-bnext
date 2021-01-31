import makeUserDb from "./handler/user.db";
import makeContactDb from "./handler/contact.db";
import UserModel from "./models/user.model";
import ContactModel from "./models/contact.model";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_STRING || 'mongodb://localhost/bnext', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: true
}, () => {
	console.log('DATABASE STATUS [OK]')
});

const userDb = makeUserDb(UserModel);
const contactDb = makeContactDb(ContactModel);

export {userDb, contactDb};