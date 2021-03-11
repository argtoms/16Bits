const Event = require('../../Structures/Event');

module.exports = class extends Event {

	async run(guildMemberAdd) {
		const welcomeRole = guildMemberAdd.guild.roles.cache.find(role => role.name === 'RoleName');

		guildMemberAdd.roles.add(welcomeRole);
		guildMemberAdd.guild.channels.cache.get('CHANNELID').send(`Welcome <@${guildMemberAdd.user.id}> To The Server!`);
	}

};
