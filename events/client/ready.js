// Require Packages
const figlet = require("figlet");
const {
  readdirSync
} = require("fs");
const config = require("../../config.json");
const color = require("../../colors.json");
const clc = require("cli-color");
const onlineDate = Date();

// Activities
const activities = [
  "with the &help command.",
  "with the developers console.",
  "with some code.",
  "with JavaScript."
];

module.exports = async (bot) => {
  try {

    // Bot Status (15 Seconds)
    setInterval(() => {
      // generate random number between 1 and list length.
      const randomIndex = Math.floor(Math.random() * (activities.length - 1) + 1);
      const newActivity = activities[randomIndex];

      bot.user.setActivity(newActivity);
    }, 15000);

    // Sending Information (Terminal)
    figlet.text(
      `${bot.user.username}`, {
        font: "alligator",
        horizontalLayout: "default",
        verticalLayout: "default",
      },
      function (err, data) {
        // Server Locations
        console.log(`[ ${clc.green.bold("SUCCESS")} ] Uptime Monitor >>> https://uptimerobot.com/`)
        console.log(`[ ${clc.green.bold("SUCCESS")} ] Landing Page >>> http://localhost:4678/`)

        // Name & Notification Setup
        console.log(clc.blueBright(`\n${data}`) + clc.white.bold(`\#${bot.user.discriminator}`));
        console.log(
          clc.xterm(7)(`Current Boot: ${onlineDate}\n`) +
          clc.underline.yellow("Notification Bay:\n")
        );
      }
    );
    console.log(`[ ${clc.green.bold("SUCCESS")} ] ${bot.user.username} Loaded...`);
  } catch (e) {
    console.log(`[ ${clc.red.bold("ERROR")} ] ${bot.user.username} Bot Failed...`);
    fs.appendFileSync(
      "./logs/error.log",
      `New Handler Error (READY.JS):\n${
        (e, e.stack.split("\n\n"))
      }\nRecorded At: ${Date()}\n\n`
    );
    process.exit();
  }
};