/* jshint esversion: 6 */
'use strict';
const amqp = require('amqplib/callback_api');

const identificarPalavraChave = (mensagemRecebida) => {
    switch (mensagemRecebida) {
        case (mensagemRecebida.contains("pagar") && (mensagemRecebida.contains("boleto"))):
            return "pague seu boleto baixando-o por esse link: http://exemplo.com";
        
        case (mensagemRecebida.contains("R.A.:")):
            return "olá,aluno! o que você deseja fazer?";

        default:
            return "não entendi o que vc quis dizer, fala de novo?";
    }
};

const enviarMensagemParausuario = (mesg) => {

};

module.exports = {
    definirMensagemRetorno: (mensagemRecebida) => {
        return new Promise((resolve, reject) => {
            let mesg  = identificarPalavraChave(mensagemRecebida);
            enviarMensagemParausuario(mesg).then( () => {
                resolve();
            })
            .catch( () => {

            });
          
    });
    }
};