var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var ObjectId = Schema.ObjectId;


var BookperSchema = new Schema({
  content: { type: String },
  tag_id: { type: ObjectId },
  book_id: { type: ObjectId }
});

mongoose.model('Bookper', BookperSchema);
