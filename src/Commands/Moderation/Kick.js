const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'Kick',
			aliases: ['Kick', 'kick'],
			description: 'Used For Kicking A Member From The Guild',
			category: 'Moderation',
			usage: '<@User Reason>',
			userPerms: ['ADMINISTRATOR', 'KICK_MEMBERS'],
			botPerms: ['ADMINISTRATOR', 'KICK_MEMBERS'],
			args: true,
			guildOnly: true
		});
	}

	// eslint-disable-next-line consistent-return
	async run(message, args) {
		if (!args[0]) {
			return message.channel.send(`Please mention a user!`);
		}
		const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

		try {
			await member.kick();
			await message.channel.send(`${member} has been kicked!`);
		// eslint-disable-next-line id-length
		} catch (e) {
			return message.channel.send(`User isn't in this server!`);
		}
	}

};
