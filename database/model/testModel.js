import { Schema, model, models } from 'mongoose';


const testSchema = new Schema({
    name: String,
    email: String,
    password: String
});

const Test = models.Test || model('test', testSchema);
export default Test;