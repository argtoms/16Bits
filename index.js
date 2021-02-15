const Discord = require('discord.js')
const client = new Discord.Client()

const command = require('./command')
const config = require('./config.json')

client.on('ready', () => {
    console.log(`Logged In As ${client.user.tag} And I Am Ready!`)

    command(client, ['ping', 'test'], (message) => {
        message.channel.send('Pong!')
    })

    command(client, 'servercount', (message) => {
        client.guilds.cache.forEach((guild) => {
            message.channel.send(
                `${guild.name} Has A Total Of ${guild.memberCount} Members`
            )
        })
    })
     
    command(client, 'status', (message) => {
        const content = message.content.replace(';status ', '')
        // "!status hello world" -> "hello world"
    
        client.user.setPresence({
          activity: {
            name: content,
            type: 0,
          },
        })
    })
})

client.login(config.token)