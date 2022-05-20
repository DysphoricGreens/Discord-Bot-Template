const express = require('express');
const server = express();
const clc = require("cli-color");

server.use(express.static(__dirname + '/public'));

function keepAlive() {
    server.listen(4678, () => {
        const Discord = require("discord.js")
        console.log(`[ ${clc.green.bold("SUCCESS")} ] Hosting Server Loaded...`);
    });
}
module.exports = keepAlive;
