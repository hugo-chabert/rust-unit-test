import mongoose from 'mongoose';

const { Schema, models, model } = mongoose;

const UsersModel = new Schema<Users>({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
})
	.set('timestamps', true)
	.set('toJSON', {
		virtuals: true
	});

export default models.Users || model('Users', UsersModel);