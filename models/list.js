var mongoose = require('mongoose');

var listSchema = new mongoose.Schema({
  user: String,
  title: String,
  albums: [{type: Schema.Types.ObjectId, ref: 'Album'}],
  created: { type: Date, default: Date.now }
})

module.exports = mongoose.model('List', listSchema);