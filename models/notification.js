const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

var NotificationSchema = new mongoose.Schema({
    userID: {
        type: Schema.Types.ObjectId,
        required: true
    },
    data: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Notification', NotificationSchema);