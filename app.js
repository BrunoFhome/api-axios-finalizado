const axios = require('axios');
// URL da API que queremos acessar
const url = 'https://jsonplaceholder.typicode.com/todos/1';
axios.get(url)
.then(response => {
// Tratamento bem-sucedido da resposta
console.log(response.data);
})
.catch(error => {
// Tratamento de erro
console.error(`Erro ao acessar a API: ${error}`);
});

