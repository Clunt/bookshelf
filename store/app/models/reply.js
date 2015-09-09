var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var ObjectId = Schema.ObjectId;


var ReplySchema = new Schema({
  content: { type: String },
  user_id: { type: ObjectId },
  book_id: { type: ObjectId },
  create_at: { type: Date, default: Date.now }
});

mongoose.model('Reply', ReplySchema);
