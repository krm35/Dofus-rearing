var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
    pseudo: String,
    password: String,
}, {
        versionKey: false
    });

usersSchema.methods.findUser = (...args) => {
    console.log('find user args : ', args)
    console.log('find user args length : ', args.length)
    // return this.model('users').find({
    //     pseudo :,
    //     password
    // })
}

mongoose.model('Users', usersSchema)