const mongoose = require('mongoose');

const UserRequestSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    img: {
        data: Buffer,
        contentType: String,
        required: false
    }
});

const Request = module.exports = mongoose.model('UserRequest', UserRequestSchema);