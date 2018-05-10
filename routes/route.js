const express = require('express');
const router = express.Router();
const passport = require('passport');
require('./../config/passport')(passport);
const jwt = require('jsonwebtoken');
const config = require('../config/database');
var app = express();
var server = require('http').createServer(app);


const User = require("../models/user");
const UserRequest = require("../models/request");
const Group = require("../models/group");
var Chat = require('../models/Chat.js');



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

router.post('/register', (req, res, next) => {
    let newUser = new UserRequest({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
        occupation: req.body.occupation,
        email: req.body.email,
        username: req.body.username
    });
    console.log(newUser);
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

    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({ msg: 'Failed to add user' });
        }
        else {
            res.json({ success: true, msg: 'User Request send', user: newUser });
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
                    res.json({ msg: 'Failed to update user detail' });
                }
                else {
                    res.json(user);
                }
            })
        }
    });
});

router.put("/changePwd/:id", (req, res, next) => {
    const password = req.body.password;
    const new_password = req.body.new_password;
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
                            res.json({ msg: 'Failed to change Password' });
                        }
                        else {
                            res.json({ success: true, msg: 'Password changed', user: user });
                        }
                    });
                } else {
                    return res.json({ success: false, msg: 'Wrong Password', user: user });
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
    models.User.findOne({ '_id': req.params.id }, function (err, newClient) {
        if (err) {
            res.json({ msg: 'Failed to add client' });
            return next(err);
        }
        else {
            group.clients.push(newClient);
            res.json({ msg: 'New Client added successfully' });
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
