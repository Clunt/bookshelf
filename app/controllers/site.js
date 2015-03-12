exports.index = function(req, res, next) {
  console.log(req.session.user);
  res.render('index');
};