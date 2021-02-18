const Command = require('../../Structures/Command');
const ms = require('ms');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'Uptime',
			aliases: ['Uptime', 'ut', 'uptime'],
			description: 'Shows The Uptime Of The Bot',
			category: 'Utilities'
		});
	}

	async run(message) {
		message.channel.send(`I've Been Online For \`${ms(this.client.uptime, { long: true })}\``);
	}

};
