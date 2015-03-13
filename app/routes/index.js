var express = require('express');
var site    = require('../controllers/site');
var sign    = require('../controllers/sign');
var account = require('../controllers/account');
var shelf   = require('../controllers/shelf');
var library = require('../controllers/library');
var book    = require('../controllers/book');

var router = express.Router();

// 基本路由
router.get('/', site.index);
router.get('/signup', sign.signup);
router.get('/signin', sign.showSignin);
router.post('/signin', sign.signin);
router.get('/signout', sign.signout);

// Account
router.get('/account', account.show);
router.get('/account/manage', account.manage);
// Shelf
router.get('/shelf', shelf.index);
router.get('/shelf/:id', shelf.tag);
router.get('/shelf/manage', shelf.manage);
// Library
router.get('/library', library.index);
// Books
router.get('/books/add', book.add);
router.get('/books/:id', book.book);
router.get('/books/:id/update', book.update);

module.exports = router;