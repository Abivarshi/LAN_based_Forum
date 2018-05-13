const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

var NotificationSchema = new mongoose.Schema({
    userID: {
        type: Schema.Types.ObjectId,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    data: {
        type: Schema.Types.Mixed,
        required: false
    }
});

module.exports = mongoose.model('Notification', NotificationSchema);