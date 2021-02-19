const Event = require('../Structures/Event');

module.exports = class extends Event {

	constructor(...args) {
		super(...args, {
			once: true
		});
	}

	run() {
		console.log([
			`Logged in as ${this.client.user.username} And Ready To Serve pixelDev Discord Server!`,
			`Loaded ${this.client.commands.size} Commands!`,
			`Loaded ${this.client.events.size} Events!`
		].join('\n'));

		const activities = [
			`${this.client.channels.cache.size} Channels!`,
			`${this.client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} Users!`,
			`Watching People Talk`,
			`pixdev.gq`,
			`Watching Sahal Code Me`
		];

		let i = 0;
		setInterval(() => this.client.user.setActivity(`${this.client.prefix}help | ${activities[i++ % activities.length]}`, { type: 'WATCHING' }), 15000);
	}

};
