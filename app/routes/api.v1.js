var express = require('express');
var sign    = require('../api/v1/sign');
var book    = require('../api/v1/book');

var account = require('../api/v1/account');
var shelf   = require('../api/v1/shelf');
var library = require('../api/v1/library');

var router = express.Router();

// Sign
router.post('/signup', sign.signup);
// Account
router.get('/account', account.info); // 获取 个人信息
router.post('/account/info', account.updateInfo); // 修改 个人信息
router.post('/account/password', account.updatePassword); // 修改 个人密码
// Books
router.post('/books/add', book.add); // 添加 书籍
router.get('/books/:id', book.info); // 获取 书籍信息
router.post('/books/:id/update', book.index); // 修改 书籍信息
router.get('/books/:id/reply', book.index); // 获取 书籍评论
router.post('/books/:id/reply', book.index); // 增加 书籍评论
// Shelf
router.get('/shelf', shelf.index); // 获取书架书籍
router.get('/shelf/:tag', shelf.index); // 获取书架某Tag书籍

// Tag
router.get('/tags/')
// Library
router.get('/library/:category', shelf.index); //
// Search
router.get('/search', function(req, res, next) {
  res.render('index', {title: 'GET /search?q=xxx'});
});

// router.post('/shelf', shelf.index); // 添加书籍 至书架
// router.post('/shelf/:tag', shelf.index); // 获取书架某Tag书籍
// router.post('/shelf/books/update', shelf.index); //
// router.post('/shelf/books/delete', shelf.index); //
// router.get('/shelf/labels/', shelf.index); //
// router.post('/shelf/labels/', shelf.index); //
// router.get('/shelf/labels/:id', shelf.index); //
// router.post('/shelf/labels/:id/update', shelf.index); //
// router.post('/shelf/labels/:id/delete', shelf.index); //

module.exports = router;
