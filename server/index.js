const express = require('express');
const app = express();
const mongoose = require('mongoose');

global.dbConnection = false

require('./models/index');

app.post('/users/:id', (req, res) => {
  let userId = req.params.id ? req.params.id : ''
  let usersCollection = dbConnection.collection('users')
  usersCollection.find({
    userId
  }).toArray(function (err, users) {
    console.log('USER : ', users)
  })
});

app.listen(3001, () => {
  let url = "mongodb://localhost:27017/dofus-rearing"
  mongoose.connect('mongodb://localhost:27017/dofus-rearing')
  // var users = mongoose.model('Users')
  // var user = new users({ pseudo: "test", password: 'mdppwd' })
  // user.save()
  console.log('Server running : localhost:3001')
}
);