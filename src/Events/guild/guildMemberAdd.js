/* eslint-disable camelcase */
const Event = require('../../Structures/Event');
const config = require('../../../config.json');

module.exports = class extends Event {

	async run(guildMemberAdd) {
		const { welcome_role_name, welcome_channel_id, welcome_message } = config;

		const welcomeRole = guildMemberAdd.guild.roles.cache.find(role => role.name === welcome_role_name);

		guildMemberAdd.roles.add(welcomeRole);
		guildMemberAdd.guild.channels.cache.get(welcome_channel_id).send(welcome_message);
	}

};
