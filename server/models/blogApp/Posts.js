const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose) //psses mongoose in
//const AutoIncrement = require('mongoose-sequence')(mongoose);

//data model

const blogDB = mongoose.connection.useDb('blogdb');

const postSchema = new mongoose.Schema({
    //who wrote the post
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'User'
    },
    
    //Text of the post
    message: {
        type: String,
        required: true
    },

    // date and time of the post
    createdAt: {
        type: Date,
        default: new Date(Date.now),
        required: true
    }
});

// noteSchema.plugin(AutoIncrement, {
//     inc_field: 'ticket',
//     id: 'ticketNums',
//     start_seq:500
// })

module.exports = blogDB.model('Post', postSchema)