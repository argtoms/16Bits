const Command = require('../../Structures/Command'); //Getting The Command Handler So Command Works
const fs = require('fs');
const ms = require('ms');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
            name: '', //Name Of The Command
			aliases: [''], //Add Some Alias To The Command
			description: '', //Description For The Command
			category: '', //Category Of The Command
            usage: '', // <> Means Strict And [] Means Optional. Eg: !user [user_name] Or !kick <user_name>
			userPerms: ['eg: ADMINISTRATOR'], // Add Your Permissions Required For The User To Use The Command...
			botPerms: [''], // Same As Above But For The Bot...
			args: true, // true or false // If You Have A Strict Command Usage Parameter, You Can Add This. What It Does Is That If An User Does Not Provide An Argument Along With An Command, The Bot Will Reply That You Need The Argument And Shows The Usage Of The Command
			guildOnly: true , // true or false // Adding This Will Make Sure The Command Only Works In A Server And Not In DMs Of The Bot
		});
	}

	async run(message) {
		//Add Code In Here
	}