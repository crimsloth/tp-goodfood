var express = require('express');
var router = express.Router();

var recettes = require('./recettes.json');

/* GET home page. */


router.get('/', function(req, res) {
  const ans = {}
  const type = req.query.type;
  console.log(recettes);
  
  res.send(recettes);
});

//! comment afficher toute les types disponibles dans le array? {dejeuner, souper}
// router.get('/type', function(req, res) {
//   const ans = {} //! sert a quoi?
//   const type = recettes.reduce( type => )
//   console.log(type);
  
//   res.send(recettes);
// });

router.get('/type/:type', (req, res) => {
	const type = req.params.type;
	const menuSemaine = recettes.filter(menu => menu.type == type);
	console.log(menuSemaine);
  res.send("Les recettes du type " + type + " sont: " + menuSemaine);
});

router.get('/:id', (req, res) => {
		const id = req.params.id;
		const identifiant = recettes.filter(menu => menu.id == id)

    res.send("La recette numero " + id + " est:" + identifiant);
  });

module.exports = router;
