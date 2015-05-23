var models = require('../models');
var Book = models.Book;

exports.getBookByID = function (id, callback) {
  Book.findOne({_id: id}, callback);
};

exports.getBooks = function (opt, callback) {
  Book.find(callback);
};

exports.addBook = function (opt, callback) {
  var book = new Book();
  book.title = opt.title;
  book.author = opt.author;
  book.intro = opt.intro;
  book.ISBN = opt.ISBN;
  book.status = opt.status;
  book.public_date = opt.public_date;
  book.save(callback);
};

exports.updateBook = function (opt, callback) {
  Book.findOne({_id: opt.id}, function(err, book) {
    if (err || !book) {
      return callback(err);
    }
    book.title = opt.title;
    book.author = opt.author;
    book.intro = opt.intro;
    book.ISBN = opt.ISBN;
    book.status = opt.status;
    book.public_date = opt.public_date;
    book.save(callback);
  });
};