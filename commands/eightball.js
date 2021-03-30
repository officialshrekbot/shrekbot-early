module.exports = {
    name: '8ball',
    description: "eightball command http://shrekbot.tk/github",
    execute(message, args) {

        const Discord = require('discord.js');
        const { prefix, shrekColour, shrekUrl, shrekImgUrl } = require('../conf.json')

        if (!args[1]) return message.reply("you need to ask something");
        if (args[1]) {
            function randome(no) {
                return Math.floor(Math.random() * no);
            }

            var yes = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes – definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes."]
            var dontKnow = ["Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again."]
            var no = ["Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."]


            var randomeAnswers = [yes, dontKnow, no][randome(3)]

            message.reply(`${randomeAnswers[randome(randomeAnswers.length)]}`).catch(e => console.log(e))
        }
    }
}