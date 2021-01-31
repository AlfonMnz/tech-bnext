import makeUserDb from "./handler/user.db";
import UserModel from "./models/user.model";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_STRING || 'mongodb://localhost/bnext', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: true
});

const userDb = makeUserDb(UserModel);

export {userDb};