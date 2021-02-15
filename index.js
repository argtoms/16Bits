const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')

client.on('ready', () => {
    console.log(`Logged In As ${client.user.tag} And I Am Ready!`)
})

client.login(config.token)