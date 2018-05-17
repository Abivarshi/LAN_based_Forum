const express = require('express');
const router = express.Router();
const passport = require('passport');
require('./../config/passport')(passport);
const jwt = require('jsonwebtoken');
const config = require('../config/database');
var app = express();
var server = require('http').createServer(app);
var fs = require('fs');

const User = require("../models/user");
const UserRequest = require("../models/request");
const Group = require("../models/group");
const Notification = require("../models/notification");

router.get('/users', (req, res, next) => {
    User.find(function (err, users) {
        res.json(users);
    })
});

router.get('/requests', (req, res, next) => {
    UserRequest.find(function (err, users) {
        res.json(users);
    })
});

router.get('/profile/:userId/picture', function (req, res, next) {
    UserRequest.findById(req.params.userId, function (err, user) {
        if (err) return next(err);
        res.contentType(user.img.contentType);
        res.send(user.img.data);
    });
});

router.post('/register', (req, res, next) => {
    let newUser = new UserRequest({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
        occupation: req.body.occupation,
        email: req.body.email,
        username: req.body.username
    });
    newUser.save(err => {
        if (err) {
            res.json(err);
        }
        else {
            console.log(newUser);
            res.json({ success: true, msg: 'User Request send', user: newUser });
        }
    });
});

router.post('/addUser', (req, res, next) => {
    let newUser = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
        occupation: req.body.occupation,
        email: req.body.email,
        username: req.body.username,
        password: "x"
    });
    //newUser.img.data = fs.readFileSync(imgSrc);
    //newUser.img.contentType = 'image/png';
    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({ msg: 'Failed to add user' });
        }
        else {
            res.json({ success: true, msg: 'User Request send', user: newUser });
        }
    });
});

router.post('/addNotification', (req, res, next) => {
    let newNotification = new Notification({
        userID: req.body.userID,
        type: req.body.type,
        data: req.body.data
    });
    newNotification.save((err, notify) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(notify);
        }
    }); 
});

router.delete('/removeNotification/:id', (req, res, next) => {
    Notification.remove({ _id: req.params.id }, function (err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result)
        }
    });
});

router.get('/getNotification/:id', (req, res, next) => {
    Notification.find({ 'userID': req.params.id }, function (err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result)
        }
    });
});


router.put("/update/:id", (req, res, next) => {
    User.findById({ _id: req.params.id }, function (err, user) {
        if (err) {
            handleError(res, err.message, "Failed to update contact");
        } else {
            user.first_name = req.body.first_name;
            user.last_name = req.body.last_name;
            user.phone = req.body.phone;
            user.occupation = req.body.occupation;
            user.email = req.body.email;

            user.save(function (err, user) {
                if (err) {
                    res.json({ success: false, msg: 'Failed to update user detail' });
                }
                else {
                    res.json({ success: true, msg: 'Details changed Successfully', user: user });
                }
            })
        }
    });
});

router.put("/changePwd/:id", (req, res, next) => {
    const password = req.body.password;
    const new_password = req.body.new_password;
    console.log(password, new_password);
    User.findById({ _id: req.params.id }, function (err, user) {
        if (err) {
            handleError(res, err.message, "Failed to update contact");
        } else {
            User.comparePassword(password, user.password, (err, isMatch) => {
                if (err) throw err;
                if (isMatch) {
                    user.password = req.body.new_password;

                    User.addUser(user, (err, user) => {
                        if (err) {
                            res.json({ success:false, msg: 'Failed to change Password' });
                        }
                        else {
                            res.json({ success: true, msg: 'Password changed Successfully', user: user });
                        }
                    });
                } else {
                    return res.json({ success: false, msg: 'Wrong Password.. Please try again', user: user });
                }
            });
        }
    });
});

router.post('/addGroup/:id', (req, res, next) => {
    User.findOne({ '_id': req.params.id }, function (err, newAdmin) {
        if (err) {
            res.json({ msg: 'Failed to find id' });
            return next(err);
        }
        else {
            let newGroup = new Group({
                group_name: req.body.group_name,
                admin: newAdmin,
                client: req.body.client
            });
            newGroup.save((err, group) => {
                if (err) {
                    res.json(err);
                }
                else {
                    res.json(group);
                }
            });
        }
    });
});

router.post('/addClient/:id', (req, res, next) => {
    Group.findOne({ '_id': req.params.id }, function (err, findGroup) {
        if (err) {
            res.json({ msg: 'Failed to add client' });
            return next(err);
        }
        else {
            Group.update(
                { "_id": req.params.id },
                { "$push": { "client": req.body } },
                function (err, raw) {
                    if (err) return handleError(err);
                    res.json({ msg: 'New Client added successfully' });
                }
            );
        }
    });
});

router.post('/removeClient/:id', (req, res, next) => {
    Group.findOne({ '_id': req.params.id }, function (err, findGroup) {
        if (err) {
            res.json({ msg: 'Failed to find the group' });
            return next(err);
        }
        else {
            Group.update(
                { "_id": req.params.id },
                { "$pull": { "client": req.body } },
                function (err, raw) {
                    if (err) return handleError(err);
                    res.json({ msg: 'Client removed successfully' });
                }
            );
        }
    });
});

router.get('/groups', (req, res, next) => {
    Group.find(function (err, groups) {
        res.json(groups);
    })
});

router.get('/group/:id', (req, res, next) => {
    Group.findOne({ _id: req.params.id }, function (err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result)
        }
    });
});

router.delete('/user/:id', (req, res, next) => {
    User.remove({ _id: req.params.id }, function (err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result)
        }
    });
});

router.delete('/deleterequest/:id', (req, res, next) => {
    UserRequest.remove({ _id: req.params.id }, function (err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result)
        }
    });
});

router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({ success: false, msg: 'User not found' });
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign(user.toJSON(), config.secret, {
                    expiresIn: 604800  //1 week
                });

                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    user: {
                        id: user._id,
                        first_name: user.first_name,
                        last_name: user.last_name,
                        phone: user.phone,
                        occupation: user.occupation,
                        email: user.email,
                        username: user.username
                    }
                });
            } else {
                return res.json({ success: false, msg: 'Wrong Password' });
            }
        });
    });
});

router.get('/profile/:id', (req, res, next) => {
    User.findOne({ _id: req.params.id }, function (err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result)
        }
    });
});

module.exports = router;


/*
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});
*/
