var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dockingbay');
var Faction = require('./faction.js')
var Ship = require('./ship.js');
var List = require('./list.js')

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

var addList = (user, name, faction, list, cb) => {
  List.create({user, name, faction, list},(err, list)=>{
    if(err) {
      return cb(err);
    } else {
      return cb(null, list)
    }
  })
}
module.exports = {
  db,
  selectAllFactions,
  selectAllShips,
  addList
};