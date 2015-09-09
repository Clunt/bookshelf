var express      = require('express');
var path         = require('path');
var favicon      = require('serve-favicon');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var bodyParser   = require('body-parser');

var auth = require('./middlewares/auth')
var app = express();

// 设置模板引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// 应用基本配置
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// Session
app.use(session({
  secret: 'bookshelf',
  resave: true,
  saveUninitialized: true
}));
// 配置静态资源
app.use('/static', express.static(path.join(__dirname, 'static')));
// 配置路由
app.use('/', auth.authLogin, require('./routes/index'));
app.use('/api/v1', auth.authLogin, require('./routes/api.v1'));
// 错误处理
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
// 监听端口
app.listen(3000, function () {
  console.log('服务器已经运行，端口3000');
});