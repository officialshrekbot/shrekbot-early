module.exports = {
    name: 'ping',
    description: "sends bots ping",
    execute(message, args, client) {

        const Discord = require('discord.js');

        message.channel.send("Pinging...").then(m => {
            var ping = m.createdTimestamp - message.createdTimestamp;
            var apiPing = Math.round(client.ws.ping)
            m.edit(`ping: \`${ping}\` | api ping: \`${apiPing}\`.`).catch(e => console.log(e))
        });
    }
}
