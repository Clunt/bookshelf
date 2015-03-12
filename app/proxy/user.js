var models = require('../models');
var User   = models.User;

exports.getUserByEmail = function (email, callback) {
  User.findOne({email: email}, callback);
};

exports.addUser = function (opt, callback) {
  var user       = new User();
  user.email     = opt.email;
  user.password  = opt.password;
  user.nickname  = opt.nickname;
  user.save(callback);
};