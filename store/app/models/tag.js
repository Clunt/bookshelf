var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var ObjectId = Schema.ObjectId;


var TagSchema = new Schema({
  title: { type: String },
  user_id: { type: ObjectId }
});

mongoose.model('Tag', TagSchema);
