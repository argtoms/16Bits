# Contributing

If You Need Some Kind Of Help For Contributions, Feel Free To Join Our [Discord](https://discord.gg/syPv4ezZEM/) And Ask Us About It.

To Contribute To The Repository,

1. Fork The Repository
2. Create A New Branch In Your Fork
3. Make Your Changes
4. Run The Bot Using `node .` And Make Sure Everything Works Great
5. Commit Your Changes And Push Them
6. Submit A Pull Request And We Might Accept It....

# Run 16Bits Locally

To Run 16Bits

1. Install [Yarn](https://classic.yarnpkg.com/en/) And [Node.js](https://nodejs.org/en/).

2. Get MongoDB Connection URL. (Make A Tutorial Here Later Sahal)

3. Make A File Named `config.json` And Fill It Up With The Content Given Below.

```json 
{
    "prefix": "", // Prefix For The Bot.
    "token": "", // Token For The Discord Bot.
    "owners": [""], // Discord ID(s) For The Owners.
    "defaultPerms": ["SEND_MESSAGES", "VIEW_CHANNEL", "SPEAK"], // Default Permissions Needed For The Users To Use The Bot.
    "mongo_url": "" // MongoDB Url. 

}
```

3. Install The Required Packages By Doing `npm i` And Start The Bot Using `node .`



### Official Color Code = ```#544B94```