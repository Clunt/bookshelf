var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var ObjectId = Schema.ObjectId;


var ShelfSchema = new Schema({
  content: { type: String },
  user_id: { type: ObjectId },
  book_id: { type: ObjectId },
  tags: { type: Array }
});

mongoose.model('Shelf', ShelfSchema);