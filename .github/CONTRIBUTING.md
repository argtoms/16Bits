# Make Your Own Command =>

```JavaScript
const Command = require('../../Structures/Command'); //Getting The Command Handler So Command Works

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
            name: '', //Name Of The Command
			aliases: [''], //Add Some Alias To The Command
			description: '', //Description For The Command
			category: '', //Category Of The Command
            usage: '', // <> Means Strict And [] Means Optional. Eg: !user [user_name] Or !kick <user_name>
			userPerms: ['eg: ADMINISTRATOR'], // Add Your Permissions Required For The User To Use The Command...
			botPerms: [''] // Same As Above But For The Bot...
		});
	}

	async run(message) {
		//Add Code In Here
	}

};
```

# Make Your Own Event =>

```JavaScript
    const Event = require('../Structures/Event'); // Getting The Event Handler

    module.exports = class extends Event {

	    run() {
            // Add Code Here
        }

    };
```

Official Color Code = #544B94
