var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var ObjectId = Schema.ObjectId;


var TagSchema = new Schema({
  title: { type: String },
  content: { type: String },
  user_id: { type: ObjectId },
  book_id: { type: ObjectId },
  create_at: { type: Date, default: Date.now }
});

mongoose.model('Tag', TagSchema);
