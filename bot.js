const Discord = require('discord.js')
const client = new Discord.Client({ intents: 131071 })
const { botid, token } = require("./ayarlar.json")
const botOwnerID= '1088820894333423737'
require("./slash")(client)



client.on('message', msg => {
    if (msg.content === '!sil' && msg.author.id === botOwnerID){
        msg.channel.bulkDelete(25)
        .then(console.log)
        .catch(console.error);
    }
});

client.login("")