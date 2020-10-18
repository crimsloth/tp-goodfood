var express = require('express');
var router = express.Router();

var recettes = require('./recettes.json');

/* GET home page. */


router.get('/', function(req, res) {
  const answer = {}
  const type = req.query.type;

  if (type == null) {
    answer.message = "Liste de toutes les recettes"
    answer.data = recettes;
  }
  else if (type == undefined || type == "") {
    const types = [];
    recettes.forEach(recette => {
      if(types.includes(recette.type)) return;
      else types.push(recette.type)
    })
    answer.message = "Liste des types disponibles"
    answer.data = types;
  } 
  else {
    const menuSemaine = recettes.filter(menu => menu.type == type);
    answer.message = `Liste avec type ${type}`
    answer.data = menuSemaine;
  }

  res.send(answer)

});

router.get('/:id', (req, res) => {
    const answer = {}
		const id = req.params.id;
		const identifiant = recettes.filter(menu => menu.id == id)
    answer.data = identifiant
    res.send(answer);
});

// TODO: ajouter une recette à la liste de recettes actives
router.post('/', (req,res) => {
  // req.body devrait contenir la nouvelle recette
  console.log(req.body);

  // on verifie que la recette dans body est bien defini

  // et ensuite, on la rajoute a la liste de recette actif

  res.send("do me oli")
})


// TODO: Supprimer la recette demandée par le id
router.delete('/:id', (req,res) => {
  //ID devrait etre le id de la recette quon veut suprimer 
  const id = req.params.id;

  // on s'assure que le ID est existant

  // on supprime la recette de la liste

  res.send("do me oli")
})



module.exports = router;
