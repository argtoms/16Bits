const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const command = require('./command')

client.on('ready', () => {
    console.log('PixelBot Is Online And Ready!')

    command(client, ['ping', 'test'], (message) => {
        message.channel.send('Pong!')
    })

    command(client, 'servers', (message) => {
        client.guilds.cache.forEach((guild) => {
            message.channel.send(
                `${guild.name} Has A Total Of ${guild.memberCount} Members..`
            )
        })
    })

    command(client, ['cc', 'clearchannel'], (message) => {
        if (message.member.hasPermission('ADMINISTRATOR')) {
            message.channel.messages.fetch().then((results) => {
                message.channel.bulkDelete(results)
            })
        }
    })

    command(client, 'status', message => {
        if (message.member.hasPermission('ADMINISTRATOR')) {
            const content = message.content.replace('p!status ', '')

            client.user.setPresence({
                activity: {
                    name: content,
                    type: 0,
                },
            })
        }
    })
})

client.login(config.token)
