/* eslint-disable max-len */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable camelcase */
const Event = require('../../Structures/Event');
const config = require('../../../config.json');
const SixteenEmbed = require('../../Structures/SixteenEmbed');
const moment = require('moment');

module.exports = class extends Event {

	async run(guildMemberAdd) {
		const { welcome_role_name, welcome_channel_id, logs_channel_name } = config;

		const welcomeRole = guildMemberAdd.guild.roles.cache.find(role => role.name === welcome_role_name);

		guildMemberAdd.roles.add(welcomeRole);

		const embed = new SixteenEmbed()
		    .setColor('RANDOM')
			.setAuthor(guildMemberAdd.guild.name, this.client.user.displayAvatarURL({ dynamic: true }))
			.setTitle('Welcome To The Server!')
			.setDescription([
				`Hey There <@${guildMemberAdd.user.id}>! Welcome To The Server And Make Sure To Read The Rules And Have Fun :D`
			]);
		guildMemberAdd.guild.channels.cache.get(welcome_channel_id).send(embed);

		const logembed = new SixteenEmbed()
		    .setColor('RANDOM')
			.setAuthor('A New Member Has Joined The Server')
			.setThumbnail(guildMemberAdd.user.displayAvatarURL({ dynamic: true, size: 512 }))
			.setDescription([
				`**- Username:** ${guildMemberAdd.user.username}`,
				`**- Discriminator:** ${guildMemberAdd.user.discriminator}`,
				`**- ID:** ${guildMemberAdd.id}`,
				`**- Time Created:** ${moment(guildMemberAdd.user.createdTimestamp).format('LT')} ${moment(guildMemberAdd.user.createdTimestamp).format('LL')} ${moment(guildMemberAdd.user.createdTimestamp).fromNow()}`
			]);
		const channel = guildMemberAdd.guild.channels.cache.find(ch => ch.name === logs_channel_name);
		if (channel) channel.send(logembed);
	}

};
