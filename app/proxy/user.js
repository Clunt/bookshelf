var models = require('../models');
var User   = models.User;

exports.getUserByID = function(id, callback) {
  User.findOne({_id: id}, callback);
};

exports.getUserByEmail = function(email, callback) {
  User.findOne({email: email}, callback);
};

exports.updateInfo = function(id, opt, callback) {
  User.findOne({_id: id}, function(err, user) {
    if (err || !user) {
      return callback(err);
    }
    user.nickname = opt.nickname;
    user.save(callback);
  });
};

exports.updatePassword = function(id, password, callback) {
  User.findOne({_id: id}, function(err, user) {
    if (err || !user) {
      return callback(err);
    }
    user.password = password;
    user.save(callback);
  });
};

exports.addUser = function(opt, callback) {
  var user       = new User();
  user.email     = opt.email;
  user.password  = opt.password;
  user.nickname  = opt.nickname;
  user.save(callback);
};