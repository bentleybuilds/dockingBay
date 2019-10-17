var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dockingbay');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var factionSchema = mongoose.Schema({
  name: String,
  xws: String,
  ffg: Number,
  icon: String
});

var Faction = mongoose.model('Faction', factionSchema);

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

var selectAllFactions = function(callback) {
  Faction.find({}, function(err, factions) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, factions);
    }
  });
};

var selectAllFactions = (cb)=>{
Ship.find({},(err, ships)=>{
  if(err) {
    cb(err,null);
  } else {
    cb(null, ships)
  }
})
}
module.exports = {
  Faction: Faction,
  Ship: Ship,
  selectAllFactions: selectAllFactions,
  selectAllShips: selectAllShips
};