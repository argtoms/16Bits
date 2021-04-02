# Make Your Own Event

```javascript
    const Event = require('../Structures/Event'); // Getting The Event Handler

    module.exports = class extends Event {

	    run() {
            // Add Code Here
        }

    };
```

# List Of Events Inside The Bot

* ready - *This Event Is Responsible For Logging In Console That It Started, Loaded x Commands And Loaded x Events Messages. It Is Also Responsible For Connecting To MongoDB, Logging The Message In Console And The Changing Presence Status Messages Of The Bot Every 15 Seconds.*

### Guild

* guildMemberAdd - *This Event Is Responsible For Sending The Welcome Message And Giving The Required Role When A Member Joins A Server*

### Message

* message - *This Event Is Responsible For Checking If The Command Author Has The Permissions Required And If Not It Will Reply With The Appropriate Message, Make Sures That The Command Is Run If The Prefix Is Provided And More Stuff I'm Lazy To Explain Because Me Is Sleepy*
* messageUpdate - *This Event Is Responsible For Sending A Message In Logs Whenever Someone Edits Thier Message In The Server*
* messageDelete - *This Event Is Responsible For Sending A Message In Logs Whenever Someone Deletes Thier Message In The Server*
