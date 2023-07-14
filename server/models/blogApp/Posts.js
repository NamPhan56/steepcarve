const mongoose = require('');
//const AutoIncrement = require('mongoose-sequence')(mongoose);

//data model

const postSchema = new mongoose.Schema({
    //who wrote the post
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    
    //Text of the post
    message: {
        type: String,
        required: true
    },

    //date and time of the post
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    }
})

module.exports = mongoose.model('Posts', postSchema)