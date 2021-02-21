const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'Ban',
			aliases: ['ban', 'ban'],
			description: 'Used For Banning Members From The Guild',
			category: 'Moderation',
			usage: '<@user Reason>',
			userPerms: ['ADMINISTRATOR', 'BAN_MEMBERS'],
			botPerms: ['ADMINISTRATOR', 'BAN_MEMBERS'],
			args: true,
			guildOnly: true
		});
	}

	// eslint-disable-next-line consistent-return
	async run(message) {
		// eslint-disable-next-line no-undef
		const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

		try {
			await member.ban();
			await message.channel.send(`${member} has been banned!`);
		// eslint-disable-next-line id-length
		} catch (e) {
			return message.channel.send(`User is not in the server!`);
		}
	}

};
