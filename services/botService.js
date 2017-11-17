/* jshint esversion: 6 */
'use strict';


module.exports = {
    iniciarConexaoBot: () =>{
    return "Olá, o que vc deseja fazer?";
    },

    definirRetorno: (resposta) =>{

        if(resposta.indexOf("boleto") !== -1){
            return "aqui está o link para baixar o boleto: <>";
        }
        else if (resposta.indexOf("nota") !== -1){
            return "digite os seu RA conforme o exemplo: R.A.: xxxxxx";
        }
        else if (resposta.indexOf("R.A.:") !== -1){
            return "ok,vamos entrar em contato depois,nao temos um banco de dados....";
        }
        else {
            return "não entendemos o que vc digitou, tente de novo..";
        }
    }
};