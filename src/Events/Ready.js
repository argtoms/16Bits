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
	}

};
