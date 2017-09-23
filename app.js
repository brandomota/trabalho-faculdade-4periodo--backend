'use script';
/* jshint esversion: 6 */

import callback_api from 'amqplib';
const botService = require("services/botService");

callback_api.connect("amqp://localhost", (err, connect) => {
    connect.createChannel((err, channel) => {
        var q = "entrada_front";

        channel.assertQueue(q, {
            durable: true
        });
        channel.prefetch(1);


        channel.consume(q, function (msg) {
            var secs = msg.content.toString().split('.').length - 1;

            botService.definirMensagemRetorno(msg.content)
                .then(() => {
                    channel.ack(msg);
                })
                .catch(() =>{
                    channel.nack(msg);
                });
        });
    });

});