const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'GiveRole',
			aliases: ['GiveRole', 'giverole', 'grole'],
			description: 'Used For Giving Roles To A User From The Guild',
			category: 'Moderation',
			usage: '<@User @Role|RoleID>',
			userPerms: ['ADMINISTRATOR', 'MANAGE_ROLES'],
			botPerms: ['ADMINISTRATOR', 'MANAGE_ROLES'],
			args: true,
			guildOnly: true
		});
	}

	// eslint-disable-next-line consistent-return
	async run(message, args) {
		// eslint-disable-next-line id-length
		if (!args[0] || !args[1]) return message.channel.send("Incorrect Usage, It's `<username || user id> <role name || id>").then(m => m.delete({ timeout: 5000 }));

		try {
			const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
			// eslint-disable-next-line id-length
			const roleName = message.guild.roles.cache.find(r => (r.name === args[1].toString()) || (r.id === args[1].toString().replace(/[^\w\s]/gi, '')));

			const alreadyHasRole = member._roles.includes(roleName.id);

			// eslint-disable-next-line id-length
			if (alreadyHasRole) return message.channel.send('User Already Has That Role').then(m => m.delete({ timeout: 5000 }));

			const embed = new MessageEmbed()
				.setTitle(`Role Name: ${roleName.name}`)
				.setDescription(`${message.author} has successfully given the role ${roleName} to ${member.user}`)
				.setColor('#544B94')
				.setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
				.setFooter(new Date().toLocaleString());

			return member.roles.add(roleName).then(() => message.channel.send(embed));
		// eslint-disable-next-line id-length
		} catch (e) {
			// eslint-disable-next-line id-length
			return message.channel.send('Try to give a role that exists next time...').then(m => m.delete({ timeout: 5000 })).then(() => console.log(e));
		}
	}

};
