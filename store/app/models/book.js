var mongoose = require('mongoose');
var Schema   = mongoose.Schema;


var BookSchema = new Schema({
  title: { type: String },
  author: { type: String, default: '' },
  intro: { type: String, default: '' },
  ISBN: { type: String, default: '' },
  status: { type: Number, default: 1 },
  public_date: { type: Number, default: 0 },
  reply_count: { type: Number, default: 0 }
});

mongoose.model('Book', BookSchema);
