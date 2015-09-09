var mongoose = require('mongoose');
var Schema   = mongoose.Schema;


var UserSchema = new Schema({
  email: { type: String},
  password: { type: String },
  nickname: { type: String },
  create_at: { type: Date, default: Date.now }
});

mongoose.model('User', UserSchema);