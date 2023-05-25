const Discord = require('discord.js')
const client = new Discord.Client({intents: [1,512,32768,2,128]})
const config = require('./configs/discord/config.json')
const message = require('./events/message/message')
const ready = require('./events/ready/ready')

message.message(client, config)
ready.ready(client);
client.login(config.token);   