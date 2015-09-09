var Book = require('../proxy').Book;


exports.book = function(req, res, next) {
  var id = req.params.id;
  if (24 !== id.length) {
    return res.send('Book 不存在');
  }
  Book.getBookByID(id, function(err, book) {
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
  res.render('book/add');
};

exports.update = function(req, res, next) {
  var id = req.params.id;
  if (24 !== id.length) {
    return res.send('Book 不存在');
  }
  Book.getBookByID(id, function(err, book) {
    if (err) {
      next(err);
      return;
    }
    if (null === book) {
      return res.send('Book 不存在');
    }
    res.render('book/update', {
      book: book
    });
  });
};
