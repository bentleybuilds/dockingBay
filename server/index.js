var express = require('express');
var bodyParser = require('body-parser');
// var items = require('../database');
const db = require('../database/index.js');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../react-client/dist'));


app.get('/factions', function (req, res) {
  db.selectAllFactions(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.get('/ships/:faction', function (req, res) {
  console.log(req.params.faction)
  db.selectAllShips(req.params.faction, function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

