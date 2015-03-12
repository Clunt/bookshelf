var User = require('../proxy').User;


exports.signup = function (req, res, next) {
  res.render('sign/signup');
};

exports.signin = function (req, res, next) {
  res.render('sign/signin');
};

exports.signout = function (req, res, next) {
  var msg = '';
  if (req.session.user) {
    req.session.destroy();
    res.clearCookie('BSSS', {path: '/'});
    msg = "退出登录成功";
  } else {
    msg = "退出登录失败，您还未登录";
  }
  res.render('sign/signout', {
    PAGE_STATUS_MSG : msg
  });
};
