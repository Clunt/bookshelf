var express = require('express');
var router = express.Router();

router.get('/account', function(req, res, next) {
  res.render('index', {title: '/account'});
});
router.post('/account/info', function(req, res, next) {
  res.render('index', {title: '/account/info'});
});
router.post('/account/password', function(req, res, next) {
  res.render('index', {title: '/account/password'});
});
router.get('/shelf/books/:id', function(req, res, next) {
  res.render('index', {title: '/shelf/books/:id'});
});
router.post('/shelf/books/', function(req, res, next) {
  res.render('index', {title: '/shelf/books/'});
});
router.post('/shelf/books/update', function(req, res, next) {
  res.render('index', {title: '/shelf/books/update'});
});
router.post('/shelf/books/delete', function(req, res, next) {
  res.render('index', {title: '/shelf/books/delete'});
});
router.get('/shelf/labels/', function(req, res, next) {
  res.render('index', {title: '/shelf/labels/'});
});
router.post('/shelf/labels/', function(req, res, next) {
  res.render('index', {title: '/shelf/labels/'});
});
router.get('/shelf/labels/:id', function(req, res, next) {
  res.render('index', {title: '/shelf/labels/:id'});
});
router.post('/shelf/labels/:id/update', function(req, res, next) {
  res.render('index', {title: '/shelf/labels/:id/update'});
});
router.post('/shelf/labels/:id/delete', function(req, res, next) {
  res.render('index', {title: '/shelf/labels/:id/delete'});
});
router.get('/library/:category', function(req, res, next) {
  res.render('index', {title: '/library/:category'});
});
router.post('/books/', function(req, res, next) {
  res.render('index', {title: '/books/'});
});
router.get('/books/:id', function(req, res, next) {
  res.render('index', {title: '/books/:id'});
});
router.post('/books/:id/update', function(req, res, next) {
  res.render('index', {title: '/books/:id/update'});
});
router.post('/books/:id/reply', function(req, res, next) {
  res.render('index', {title: '/books/:id/reply'});
});
router.get('/search', function(req, res, next) {
  res.render('index', {title: '/search?q=xxx'});
});

module.exports = router;
