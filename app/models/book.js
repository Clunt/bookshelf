var mongoose = require('mongoose');
var Schema   = mongoose.Schema;


var BookSchema = new Schema({
  title: { type: String },
  author: { type: String },
  intro: { type: String },
  ISBN: { type: String },
  public_date: { type: String },
  reply_count: { type: Number, default: 0 }
});

mongoose.model('Book', BookSchema);
