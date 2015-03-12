var mongoose = require('mongoose');
var Schema   = mongoose.Schema;


var UserSchema = new Schema({
  email: { type: String},
  password: { type: String },
  nickname: { type: String },
  regdate: { type: Date, default: Date.now }
});

mongoose.model('User', UserSchema);