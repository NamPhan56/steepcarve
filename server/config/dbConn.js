//make sure you setup your .env file in the same directory as your server.js and do not store that file in github.
//make sure your connection string does not start nor end with quotes.
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