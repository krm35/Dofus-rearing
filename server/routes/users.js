var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var userSchema = mongoose.model('Users', require('../models/users.js'));
var cookies = require('./middlewares/cookies');
var bcrypt = require('bcrypt');
var util = require('util');

router.post('/subscribe', function (req, res, next) {
  userSchema.findByPseudo(req.body.pseudo)
    .then(user => {
      if (user && user.length === 0) {
        bcrypt.hash(req.body.password, 10, function (err, hash) {
          var newUser = new userSchema({
            pseudo: req.body.pseudo,
            password: hash
          });
          newUser.save();
          let cookie = cookies.create({ userId: newUser._id, pseudo: newUser.pseudo }, req, res)
          res.send(cookie);
        });

      }
      else {
        res.send(false);
      }
    })
    .catch(err => console.log('ERR', err))
});

router.post('/connexion', function (req, res, next) {
  userSchema.findByPseudo(req.body.pseudo)
    .then(user => {
      if (user && user.length === 1) {
        bcrypt.compare(req.body.password, user[0].password, function (err, same) {
          if (same) {
            let cookie = cookies.create({ userId: user[0]._id, pseudo: user[0].pseudo }, req, res)
            console.log('cookie created : ', cookie)
            res.send(cookie);
          }
          else {
            res.send(false)
          }
        });

      }
    })
    .catch(err => console.log('ERR', err))
});

router.get('/:id', function (req, res, next) {
  userSchema.findById(req.params.id)
    .then(user => {
      if (user.length === 1) {
        res.send(user);
      }
      else {
        res.send(false);
      }
    })
    .catch(err => console.log('ERR', err))
});

module.exports = router;