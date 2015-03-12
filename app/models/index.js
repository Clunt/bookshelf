var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/bookshelf', function (err) {
  if (err) {
    console.error('connect to %s error: ', 'bookshelf', err.message);
    process.exit(1);
  }
});

// models
require('./user');
require('./tag');
require('./book');
require('./reply');

exports.User  = mongoose.model('User');
exports.Book  = mongoose.model('Book');
exports.Tag   = mongoose.model('Tag');
exports.Reply = mongoose.model('Reply');
