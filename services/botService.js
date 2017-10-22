/* jshint esversion: 6 */
'use strict';


module.exports = {
    iniciarConexaoBot: () =>{
    return "Olá, o que vc deseja fazer?";
    },

    definirRetorno: (resposta) =>{
        switch (resposta) {
            case resposta.indexOf("boleto") !== -1:
                return "aqui está o link para baixar o boleto: <>";
        
            case resposta.indexOf("notas") !== -1:
                return "digite os seu RA conforme o exemplo: R.A.: xxxxxx";
            
            case resposta.indexOf("R.A.:") !== -1:
                return "ok,vamos entrar em contato depois,nao temos um banco de dados....";

            default:
                return "não entendemos o que vc digitou, tente de novo..";
        }
    }
};