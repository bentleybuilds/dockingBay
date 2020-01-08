var express = require('express');
var bodyParser = require('body-parser');
const db = require('../database/index.js');
const port = 8888
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

app.post('/lists/:user/:name/:faction/:list', function (req, res) {
  db.addList(req.params.user,req.params.name,req.params.faction, JSON.parse(req.params.list), function(err, data) {
    console.log('db.addList invoked')
      if(err) {
        res.sendStatus(500);
      } else {
        res.send(data)
      }
  })
})

app.listen(port, function() {
  console.log(`listening on port ${port}!`);
});

