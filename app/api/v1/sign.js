var User = require('../../proxy').User;


exports.signup = function (req, res, next) {
  var email = req.body.email;
  var password = req.body.password;
  User.getUserByEmail(email, function (err, user) {
    if (err) {
      return next(err);
    }
    if (users.length > 0) {
      res.send('用户名或邮箱已被使用。');
      return;
    }
    User.addUser({
      email: email,
      password: password,
      nickname: email
    }, function (err) {
      if (err) {
        return next(err);
      }
      res.send('注册成功');
    });
  });
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




