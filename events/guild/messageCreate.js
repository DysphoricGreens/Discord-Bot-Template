// Require Packages
const { prefix } = require("../../config.json");
const { readdirSync } = require("fs");

module.exports = async (bot, messageCreate) => {
    // Only Users Arg
    if (messageCreate.author.bot) return;

    // Make Commands Not Case Sensitive
    let args = messageCreate.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();

    // Command Prefixs and Aliases
    if (!messageCreate.content.startsWith(prefix)) return;
    let commandfile =
        bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd));
    if (commandfile) commandfile.run(bot, messageCreate, args);
};