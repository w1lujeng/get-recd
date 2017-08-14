var mongoose = require('mongoose');


var albumSchema = new mongoose.Schema({
  title: String,
  thumb: String,
  uri: String
});

module.exports = mongoose.model('Album', albumSchema);