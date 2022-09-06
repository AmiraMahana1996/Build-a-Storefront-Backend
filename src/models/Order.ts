import mongoose from 'mongoose';

const Order = mongoose.model(
    "orders",
    new mongoose.Schema({
        id: Number,
        product_id: String,
        Product_quantity: String,
        user_id: Number,
        status: String,
    })
);

exports.Order = Order;