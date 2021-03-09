# Contributing

Hello There 👋! Thanks For Contributing To 16Bits. 
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

2. Get MongoDB Connection URL.
    
    * Go To [MongoDB Atlas Cloud Registration Page](https://www.mongodb.com/cloud/atlas/register) And Get An Account There.

        ### <u> Making A Cluster </u>

    * You can create a cluster which is absolutely free, no credit cards needed. But if you want higher storage and performance, you're free to get a paid one. (Not recommended if you're using the bot in just one server)

    * Select Your cloud Provider & Region. Make sure you choose a region closest to you

    * Cluster Tier - The Default will be set to the free tier, you can change this if you're willing to pay.

    * Now for the cluster name, you can use any name you want.

    * Now hit Create Cluster, It May take a couple of minutes so let it do its job.

        ### <u> Getting The Connection URL </u>

    * The most important thing and the thing you need for this installation, is the MongoDB database connection URL.

    * Now on the left sidebar you'll see some options, click `Database Access`

    * Click on add a new Database user

    * Choose the Authentication Method as Password. Now Add a Username and a password (Make Sure You Remember Both)

    * You Can set the Database User Privileges to either `Atlas Admin` or `Read and Write data to any database`.

    *  Now on the left sidebar you'll see some options, click `Network access`

    * Click on Add IP Address

    * For the IP Address, You will have to choose Allow Access from Anywhere so that your bot can access the database.

    * Now come back to Clusters and click on the Connect button .

    * Now you're at the Choose a Connection Method window, Choose the third option which is the Connect using MongoDB Compass.

    * Now copy the connection string, it will look something like this - ```mongodb+srv://testing:<password>@cluster0.xxxxx.mongodb.net/test```

    * Now You'll need to replace `<username>` with your database user username and `<password>` with your database user password.

    * You're all good! Now paste the URL in the `config.json` file which is shown below

3. Download The Latest [Release](https://github.com/pixdevgithub/16Bits/releases) Or Clone The Repo By Doing (You Need Git Installed) `https://github.com/pixdevgithub/16Bits.git`

4. Make A File Named `config.json` And Fill It Up With The Content Given Below.

```json 
{
    "prefix": "", // Prefix For The Bot.
    "token": "", // Token For The Discord Bot.
    "owners": [""], // Discord ID(s) For The Owners.
    "defaultPerms": ["SEND_MESSAGES", "VIEW_CHANNEL", "SPEAK"], // Default Permissions Needed For The Users To Use The Bot.
    "mongo_url": "" // MongoDB Connection Url. 

}
```

5. Install The Required Packages By Doing `npm i` And Start The Bot Using `node .`

6. Make Sure You Have A Command Named `Muted` For The Mute Command To Work.

7. Add The Channel ID In Line 20 Of src/Commands/Utilities/Suggest.js Show Below

```javascript
const neededChannel = '814420784838737930'; 

```

Change The Existing ID To A Channel Where You Want The Suggestions To Be Sent

### 16Bits Official Color Code = ```#544B94```
