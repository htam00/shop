import mongoose, { Schema } from 'mongoose';

const ProductsSchema = new Schema({
    name: String,
    store: String,
    image: String
});

export const Product = mongoose.model("Products", ProductsSchema);