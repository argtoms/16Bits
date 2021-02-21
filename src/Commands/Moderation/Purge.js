const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'Purge',
			aliases: ['purge', 'Purge'],
			description: 'Used For Purging Messages In A Channel From The Guild',
			category: 'Moderation',
			usage: '<1-100>',
			userPerms: ['ADMINISTRATOR'],
			botPerms: ['ADMINISTRATOR'],
			args: true,
			guildOnly: true
		});
	}

	// eslint-disable-next-line consistent-return
	async run(message, args) {
		if (!args[0]) {
			return message.channel.send(`Please enter a amount 1 to 100`);
		}

		let deleteAmount;

		if (parseInt(args[0]) > 100) {
			deleteAmount = 100;
		} else {
			deleteAmount = parseInt(args[0]);
		}

		await message.channel.bulkDelete(deleteAmount, true);

		const embed = new MessageEmbed()
			.setTitle(`${message.author.username}`)
			.setThumbnail(message.author.displayAvatarURL())
			.setDescription(`Successfully Deleted ${deleteAmount}`)
			.setFooter(message.author.username, message.author.displayAvatarURL())
			.setColor('#544B94');
		await message.channel.send(embed);
	}

};
