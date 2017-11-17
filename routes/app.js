/* jshint esversion: 6 */
const express = require('express');
const router = express.Router();
const service = require('../services/botService');


router.get('/', function(req, res) {
 res.send(service.iniciarConexaoBot()).status(200);
});

router.post('/', function(req,res){
    var mensagem = req.body.mensagem;
    console.log(mensagem)
res.send(service.definirRetorno(mensagem)).status(200);
});

module.exports = router;
