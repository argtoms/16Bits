/* eslint-disable camelcase */
const Event = require('../../Structures/Event');
const SixteenEmbed = require('../../Structures/SixteenEmbed');
const { Util: { escapeMarkdown } } = require('discord.js');
const { diffWordsWithSpace } = require('diff');
const config = require('../../../config.json');


module.exports = class extends Event {

	async run(old, message) {
		if (!message.guild || old.content === message.content || message.author.bot) return;

		const embed = new SixteenEmbed()
			.setColor('#544B94')
			.setAuthor(old.author.tag, this.client.user.displayAvatarURL({ dynamic: true }))
			.setTitle('Message Updated')
			.setDescription([
				`**- Message ID:** ${old.id}`,
				`**- Channel:** ${old.channel}`,
				`**- Author:** ${old.author.tag} (${old.author.id})`
			])
			.setURL(old.url)
			.splitFields(diffWordsWithSpace(escapeMarkdown(old.content), escapeMarkdown(message.content))
				.map(result => result.added ? `**${result.value}**` : result.removed ? `~~${result.value}~~` : result.value)
				.join(' '));

		const { logs_channel_name } = config;
		const channel = message.guild.channels.cache.find(ch => ch.name === logs_channel_name);
		if (channel) channel.send(embed);
	}

};
