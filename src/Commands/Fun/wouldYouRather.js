const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');

module.exports = class extends Command {


	constructor(...args) {
		super(...args, {
			name: 'WouldYouRather',
			aliases: ['wouldyourather', 'WouldYouRather', 'wyr'],
			description: 'The Bot Will Ask You A Would You Rather Question To You.',
			category: 'Fun'
		});
	}

	async run(message) {
		const replies = require('../../data/wyd.json');
		const reply = replies[Math.floor(Math.random() * replies.length)];

		const embed = new MessageEmbed()
			.setTitle('Would you rather?')
			.setDescription(reply)
			.setColor('#544B94');

		message.channel.send(embed);
	}

};
