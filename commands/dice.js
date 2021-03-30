module.exports = {
    name: 'dice',
    description: "dice command http://shrekbot.tk/github",
    execute(message, args) {

        const Discord = require('discord.js');
        message.reply(`you rolled a \`${Math.ceil(Math.random() * 6)}\``).catch(e => console.log(e))


    }
}