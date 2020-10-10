var express = require('express');
var router = express.Router();


const recettes = [
    {
        title:'oeuf matin',
        type:'dejeuner',
        description:'lorem ipsum...',
        tags:['facile',"20min"],
        // ....
    }
]

/* GET home page. */

router.get('/', function(req, res, next) {
  // TODO: return a list of all recettes depending on the params "type"
  const ans = {}
  const type = req.query.type;
  console.log(type)
  
  res.send(recettes);
});

router.get('/:id', (req, res) => {
    // TODO: return a single recette with id "req.params.id"
    const id = req.params.id;

    res.send('hello worlds');
  });


module.exports = router;
