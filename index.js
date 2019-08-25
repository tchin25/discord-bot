//Program starts here
const express = require('express');
const app = express();

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
    let channel = message.channel;
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
            case 'adult':
                channel.send('I\'m an adult');
            break;
            case '12':
                channel.send('https://media.discordapp.net/attachments/561610186666803221/561617548815106059/unknown.png?width=959&height=132');
            break;
            case 'plank':
                channel.send('https://media.discordapp.net/attachments/552175172963139587/601247313456791562/VideoCapture_20181106-153057.jpg?width=941&height=530');
            break;
            case 'sweta':
                let string = '';
                if(args[1]){
                    string += args[1];
                }
                channel.send(string + ' tfti');
            break;
            case 'perino':
                channel.send('Oh Matt? (btw Matt is perino, i can use his first name because we are tight like that. yeah i know top players but its not a big deal to me lol)');
            break;
            case 'apiTest':
                Database.generatePokemonTable();
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

app.get("/", (req, res) => {
    res.send('bot is online');
});

app.listen(3000, () => {
    console.log("Listening on port 3000...");
});
