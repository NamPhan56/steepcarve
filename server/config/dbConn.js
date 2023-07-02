//make sure you setup your config.env file and do not store that file in github.

const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.DATABASE_URI);
        console.log('MongoDB connected');
    } catch(err) {
        console.log("MongoDB Connection Error", err);
    }
}

module.exports = connectDB