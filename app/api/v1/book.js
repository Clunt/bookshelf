exports.book = function(req, res, next) {
  res.render('book/index');
};

exports.add = function(req, res, next) {
  res.render('book/add');
};

exports.update = function(req, res, next) {
  res.render('book/update');
  console.log(req.params.id);
};
