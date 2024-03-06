const getData = require('../controllers/getData');

const express = require('express');
const router = express.Router();

router.get('/cnpj/getcnpj/:cnpj', (req, res) => {
    getData.iniciar(req, res); // Executa a função iniciar apenas quando a rota for acessada
});


module.exports = router;