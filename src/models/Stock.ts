import mongoose from 'mongoose';


const product = mongoose.model(
    "stock",
    new mongoose.Schema({
        id: Number,
        name: String,
        product_id: Number,
        product_quantity: Number,
    })
);

exports.product = product;