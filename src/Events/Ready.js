const Event = require('../Structures/Event');

module.exports = class extends Event {

	constructor(...args) {
		super(...args, {
			once: true
		});
	}

	run() {
		console.log([
			`Logged in as ${this.user.username} And Ready To Serve pixelDev Discord Server!`,
			`Loaded ${this.client.commands.size} Commands!`,
			`Loaded ${this.client.events.size} Events!`
		].join('\n'));

		const activities = [
			`Watching Sahal Code Me`,
			`The World Burn hehe`,
			`You People Talk`,
			`Twitter Cancelling People For No Reason`,
			`Tom & Jerry`,
			`pixdev.gq`,
			`${this.client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} People Using 16Bits!`
		];

		let i = 0;
		setInterval(() => this.client.user.setActivity(`${this.client.prefix}help | ${activities[i++ % activities.length]}`, { type: 'WATCHING' }), 15000);
	}

};
