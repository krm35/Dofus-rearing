var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var userSchema = mongoose.model('Users', require('../models/users.js'));
mongoose.connect('mongodb://localhost/dofus-rearing', { useNewUrlParser: true })

router.post('/subscribe', function (req, res, next) {
  userSchema.findByPseudo(req.body.pseudo)
    .then(user => {
      if (user.length === 0) {
        var user = new userSchema({
          pseudo: req.body.pseudo,
          password: req.body.password
        });
        user.save();
        res.send(user);
      }
      else {
        res.send(false);
      }
    })
    .catch(err => console.log('ERR', err))
});

router.post('/connexion', function (req, res, next) {
  userSchema.checkConnection(req.body.pseudo, req.body.password)
    .then(user => {
      if (user.length === 0) {
        res.send(false);
      }
      else {
        res.send(user);
      }
    })
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