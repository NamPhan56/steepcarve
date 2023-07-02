const mongoose = require('mongoose')

//data model
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    //users can have more than one role, thus using an array
    roles: [{
        type: String,
        default: "Employee"
    }],
    active: {
        type: Boolean,
        default: true
    }

})

module.exports = mongoose.model('User', userSchema)