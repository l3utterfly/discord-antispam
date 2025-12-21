# Anti-Spam Discord Bot
This is a simple commonJS Discord bot created with DiscordJS v14 and Keyv v5. The purpose is to be a very simple and light solution to preventing cross-posting (when a user, typically a compromised account, posts the same message in many or every channel of a Discord server, usually with malicious links or to shill some crypto scam).

Whilst not developed for deployment to multiple servers, it probably can be active in multiple servers simultaneously.

## How To Set Up

### What You'll Need
- A host machine with NodeJS v24.12.0 (LTS) or later installed.
- A Discord account.

### 1. Create a Discord Application
If you already have one, skip to step 2.

Go to the [Discord Developer Portal](https://discord.com/developers/applications) and create a new application. After giving it a name and agreeing to the Discord devloper policies, you'll be taken to the application's "information" or "general information" page. There you can find your Application ID. Copy it, save it somewhere. 

Navigate to the "Bot" page. There you'll find further customisation options, and your token. Copy it, store it somewhere safe. Anyone with access to your token has full control over what your application does. On the same page, under "Privileged Gateway Intents", enable "Message Content Intent".

### 2. Start The Bot
With this project's files downloaded to your host machine, open the directory containing them in your CLI. Run the following command:
`node .`
This starts the bot process. Note that the bot should be runnning before you add it to your server. This way, the bot can deploy its slash commands to the server.

### 3. Add The Bot To Your Server
On your application dashboard, under "Installation", de-select "User Install" from the "Installation Methods" section. Within the "Default Install Settings" under "Scopes", select "bot" and under "Permissions" select "Ban Members", "Use Slash Commands". 

In the "Install Link" section, copy the default link provided by Discord. Upon opening that link, Discord should display instructions for adding the bot to your server.

### All Done!
As I write these instructions, I realize they might not be the most coherent. I should probably add screenshots of everything...