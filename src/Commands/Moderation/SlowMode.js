/* eslint-disable id-length */
const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const ms = require('ms');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'SlowMode',
			aliases: ['SlowMode', 'slowmode', 'slowm', 'smode'],
			description: 'Used For Adding Or Reducing Slowmode Time In A Channel From The Guild',
			category: 'Moderation',
			usage: '<(Time) (Reason)>',
			userPerms: ['ADMINISTRATOR', 'MANAGE_CHANNELS'],
			botPerms: ['ADMINISTRATOR', 'MANAGE_CHANNELS'],
			args: true,
			guildOnly: true
		});
	}

	// eslint-disable-next-line consistent-return
	async run(message, args) {
		if (!args[0]) return message.channel.send('You did not specify a time!').then(m => m.delete({ timeout: 5000 }));

		const currentCooldown = message.channel.rateLimitPerUser;

		const reason = args[1] ? args.slice(1).join(' ') : 'No Reason';

		const embed = new MessageEmbed()
			.setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }));

		if (args[0] === 'off') {
			if (currentCooldown === 0) return message.channel.send('Channel cooldown is already off').then(m => m.delete({ timeout: 5000 }));

			embed.setTitle('Slowmode Disabled')
				.setColor('#544B94');
			return message.channel.setRateLimitPerUser(0, reason);
		}

		const time = ms(args[0]) / 1000;

		if (isNaN(time)) return message.channel.send('not a valid time, please try again!').then(m => m.delete({ timeout: 5000 }));

		if (time >= 21600) return message.channel.send('That slowmode limit is too high, please enter anything lower than 6 hours.').then(m => m.delete({ timeout: 5000 }));

		if (currentCooldown === time) return message.channel.send(`Slowmode is already set to ${args[0]}`);

		embed.setTitle('Slowmode Enabled')
			.addField('Slowmode: ', args[0])
			.addField('Reason: ', reason)
			.setColor('#544B94');

		message.channel.setRateLimitPerUser(time, reason).then(m => m.send(embed));
	}

};
