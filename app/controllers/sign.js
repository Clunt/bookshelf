var User = require('../proxy').User;


exports.signup = function (req, res, next) {
  res.render('sign/signup');
};

exports.showSignin = function (req, res, next) {
  res.render('sign/signin');
};

exports.signin = function (req, res, next) {
  var email = req.body.email;
  var password = req.body.password;
  var expires = req.body.expires;
  User.getUserByEmail(email, function (err, user) {
    if (err) {
      return next(err);
    }
    if (!user) {
      res.send('用户不存在');
      return;
    }
    req.session.user = user;
    var auth_token = user.email + '\t' + user.password;
    if ('on' === expires) {
      res.cookie('BSSS', auth_token, {path: '/', maxAge: 630720000000});// 20 Years
    } else {
      res.cookie('BSSS', auth_token, {path: '/'});
    }
    res.send('登陆成功');
  });
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
