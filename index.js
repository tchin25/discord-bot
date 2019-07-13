//Program starts here

//Required to access discord
const Discord = require('discord.js');
//Required to access database
const Database = require('./database.js');
//Required to make REST calls
const Fetch = require('node-fetch');
//Required to login to bot
const Keys = require('./keys.js');

const bot = new Discord.Client();
const token = Keys.token;

const version = '1.0.1';
const PREFIX = '`';

bot.on('ready', () => {
    console.log('This bot is online!');
})


bot.on('message', message => {
    let content = message.content.substring(PREFIX.length);
    let args = content.split(" ");
    //If message starts with prefix and doesn't have any prefix errors
    if (message.content.substring(0, PREFIX.length) == PREFIX && content.split("").every(checkPrefix)){
        console.log(args)
        switch(args[0]){
            case 'version':
                message.reply(version);
            break;
            case 'id':
                message.reply(message.author.id);
            break;
            case 'sweta':
                let channel = message.channel;
                let string = '';
                if(args[1]){
                    string += args[1];
                }
                channel.send(string + ' tfti');
            break;
            default:
                message.reply('Command not recognized');
            break;
        }
    }
})

function checkPrefix(char){
    return char != PREFIX;
}


bot.login(token);

module.exports = {
    P,
}