var express = require('express');
var sign    = require('../api/v1/sign');
var book    = require('../api/v1/book');

var account = require('../api/v1/account');
var shelf   = require('../api/v1/shelf');
var library = require('../api/v1/library');
var tag     = require('../api/v1/tag');
var router = express.Router();

// Sign
router.post('/signup', sign.signup);
// Account
router.get('/account', account.info); // 获取 个人信息
router.post('/account/info', account.updateInfo); // 修改 个人信息
router.post('/account/password', account.updatePassword); // 修改 个人密码
// Books
router.get('/books/:id', book.info); // 获取 书籍信息
router.post('/books/add', book.add); // 添加 书籍
router.post('/books/update', book.update); // 修改 书籍信息
router.get('/books/reply', book.index); // 获取 书籍评论
router.post('/books/reply', book.index); // 增加 书籍评论
// Shelf
router.get('/shelf', shelf.index); // 获取书架书籍
router.get('/shelf/:tag_id', shelf.index); // 获取书架某Tag书籍
router.post('/shelf/add', shelf.shelfAdd); // 获取书架书籍
router.post('/shelf/update', shelf.shelfUpdate); // 获取书架书籍
router.post('/shelf/delete', shelf.shelfDelete); // 获取书架书籍
// Tag
router.get('/tags', tag.tagInfo);
router.post('/tags/add', tag.tagAdd);
router.get('/tags/:tag_id', tag.tagInfo);
router.post('/tags/:tag_id/update', tag.tagUpdate);
router.post('/tags/:tag_id/delete', tag.tagDelete);
// Library
router.get('/library/:category', shelf.index); //
// Search
router.get('/search', function(req, res, next) {
  res.render('index', {title: 'GET /search?q=xxx'});
});


module.exports = router;
