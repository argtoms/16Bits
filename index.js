const Discord = require('discord.js')
const client = new Discord.Client()

const command = require('./command')
const config = require('./config.json')

client.on('ready', () => {
    console.log(`Logged In As ${client.user.tag} And I Am Ready!`)

    command(client, ['ping', 'test'], (message) => {
        message.channel.send('Pong!')
    })
})

client.login(config.token)