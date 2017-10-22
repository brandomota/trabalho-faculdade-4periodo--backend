/* jshint esversion: 6 */
const express = require('express');
const router = express.Router();
const service = require('../services/botService');


router.get('/', function(req, res) {
 res.send(service.iniciarConexaoBot()).status(200);
});

router.post('/', function(req,res){
res.send(service.definirRetorno()).status(200);
});

module.exports = router;
