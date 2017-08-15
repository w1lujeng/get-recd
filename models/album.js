var mongoose = require('mongoose');

var albumSchema = new mongoose.Schema({
  title: String,
  thumb: String,
  url: String,
  api_id: String
});

module.exports = mongoose.model('Album', albumSchema);