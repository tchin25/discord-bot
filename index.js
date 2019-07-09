//Program starts here

//Required to access discord
const Discord = require('discord.js');
//Required to access database
const Database = require('sqlite3');
//const Database = require('database.js');
//Required to make REST calls
const Https = require('http');
//Required to login to bot
const Keys = require('./keys.js');


// let db = new sqlite3.Database('./db/users.db', (err) => {
//   if (err) {
//     console.error(err.message);
//   }
//   console.log('Connected to the users database.');
// });

const bot = new Discord.Client();
const token = Keys.token;

const version = '1.0.1';
const PREFIX = '`';

bot.on('ready', () => {
    console.log('This bot is online!');
})


bot.on('message', message => {
    let arr1 = message.content.split("");
    let content = message.content.substring(PREFIX.length);
    let arr2 = content.split("");
    let args = content.split(" ");
    if (arr1[0] == '`' && arr2.every(checkPrefix)){
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