import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const Book = new Schema({
    idAuthor: { type: Schema.Types.ObjectId, ref: "Author" } ,
    title: String,
    description: String,
    isbn: String
});

export const book = mongoose.model('Book', Book);