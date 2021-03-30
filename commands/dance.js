module.exports = {
    name: 'dance',
    description: "dance command http://shrekbot.tk/github",
    execute(message, args) {

        const Discord = require('discord.js');
        const { prefix, shrekColour, shrekUrl, shrekImgUrl } = require('../conf.json')

        //command
        let shrekDanceEmbed = new Discord.MessageEmbed()
            .setAuthor('shrek', `${shrekImgUrl}`, `${shrekUrl}`)
            .setColor(`${shrekColour}`)
            .setImage('https://tenor.com/view/shrek-dancing-dance-weird-gif-17345848')
        message.channel.send(shrekDanceEmbed).catch(e => console.log(e))

    }
}