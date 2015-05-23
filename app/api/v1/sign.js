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