const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')

client.on('ready', () => {
    console.log('PixelBot Is Online And Ready!')
})

client.login(config.token)
