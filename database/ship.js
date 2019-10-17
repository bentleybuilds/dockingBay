const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var shipSchema = mongoose.Schema({
    name: String,
    xws: String,
    ffg: Number,
    size: String,
    dial: Array,
    faction: String,
    stats: Array,
    actions: Array,
    icon: String,
    pilots: Array,
  })
  
  var Ship = mongoose.model('Ship',shipSchema);

  module.exports = Ship;