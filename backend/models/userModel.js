const { Schema, model } = require("mongoose");


const userSchema = Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
    },
    dateOfBirth: {
        type: Date,
        required: [false, 'Please add your date of birth'],
    },
    role: {
        type: String,
        required: false,
        default: 'user',
    }
}, {
    timestamps: true,
})

module.exports = model('User', userSchema)