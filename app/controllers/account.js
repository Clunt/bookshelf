var User = require('../proxy').User;

exports.show = function(req, res, next) {
  User.getUserByID(req.session.user._id, function(err, user) {
    res.render('account/index', {
      nickname: user.nickname,
      password: user.password,
      email: user.email,
      create_at: user.create_at
    });
  });
};

exports.manage = function(req, res, next) {
  res.render('account/manage');
};