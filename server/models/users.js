var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  pseudo: String,
  password: String
}, {
    versionKey: false
  });

userSchema.statics.findByPseudo = function (pseudo) {
  return this.model('Users').find({ pseudo: pseudo });
}

userSchema.statics.findById = function (id) {
  return this.model('Users').find({ _id: id });
}

module.exports = userSchema;