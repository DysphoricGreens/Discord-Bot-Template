// Require Packages
const {
    readdirSync
} = require("fs");
const clc = require("cli-color");

// Console Commands
module.exports = (bot) => {
    try {
        console.log(`[ ${clc.green.bold("SUCCESS")} ] Console Handler Loaded...`);
    } catch (e) {
        // Loading Failed
        console.log(`[ ${clc.red.bold("ERROR")} ] Console Handler Failed...`);
        fs.appendFileSync(
            "./logs/errorLog.md",
            `New Handler Error (CONSOLE.JS):\n${
            (e, e.stack.split("\n\n"))
            }\nRecorded At: ${Date()}\n\n`
        );
        process.exit();
    }
};