var Tag = require('../proxy').Tag;

exports.index = function(req, res, next) {
  res.render('shelf/index');
};

exports.indexTag = function(req, res, next) {
  var tag_id = req.params.tag_id;
  res.render('shelf/index');
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
  Tag.getTagsByQuery({
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

