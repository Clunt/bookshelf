var models = require('../models');
var Tag = models.Tag;

exports.getTagByUTID = function (opt, callback) {
  Tag.findOne({
    user_id: uid,
    _id: tid
  }, callback);
};

exports.getTagsByUID = function (id, callback) {
  Tag.find({user_id: id}, callback);
};

exports.addTag = function (opt, callback) {
  var tag = new Tag();
  tag.title = opt.title;
  tag.user_id = opt.uid;
  tag.save(callback);
};

exports.updateTag = function (opt, callback) {
  Tag.findOne({
    user_id: opt.uid,
    _id: opt.tid
  }, function(err, Tag) {
    if (err || !Tag) {
      return callback(err);
    }
    Tag.title = opt.title;
    Tag.save(callback);
  });
};

exports.deleteTag = function (opt, callback) {
  Tag.remove({
    user_id: opt.uid,
    _id: opt.tid
  }, callback);
};