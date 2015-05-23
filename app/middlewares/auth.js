var User = require('../proxy').User;


exports.authLogin = function(req, res, next) {
  if (req.session.user) {
    // 登录状态
    next();
  } else {
    // 未登录
    var cookies = req.cookies['BSSS'];
    if (!cookies) {
      return next();
    }
    var auth  = cookies.split('\t');
    User.getUserByEmail(auth[0], function (err, user) {
      if (!err && 'undefined' !== user) {
        req.session.user = user;
      }
      next();
    });
  }
};