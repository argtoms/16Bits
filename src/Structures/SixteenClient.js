const { Client, Collection } = require('discord.js');
const Util = require('./Util.js');

module.exports = class SixteenClient extends Client {

	constructor(options = {}) {
		super({
			disableMentions: 'everyone'
		});
		this.validate(options);

		this.commands = new Collection();

		this.aliases = new Collection();

		this.utils = new Util(this);

		this.once('ready', () => {
			console.log(`Logged in as ${this.user.username} And Ready To Serve pixelDev Discord Server!`);
		});

		this.on('message', async (message) => {
			const mentionRegex = RegExp(`^<@!${this.user.id}>$`);
			const mentionRegexPrefix = RegExp(`^<@!${this.user.id}> `);

			if (!message.guild || message.author.bot) return;

			if (message.content.match(mentionRegex)) message.channel.send(`My Prefix Is \`${this.prefix}\` Or <@805449154167046144>.`);

			const prefix = message.content.match(mentionRegexPrefix) ?
				message.content.match(mentionRegexPrefix)[0] : this.prefix;

			if (!message.content.startsWith(prefix)) return;

			// eslint-disable-next-line no-unused-vars
			const [cmd, ...args] = message.content.slice(prefix.length).trim().split(/ +/g);

			const command = this.commands.get(cmd.toLowerCase()) || this.commands.get(this.aliases.get(cmd.toLowerCase()));
			if (command) {
				command.run(message, args);
			}
		});
	}

	validate(options) {
		if (typeof options !== 'object') throw new TypeError('Options Should Be A Type Of Object.');

		if (!options.token) throw new Error('You Must Pass The Token For The Client.');
		this.token = options.token;

		if (!options.prefix) throw new Error('You Must Pass A Prefix For The Client.');
		if (typeof options.prefix !== 'string') throw new TypeError('Prefix Should Be A Type Of String.');
		this.prefix = options.prefix;
	}

	async start(token = this.token) {
		this.utils.loadCommands();
		super.login(token);
	}

};
