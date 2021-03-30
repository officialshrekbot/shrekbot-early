module.exports = {
    name: 'coin',
    description: "coin command http://shrekbot.tk/github",
    execute(message, args) {

        const Discord = require('discord.js');
        message.reply(`:coin: you landed a ${["heads", "tails"][Math.floor(Math.random())]}`).catch(e => console.log(e))

    }
}