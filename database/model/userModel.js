import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
    name: String,
    email: String,
    password: String
});

const Users = models.Users || model('users', userSchema);

export default Users;