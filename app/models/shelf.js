var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var ObjectId = Schema.ObjectId;


var ShelfSchema = new Schema({
  content: { type: String },
  tag_id: { type: ObjectId },
  book_id: { type: ObjectId }
});

mongoose.model('Shelf', ShelfSchema);
