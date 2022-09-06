
import mongoose from 'mongoose';


const User = mongoose.model(
    "product",
    new mongoose.Schema({
        id: Number,
        firstName: String,
        lastName: String,
        email: String,
        password: String,
    })
);

exports.User = User;