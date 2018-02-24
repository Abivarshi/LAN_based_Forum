var model = require('../model/model.js');
var path = require('path');
var bodyParser = require('body-parser');

module.exports = function (app,io){
    app.use( bodyParser.json() );
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.get('/',function(req,res){
        res.sendFile(path.resolve(__dirname+"/../view/pages/index.html"));
    });

    var username=null;
    app.post('/login',function(req,res){
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader("Access-Control-Allow-Method","'GET, POST, OPTIONS, PUT, PATCH, DELETE'");

        model.user.findOne({},function(err,doc){
            console.log(model.user);
            console.log(doc);
            if(err){
                res.send(err);
            }
            if(doc==null){
                res.send("User has not registered");
            }
            else{
                console.log("Authentication Success");
                res.send("success");
            }
        });
        username = req.body.username;
    });

    io.sockets.on('connection', function (socket) {
        socket.on('send msg', function (data) {
            io.sockets.emit('get msg', data);
            console.log(data);
        })
    });

};