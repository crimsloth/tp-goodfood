const axios = require('axios');

function getAxiosAvecPromesse(type){
  axios.get(`http://localhost:8080/recettes?type=${type}`) // localhost/
  .then( response =>  {
    console.log(response.data);
  })
}


async function getAxiosAvecAsyncAwait(type){
  const response = await axios.get(`http://localhost:8080/recettes?type=${type}`)
  console.log(response.data)
} // retourne le type de recettes passé dans la props "type"

async function postAxiosAvecAsyncAwait(){
  const body = {
    data: 'lol'
  }
  const response = await axios.post(`http://localhost:8080/recettes/`, body)
  console.log(response.data)
}

postAxiosAvecAsyncAwait();