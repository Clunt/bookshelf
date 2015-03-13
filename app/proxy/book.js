var models = require('../models');
var Book = models.Book;

exports.getBook = function (id, callback) {
  Book.findOne({_id: id}, callback);
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