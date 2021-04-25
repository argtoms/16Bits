/* eslint-disable camelcase */
const Event = require('../../Structures/Event');
const SixteenEmbed = require('../../Structures/SixteenEmbed');
const config = require('../../../config.json');

module.exports = class extends Event {

	async run(message) {
		if (!message.guild || message.author.bot) return;
		const attachments = message.attachments.size ? message.attachments.map(attachment => attachment.proxyURL) : null;
		const embed = new SixteenEmbed()
			.setColor('#544B94')
			.setAuthor(message.author.tag, this.client.user.displayAvatarURL({ dynamic: true }))
			.setTitle('Message Deleted')
			.setDescription([
				`**- Message ID:** ${message.id}`,
				`**- Channel:** ${message.channel}`,
				`**- Author:** ${message.member.displayName}`,
				`${attachments ? `**- Attachments:** ${attachments.join('\n')}` : ''}`
			]);
		if (message.content.length) {
			embed.splitFields(`**- Deleted Message:** ${message.content}`);
		}

		const { logs_channel_name } = config;
		const channel = message.guild.channels.cache.find(ch => ch.name === logs_channel_name);
		if (channel) channel.send(embed);
	}

};
