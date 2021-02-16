const { Client } = require('discord.js');

module.exports = class SixteenClient extends Client {

	constructor(options = {}) {
		super({
			disableMentions: 'everyone'
		});
		this.validate(options);

		this.once('ready', () => {
			console.log(`Logged In As ${this.user.username} And I Am Ready!`);
		});

		this.on('message', async (message) => {
			const mentionRegex = RegExp(`^<@!${this.user.id}>$`);
			const mentionRegexPrefix = RegExp(`^<@!${this.user.id}> `);

			if (!message.guild || message.author.bot) return;

			if (message.content.match(mentionRegex)) message.channel.send(`My Prefix Is \`${this.prefix}\`.`);

			const prefix = message.content.match(mentionRegexPrefix) ?
				message.content.match(mentionRegexPrefix)[0] : this.prefix;

			// eslint-disable-next-line no-unused-vars
			const [cmd, ...args] = message.content.slice(prefix.length).trim().split(/ +/g);

			if (cmd.toLowerCase() === 'hello') {
				message.channel.send('Hello!');
			}
		});
	}

	validate(options) {
		if (typeof options !== 'object') throw new TypeError('Options Should Be A Type Of Object.');

		if (!options.token) throw new Error('You Must Pass The Token For The Client.');
		this.token = options.token;

		if (!options.prefix) throw new TypeError('You Must Pass A Prefix For The Client');
		if (typeof options.prefix !== 'string') throw new TypeError('Prefix Should Be A Type Of String.');
		this.prefix = options.prefix;
	}

	async login(token = this.token) {
		super.login(token);
	}

};
