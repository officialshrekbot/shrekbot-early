module.exports = {
    name: 'atthebot',
    description: "when you at the bot http://shrekbot.tk/github",
    execute(message, args) {

        const fs = require('fs');
        const Discord = require('discord.js');
        const conf = require('../conf.json')

        var data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
        var guild = data[message.guild.id];
        var prefix = guild.prefix

        let atBotEmbed = new Discord.MessageEmbed()
            .setAuthor('shrek', `${conf.shrekImgUrl}`, `${conf.shrekUrl}`)
            .setColor(`${conf.shrekColour}`)
            .setDescription(`my prefix for this server is \`${prefix}\`\ndo \`${prefix}help\` for help menu`)
        message.channel.send(atBotEmbed).cache(e => console.log(e))
    }
}