var Tag = require('../../proxy').Tag;


exports.tagInfo = function(req, res, next) {
  Tag.Tag({
    uid: req.session.user._id,
    title: req.body.title
  }, function(err) {
    if (err) {
      return res.send('Error');
    }
    res.send('添加成功')
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
    tid: req.body.id,
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
    tid: req.body.id
  }, function(err) {
    if (err) {
      return res.send('Error');
    }
    res.send('更新成功')
  });
};
