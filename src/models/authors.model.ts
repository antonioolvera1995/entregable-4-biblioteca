import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const Author = new Schema({
    name: String,
    familyName: String,
    age: Number
});

export const author = mongoose.model('Author', Author);