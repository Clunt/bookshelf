var Book = require('../../proxy').Book;

exports.index = function(req, res, next) {
  res.render('book/index');
};

exports.info = function(req, res, next) {
  var id = req.params.id;
  if (24 !== id.length) {
    return res.send('Book 不存在');
  }
  Book.getBook(id, function(err, book) {
    if (err) {
      next(err);
      return;
    }
    if (null === book) {
      return res.send('Book 不存在');
    }
    res.json(book);
  });
};

exports.add = function(req, res, next) {
  Book.addBook({
    title: req.body.title
  }, function(err, data) {
    if (err) {
      res.send("添加失败");
    }
    res.send("添加成功");
  });
};

exports.update = function(req, res, next) {
  res.render('book/update');
  console.log(req.params.id);
};
