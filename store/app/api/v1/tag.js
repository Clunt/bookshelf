var Tag = require('../../proxy').Tag;


exports.tagInfo = function(req, res, next) {
  Tag.getTagByUTID({
    uid: req.session.user._id,
    tid: req.params.tag_id
  }, function(err, tag) {
    if (err) {
      return res.send('Error');
    }
    res.json(tag);
  });
};

exports.tagAdd = function(req, res, next) {
  Tag.addTag({
    uid: req.session.user._id,
    title: req.body.title
  }, function(err) {
    if (err) {
      return res.send('Error');
    }
    res.send('添加成功')
  });
};

exports.tagUpdate = function(req, res, next) {
  Tag.updateTag({
    uid: req.session.user._id,
    tid: req.params.tag_id,
    title: req.body.title
  }, function(err) {
    if (err) {
      return res.send('Error');
    }
    res.send('更新成功')
  });
};

exports.tagDelete = function(req, res, next) {
  Tag.deleteTag({
    uid: req.session.user._id,
    tid: req.params.tag_id
  }, function(err, rows) {
    if (err) {
      return res.send('Error');
    }
    if (1 === rows) {
      res.send('删除成功');
    } else {
      res.send('删除失败');
    }
  });
};
