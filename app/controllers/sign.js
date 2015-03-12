exports.signup = function (req, res, next) {
  res.render('sign/signup');
};

exports.signin = function (req, res, next) {
  res.render('sign/signin');
};

exports.signout = function (req, res, next) {
  res.render('sign/signout');
};
