const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json')

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    if(!(message.content.toLowerCase().includes('pog')||message.author.bot)){
        message.reply(" that wasn't very pog of you.")
        message.delete();
    }
})

client.on('messageUpdate', (oldMessage, message) => {
    if(!(message.content.toLowerCase().includes('pog')||message.author.bot)){
        message.reply(" that wasn't very pog of you.")
        message.delete();
    }
})

client.login(process.env.BOT_TOKEN);