var express = require('express');
var bodyParser = require('body-parser');
// var items = require('../database');
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

app.post('/lists', function (req, res) {
  db.addList(req.body.user,req.body.name,req.body.faction, req.body.list, function(err, data) {
    console.log('db.addList invoked')
      if(err) {
        res.sendStatus(500);
      } else {
        console.log(`${data}`)
        res.send(data)
      }
  })
})

app.listen(port, function() {
  console.log(`listening on port ${port}!`);
});

