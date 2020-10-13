var express = require('express');
var router = express.Router();

var dejeuner = require('./list/dejeuner.json');
// var souper = require('./souper');

/* GET home page. */


router.get('/', function(req, res, next) {
  // TODO: return a list of all recettes depending on the params "type"
  const ans = {}
  const type = req.query.type;
  console.log(dejeuner);
  
  res.send(dejeuner);
  // res.send('The type is ' + req.params.type);
});

//! faire les filters

// /recettes/type/souper
router.get('/type/:type', (req, res) => {
  // 'req' means request
  // TODO: return all recettes of type "req.params.type"
  const type = req.params.type;

  // 'res' means response
  res.send("Le type recu est: " + type);
});

// /recettes/42
router.get('/:id', (req, res) => {
    // TODO: return a single recette with id "req.params.id"
    const id = req.params.id;

    res.send('olilo');
  });

module.exports = router;
