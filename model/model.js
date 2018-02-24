var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost:27017/chat");
mongoose.connection.on('open', function (ref) {
    console.log('Connected to mongo server.');
});

mongoose.connection.on('error', function (err) {
    console.log('Could not connect to mongo server!');
});

mongoose.connect('mongodb://localhost/mongodb');

module.exports.user=mongoose.model('user',new Schema({
    username:String,
    name: String,
    password:String,
    occupation: String,
    phone:String,
    email:String,
    admin:[],
    client:[]
},{strict: false}));
/*
user.findOne({},function(err,doc) {
    console.log(doc);
});*/