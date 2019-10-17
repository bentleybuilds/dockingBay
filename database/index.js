var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dockingbay');
var Faction = require('./faction.js')
var Ship = require('./ship.js');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});




var selectAllFactions = (cb) => {
  Faction.find({}, function(err, factions) {
    if(err) {
      cb(err, null);
    } else {
      cb(null, factions);
    }
  });
};

var selectAllShips = (faction, cb) => {
Ship.find({faction: faction},(err, ships)=>{
  if(err) {
    return cb(err,null);
  } else {
    return cb(null, ships)
  }
})
}
module.exports = {
  db,
  selectAllFactions,
  selectAllShips
};