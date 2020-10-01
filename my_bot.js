const Discord = require('discord.js');
const client = new Discord.Client();
const prefix='-';
client.once('ready', () =>{
    console.log("Connected as " + client.user.tag)
    client.user.setActivity("Youtube", {type:"WATCHING"})
   /* client.guilds.cache.forEach((guild) => {
        console.log(guild.name)
        guild.channels.cache.forEach((channel) => {
            console.log(`- ${channel.name} ${channel.type} ${channel.id}`)
        });
    });
    var generalChannel = client.channels.cache.get("client name")
    generalChannel.send('Hello, world!!')*/
});
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong!')
    }
    else if(command === 'hi'){
        message.channel.send('Welcome, How can I help you??')
    }
    else if(command === 'gyan'){
        message.channel.send('He is strong')
    }
    else if(command === 'shizuka'){
        message.channel.send('She is  cute')
    }
    else if(command === 'neymar'){
        message.channel.send('Don`t take my name...I will kick')
    }
}) 

client.login('token')
