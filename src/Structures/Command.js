module.exports = class Command {

	constructor(client, name, options = {}) {
		this.client = client;
		this.name = options.name || name;
		this.aliases = options.aliases || [];
		this.description = options.description || 'No Description Was Provided.';
		this.category = options.category || 'Miscellaneous';
		this.usage = `${this.client.prefix}${this.name} ${options.usage || ''}`.trim();
	}

	// eslint-disable-next-line no-unused-vars
	async run(message, args) {
		throw new Error(`Command ${this.name} Doesn't Provide A Run Method!`);
	}

};