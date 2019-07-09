//Program starts here

//Required to access discord
const Discord = require('discord.js');
//Required to access database
const Database = require('sqlite3');
const Database = require('database.js');
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

const version = '1.0.0';
const PREFIX = '`';

bot.on('ready', () => {
    console.log('This bot is online!');
})


bot.on('message', message => {
    let args = message.content.toString;
})


bot.login(token);