const { ForgeCanvas } = require("@tryforge/forge.canvas");
const { ForgeClient } = require("@tryforge/forgescript");
const { ForgeDB } = require("@tryforge/forge.db");
const dotenv = require("dotenv");

const displayAsciiArt = require("./handlers/ASCIIPrint.js");
const variables = require("./handlers/database.js");
const events = require("./handlers/events.js");
const intents = require("./handlers/intents.js");

dotenv.config();

const client = new ForgeClient({
  extensions: [
    new ForgeDB(),
    new ForgeCanvas(),
  ],

  intents: [
    ...intents,
  ],

  events: [
    ...events,
  ],

  prefixes: [
    "!",
  ],

  trackers: { invites: false },
});

ForgeDB.variables(variables);

client.functions.load("./Custom Functions");
client.applicationCommands.load("./Slash Commands");
client.commands.load("./Interaction Commands")

client.login(process.env.BOT_TOKEN);

console.clear();
displayAsciiArt();