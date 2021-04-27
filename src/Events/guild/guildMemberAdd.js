/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable camelcase */
const Event = require('../../Structures/Event');
const config = require('../../../config.json');
const SixteenEmbed = require('../../Structures/SixteenEmbed');

module.exports = class extends Event {

	async run(guildMemberAdd) {
		const { welcome_role_name, welcome_channel_id } = config;

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
	}

};
