var User = require('../../proxy').User;

exports.info = function(req, res, next) {
  User.getUserByID(req.session.user._id, function(err, user) {
    res.json(user);
  });
};

exports.updateInfo = function(req, res, next) {
  User.updateInfo(req.session.user._id, {
    nickname: req.body.nickname
  }, function(err) {
    if (err) {
      return res.send(err);
    }
    res.send('Update Info Success To: ' + req.body.nickname);
  });
};

exports.updatePassword = function(req, res, next) {
  User.updatePassword(req.session.user._id, req.body.password, function(err) {
    if (err) {
      return res.send(err);
    }
    res.send('Update Password Success To: ' + req.body.password);
  });
};