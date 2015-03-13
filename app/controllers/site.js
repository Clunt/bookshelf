exports.index = function(req, res, next) {
  var login = req.session.user ? req.session.user.nickname : '未登录';
  res.render('index', {
    login: login
  });
};