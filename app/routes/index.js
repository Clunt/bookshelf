var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/account', function(req, res, next) {
  res.render('index', { title: 'account' });
});
router.get('/account/manage', function(req, res, next) {
  res.render('index', { title: 'account manage' });
});
router.get('/shelf/', function(req, res, next) {
  res.render('index', { title: 'shelf' });
});
router.get('/shelf/:id', function(req, res, next) {
  res.render('index', { title: 'shelf ' + req.params.id });
});
router.get('/shelf/manage', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/library/', function(req, res, next) {
  res.render('index', { title: 'library' });
});
router.get('/library/:id', function(req, res, next) {
  res.render('index', { title: 'library ' + req.params.id });
});
router.get('/books/', function(req, res, next) {
  res.render('index', { title: 'books' });
});
router.get('/books/:id', function(req, res, next) {
  res.render('index', { title: 'books ' + req.params.id });
});
router.get('/books/:id/update', function(req, res, next) {
  res.render('index', { title: 'books ' + req.params.id + ' update' });
});

module.exports = router;