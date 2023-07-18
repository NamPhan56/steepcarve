const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose) //psses mongoose in
//const AutoIncrement = require('mongoose-sequence')(mongoose);

//data model

const blogDB = mongoose.connection.useDb('blogdb');

const postSchema = new mongoose.Schema({
    //who wrote the post
    user: {
        type: String,
        required: true,
        default: "Anonymous",
    },
    
    //Text of the post
    message: {
        type: String,
        required: true
    },

    // date and time of the post
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    }
});

// noteSchema.plugin(AutoIncrement, {
//     inc_field: 'ticket',
//     id: 'ticketNums',
//     start_seq:500
// })

module.exports = blogDB.model('Post', postSchema)