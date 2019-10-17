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




var selectAllFactions = function(callback) {
  Faction.find({}, function(err, factions) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, factions);
    }
  });
};

var selectAllShips = (cb)=>{
Ship.find({},(err, ships)=>{
  if(err) {
    cb(err,null);
  } else {
    cb(null, ships)
  }
})
}
module.exports = {
  selectAllFactions,
  selectAllShips
};