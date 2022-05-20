// Required Packages
const fs = require("fs");
const clc = require("cli-color");
const discord = require('discord.js')

// Find Command Dirs
module.exports = (bot) => {
  try {
    const load = (dirs) => {
      const commands = fs
        .readdirSync(`./commands/${dirs}/`)
        .filter((d) => d.endsWith(".js"));
      for (let file of commands) {
        let pull = require(`../commands/${dirs}/${file}`);
        bot.commands.set(pull.config.name, pull);
        if (pull.config.aliases)
          pull.config.aliases.forEach((a) =>
            bot.aliases.set(a, pull.config.name)
          );
      }
    };
    ["information"].forEach((x) => load(x));
    console.log(`[ ${clc.green.bold("SUCCESS")} ] Command Handler Loaded...`);
  } catch (e) {
    // Loading Failed
    console.log(`[ ${clc.red("ERROR")} ] Command Handler Failed...`);
    fs.appendFileSync(
      "./logs/error.log",
      `New Handler Error (COMMAND.JS):\n${
        (e, e.stack.split("\n\n"))
      }\nRecorded At: ${Date()}\n\n`
    );
    process.exit();
  }
};