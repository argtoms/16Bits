const Event = require('../../Structures/Event');

module.exports = class extends Event {

	async run(message) {
		const mentionRegex = RegExp(`^<@!${this.client.user.id}>$`);
		const mentionRegexPrefix = RegExp(`^<@!${this.client.user.id}> `);

		if (!message.guild || message.author.bot) return;

		if (message.content.match(mentionRegex)) message.channel.send(`My Prefix Is \`${this.client.prefix}\` Or <@805449154167046144>.`);

		const prefix = message.content.match(mentionRegexPrefix) ?
			message.content.match(mentionRegexPrefix)[0] : this.client.prefix;

		if (!message.content.startsWith(prefix)) return;

		// eslint-disable-next-line no-unused-vars
		const [cmd, ...args] = message.content.slice(prefix.length).trim().split(/ +/g);

		const command = this.client.commands.get(cmd.toLowerCase()) || this.client.commands.get(this.client.aliases.get(cmd.toLowerCase()));
		if (command) {
			command.run(message, args);
		}
	}

};
