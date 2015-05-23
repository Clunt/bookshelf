var Book = require('../proxy').Book;

exports.index = function(req, res, next) {
  Book.getBooks({}, function(err, books) {
    res.render('library/index', {
      books: books
    });
  });
};