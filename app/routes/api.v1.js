var express = require('express');
var sign    = require('../api/v1/sign');
var account = require('../api/v1/account');
var shelf   = require('../api/v1/shelf');
var library = require('../api/v1/library');
var book    = require('../api/v1/book');

var router = express.Router();


router.post('/signup', sign.signup);
router.post('/signin', sign.signin);



router.get('/account', function(req, res, next) {
  res.render('index', {title: 'GET /account'});
});
router.post('/account/info', function(req, res, next) {
  res.render('index', {title: 'POST /account/info'});
});
router.post('/account/password', function(req, res, next) {
  res.render('index', {title: 'POST /account/password'});
});
router.get('/shelf/books/:id', function(req, res, next) {
  res.render('index', {title: 'GET /shelf/books/:id'});
});
router.post('/shelf/books/', function(req, res, next) {
  res.render('index', {title: 'POST /shelf/books/'});
});
router.post('/shelf/books/update', function(req, res, next) {
  res.render('index', {title: 'POST /shelf/books/update'});
});
router.post('/shelf/books/delete', function(req, res, next) {
  res.render('index', {title: 'POST /shelf/books/delete'});
});
router.get('/shelf/labels/', function(req, res, next) {
  res.render('index', {title: 'GET /shelf/labels/'});
});
router.post('/shelf/labels/', function(req, res, next) {
  res.render('index', {title: 'POST /shelf/labels/'});
});
router.get('/shelf/labels/:id', function(req, res, next) {
  res.render('index', {title: 'GET /shelf/labels/:id'});
});
router.post('/shelf/labels/:id/update', function(req, res, next) {
  res.render('index', {title: 'POST /shelf/labels/:id/update'});
});
router.post('/shelf/labels/:id/delete', function(req, res, next) {
  res.render('index', {title: 'POST /shelf/labels/:id/delete'});
});
router.get('/library/:category', function(req, res, next) {
  res.render('index', {title: 'GET /library/:category'});
});
router.post('/books/', function(req, res, next) {
  res.render('index', {title: 'POST /books/'});
});
router.get('/books/:id', function(req, res, next) {
  res.render('index', {title: 'GET /books/:id'});
});
router.post('/books/:id/update', function(req, res, next) {
  res.render('index', {title: 'POST /books/:id/update'});
});
router.post('/books/:id/reply', function(req, res, next) {
  res.render('index', {title: 'POST /books/:id/reply'});
});
router.get('/search', function(req, res, next) {
  res.render('index', {title: 'GET /search?q=xxx'});
});

module.exports = router;
