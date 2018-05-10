const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const GroupSchema = mongoose.Schema({
    group_name: {
        type: String,
        required: true
    },
    admin: {
        type: Schema.Types.Object,
        ref: 'User',
        required: true
    },
    client: [{
        type: Schema.Types.Object,
        ref: 'User',
        required: false
    }],
});

// create the model for users and expose it to our app
const Group = module.exports = mongoose.model('Group', GroupSchema);