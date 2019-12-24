const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var listSchema = mongoose.Schema({
    user: String,
    name: String,
    faction: String,
    list: Array
  });
  
  var List = mongoose.model('List', listSchema);
  
  module.exports = List;