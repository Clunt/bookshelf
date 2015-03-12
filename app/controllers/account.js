exports.show = function(req, res, next) {
  res.render('account/index');
};

exports.manage = function(req, res, next) {
  res.render('account/manage');
};