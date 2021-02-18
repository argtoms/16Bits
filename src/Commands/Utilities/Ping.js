const Command = require('../../Structures/Command');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			name: 'Ping',
			aliases: ['Ping', 'ping', 'pong'],
			description: 'Shows The Ping Of The Bot'
		});
	}

	async run(message) {
		const msg = await message.channel.send('Pinging...');

		const latency = msg.createdTimestamp - message.createdTimestamp;
		// eslint-disable-next-line no-useless-escape
		const choices = ['I Know That My Ping is Pog 😎', 'This Ping Cringe Innit Bruv?', 'Ay Bruv If My Ping Bad, Tell Sahal To Fix It..'];
		const response = choices[Math.floor(Math.random() * choices.length)];

		msg.edit(`${response} - Bot Latency: \`${latency}ms\`, API Latency: \`${Math.round(this.client.ws.ping)}ms\` 🏓`);
	}

};
