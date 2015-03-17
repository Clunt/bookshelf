var Shelf = require('../../proxy').Shelf;


exports.index = function(req, res, next) {
  // var tag_id = req.params.
  res.send('index');
};

exports.shelfAdd = function(req, res, next) {
  var book_id = req.body.id;
  var opt = {
    uid: req.session.user._id,
    bid: book_id
  };
  Shelf.getBooksByBUID(opt, function(err, books) {
    if (err) {
      return res.send('Error');
    }
    if (0 === books.length) {
      Shelf.addBook(opt, function(err, rows) {
        if (err) {
          return res.send('添加失败');
        }
        res.send('添加成功');
      });
    } else {
      res.send('已经添加了')
    }
  });
};

exports.shelfUpdate = function(req, res, next) {
  var shelf_id = req.body.id;
  var content = req.body.content;
  var tags = req.body.tags;
  Shelf.updateBook({
    shelf_id: shelf_id,
    content: content,
    tags: tags
  }, function(err, rows) {
    if (err) {
      return res.send('更新失败');
    }
    res.send('更新成功');
  });
};

exports.shelfDelete = function(req, res, next) {
  Shelf.removeBook({
    uid: req.session.user._id,
    sid: req.body.id
  }, function(err, rows) {
    if (err) {
      return res.send('删除成功');
    }
    res.send('删除成功');
  });
};