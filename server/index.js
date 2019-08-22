const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

global.dbConnection = false

require('./models/index');

app.use(bodyParser.urlencoded({ extended: false }), () => {
  console.log('404')
});

app.get('/test', (req, res) => {
  let usersCollection = dbConnection.collection('users')
  usersCollection.find({
    // userId: message.author.id,
    // serverId: message.guild.id
  }).toArray(function (err, users) {
    console.log('USER : ', users)
  })
  // const name = req.query.name || 'World';
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