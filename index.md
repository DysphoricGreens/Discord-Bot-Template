
# Discord Bot Template
[![GitHub issues](https://img.shields.io/github/issues/DysphoricGreens/Discord-Bot-Template?style=for-the-badge)](https://github.com/DysphoricGreens/Discord-Bot-Template/issues) [![GitHub forks](https://img.shields.io/github/forks/DysphoricGreens/Discord-Bot-Template?style=for-the-badge)](https://github.com/DysphoricGreens/Discord-Bot-Template/network) [![GitHub stars](https://img.shields.io/github/stars/DysphoricGreens/Discord-Bot-Template?style=for-the-badge)](https://github.com/DysphoricGreens/Discord-Bot-Template/stargazers) [![GitHub license](https://img.shields.io/github/license/DysphoricGreens/Discord-Bot-Template?style=for-the-badge)](https://github.com/DysphoricGreens/Discord-Bot-Template/blob/main/LICENSE) ![GitHub last commit](https://img.shields.io/github/last-commit/DysphoricGreens/Discord-Bot-Template?style=for-the-badge) ![GitHub package.json version](https://img.shields.io/github/package-json/v/DysphoricGreens/Discord-Bot-Template?style=for-the-badge) ![Lines of code](https://img.shields.io/tokei/lines/github/DysphoricGreens/Discord-Bot-Template?style=for-the-badge) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/DysphoricGreens/Discord-Bot-Template?style=for-the-badge) 

 ![GitHub issues](https://img.shields.io/github/issues-raw/DysphoricGreens/Discord-Bot-Template?style=for-the-badge) ![GitHub closed issues](https://img.shields.io/github/issues-closed-raw/DysphoricGreens/Discord-Bot-Template?style=for-the-badge)

## News
This is DBT V 0.0.1! This will be updated and edited semi-regularly!


### About
This is a free to use/edit bot template to use for your projects with a basic command handler and help command!

### Create the Bot
Before we can start you must first create the bot. Go to ```https://discord.com/developers/applications``` and when the website loads up press the ```New Application``` button, give it a name, and click the create button. Give the application an icon and a description then go ahead to the bot tab (the puzzle piece looking icon).
On this screen you will click ``Add Bot`` and when the popup appears, click ``Yes, do it!``.
Click copy token and make sure you put it in the ``config.json`` file, and make sure that ``Presence Intent``, ``Server Members Intent`` and ``Message Content Intent`` are enabled.
NEVER... EVER share your bot's token! 


### Installation
Before starting, you need to make sure you have two things installed, a code editor, and Node.JS (version 16 or up recommended)!
To download the bot template you can either use the download button above to get a zipped archive or you can use ```git clone https://github.com/DysphoricGreens/Discord-Bot-Template```. In this file there is a package-lock.json file so all you have to do is ```npm i``` and everything you need to run the bot will be installed.
In order to get the bot running you will need to put in your bot's token, intents and set the prefix in the ```config.json``` file and save it, default is ```&```! A good website to calculate your bot's intents is one made by ziad87 https://ziad87.net/intents/

### Inviting the Bot
When it is time to invite your discord bot to your friend's server or your own private test server all you have to do is go to OAuth2 > URL Generator, in scopes select bot and applications.commands, then in bot permissions for testing purposes chose administrator. Later on once you've figured out what kind of bot you want to run you can reset the permissions here!
On the bottom at the Generated URL text box, all you have to do is click copy, paste the URL into your browser, and invite the bot!
