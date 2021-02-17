const Command = require('../../Structures/Command');
const ms = require('ms');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['ut'],
			description: 'Returns A Message With The Uptime Of The Bot',
			category: 'Utilities'
		});
	}

	async run(message) {
		message.channel.send(`I Have Been Online For \`${ms(this.client.uptime, { long: true })}\``);
	}

};
