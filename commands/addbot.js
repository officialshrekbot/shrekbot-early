module.exports = {
    name: 'addbot',
    description: "addbot command http://shrekbot.tk/github",
    execute(message, args) {

        const Discord = require('discord.js');
        const { prefix, shrekColour, shrekUrl, shrekImgUrl, shrekAddUrl } = require('../conf.json')
        const { version } = require('../package.json')


        let aboutEmbed = new Discord.MessageEmbed()
            .setAuthor('shrek', `${shrekImgUrl}`, `${shrekUrl}`)
            .setColor(`${shrekColour}`)
            .setTitle('click here to add this bot to your server')
            .setURL(`${shrekAddUrl}`)
            //.addField('version:', `${version}`)
            //.addField('Website:', `${shrekUrl}`)

        message.channel.send(aboutEmbed).catch(e => console.log(e))

    }
}