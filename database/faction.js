const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var factionSchema = mongoose.Schema({
    name: String,
    xws: String,
    ffg: Number,
    icon: String
  });
  
  var Faction = mongoose.model('Faction', factionSchema);
  
  module.exports = Faction;
  