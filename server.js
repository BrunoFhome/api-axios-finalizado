const express = require('express');

const axios = require('axios');

const bodyParser = require('body-parser');

const app = express();


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', {});
});


app.post('/loadData', async (req, res) => {
    try {
        const url = "https://cep.awesomeapi.com.br/json/85050440"; // Exemplo de URL da API
        const response = await axios.get(url);
        const posts = response.data;
        console.log(posts)
        res.render('loaded', { posts });
    } catch (error) {
        console.error(error);
        res.send('Erro ao carregar dados.'); 
    }
});
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});