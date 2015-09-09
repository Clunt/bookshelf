var models = require('../models');
var Shelf = models.Shelf;

exports.getShelfByID = function (id, callback) {
  Shelf.findOne({_id: id}, callback);
};

exports.getBooksByUID = function (opt, callback) {
  Shelf.find({
    user_id: opt.uid
  }, callback);
};

exports.getBooksByTUID = function (opt, callback) {
  Shelf.find({
    user_id: opt.uid,
    tags: opt.tid
  }, callback);
};

exports.getBooksByBUID = function (opt, callback) {
  Shelf.find({
    user_id: opt.uid,
    book_id: opt.bid
  }, callback);
};

exports.addBook = function (opt, callback) {
  var shelf = new Shelf();
  shelf.user_id = opt.uid;
  shelf.book_id = opt.bid;
  shelf.save(callback);
};

exports.removeBook = function (opt, callback) {
  Shelf.remove({
    user_id: opt.uid,
    _id: opt.sid
  }, callback);
};

exports.updateBook = function (opt, callback) {
  Shelf.findOne({
    _id: opt.shelf_id
  }, function(err, shelf) {
    if (err || !shelf) {
      return callback(err);
    }
    shelf.content = opt.content;
    shelf.tags = opt.tags;
    shelf.save(callback);
  });
};