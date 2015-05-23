var Tag = require('../proxy').Tag;
var Shelf = require('../proxy').Shelf;


exports.index = function(req, res, next) {
  var tag_id = req.params.tag_id;
  var getBooks = tag_id === undefined ? Shelf.getBooksByUID : Shelf.getBooksByTUID;
  getBooks({
    uid: req.session.user._id,
    tid: tag_id
  }, function(err, books) {
    if (err) {
      return res.send('Error');
    }
    res.render('shelf/index', {
      books: books
    });
  });
};

exports.shelfUpdate = function(req, res, next) {
  var shelf_id = req.params.shelf_id;
  Shelf.getShelfByID(shelf_id, function(err, shelf) {
    if (err) {
      return res.send('err');
    }
    if (!shelf) {
      return res.send('不存在')
    }
    Tag.getTagsByUID(req.session.user._id, function(err, tags) {
      if (err) {
        res.send('Error');
      }
      for (var i = 0; i < tags.length; i++) {
        tags[i].checked = shelf.tags.indexOf(tags[i]['_id']) < 0 ? false : true;
      }
      res.render('shelf/shelf_update', {
        shelf_id: shelf_id,
        shelf: shelf,
        tags: tags
      });
    });
  });
};

exports.manage = function(req, res, next) {
  Tag.getTagsByUID(req.session.user._id, function(err, tags) {
    if (err) {
      res.send('Error');
    }
    res.render('shelf/manage', {
      tags: tags
    });
  });
};

exports.manageTagInfo = function(req, res, next) {
  var tag_id = req.params.tag_id;
  Tag.getTagByUTID({
    uid: req.session.user._id,
    tid: tag_id
  }, function(err, tag) {
    if (err) {
      res.send('Error');
    }
    res.json(tag);
    // res.render('shelf/tag');
  });
};

exports.manageTagAdd = function(req, res, next) {
  res.render('shelf/tag_add');
};

exports.manageTagUpdate = function(req, res, next) {
  var tag_id = req.params.tag_id;
  res.render('shelf/tag_update', {
    tag_id: tag_id
  });
};

