/* jshint esversion: 6 */
'use strict';


module.exports = {
    iniciarConexaoBot: () =>{
    return "Olá, o que vc desejaq fazer?";
    },

    definirRetorno: (resposta) =>{
        switch (resposta) {
            case resposta.indexOf("boleto") !== -1:
                return "aqui está o link para baixar o boleto: <>";
        
            case resposta.indexOf("notas") !== -1:
                return "digite os seu RA conforme o exemplo: R.A.: xxxxxx";

            default:
                return "não entendemos o que vc digitou, tente de novo..";
        }
    }
};