import mongoose from 'mongoose';


const product = mongoose.model(
    "product",
    new mongoose.Schema({
        id: Number,
        name: String,
        price: Number,
        category_id: Number,
    })
);

exports.product = product;