const Discord = require('discord.js');
const fs = require('fs');
const conf = require('./conf.json')
const { shrekColour, shrekUrl, shrekImgUrl } = require('./conf.json')
const shrek = new Discord.Client();


//functions__
function addCmd(guild) {
    var data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
    data.totalCommandsSent++;
    data[guild].commandsSent++;
    fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
}
//___


shrek.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    shrek.commands.set(command.name, command);
}



shrek.on('ready', () => {
    console.log('shrek bot runing')
    console.log('made by 404invalid-user')
    console.log('website: shrekbot.tk')

    shrek.user.setActivity("| s>help")
    console.log(commandFiles)
console.log(`im in ${shrek.guilds.cache.size} guilds`)
})

client.on('message', message => {

    if (!message.guild) return;

    var data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

    var guild = data[message.guild.id];

    if (!guild) {
        data[message.guild.id] = {
            prefix: 's>',
            commandsSent: 0
        };

        guild = data[message.guild.id];
        fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
    }


    if (!message.content.toLowerCase().startsWith(guild.prefix) || message.author.bot) return;

    let args = message.content.toLowerCase().substring(guild.prefix.length).split(" ");


    if (!shrek.commands.has(args[0])) return;

    try {
        shrek.commands.get(args[0]).execute(message, args, client);
        addCmd(message.guild.id);
    } catch (error) {
        console.error(error);
        message.reply('there was an error with that command!');
    }


});


shrek.login(conf.token)
