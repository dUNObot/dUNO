// ========== IMPORTS ==========
// Importing necessary libraries for the bot's functionality
const { ForgeCanvas } = require("@tryforge/forge.canvas"); // Canvas extension for drawing and images
const { ForgeClient, LogPriority } = require("@tryforge/forgescript"); // ForgeClient for Discord bot logic
const { ForgeDB } = require("@tryforge/forge.db"); // Database management extension
const chalk = require("chalk"); // For colorful console outputs
const dotenv = require("dotenv"); // For loading environment variables from .env file
const figlet = require("figlet"); // For generating fancy ASCII art text
const { join } = require("path"); // For handling file paths

// ========== HANDLERS & CUSTOM FUNCTIONS ==========
// Import custom handlers for specific bot features
const displayAsciiArt = require("./handlers/ASCIIPrint.js"); // Display the bot's ASCII art logo
const variables = require("./handlers/database.js"); // Database-related variables and functions
const events = require("./handlers/events.js"); // Bot event handlers (like message events)
const intents = require("./handlers/intents.js"); // Bot intents (permissions and events)

// ========== ENVIRONMENT CONFIGURATION ==========
dotenv.config();

// ========== CLIENT SETUP ==========
const client = new ForgeClient({
  extensions: [
    new ForgeDB(), // Database extension for handling data
    new ForgeCanvas(), // Canvas extension for graphic handling
  ],

  intents: [
    ...intents, // Intents list for Discord bot permissions (message reading, etc.)
  ],

  events: [
    ...events, // Events the bot should listen for (e.g., message events, guild events)
  ],

  prefixes: [
    "$getGuildVar[prefix;$guildID;!]", // Custom prefix that can vary by server
    "<@$botID>", // Allow bot mention as a prefix
    "n.",
  ],

  trackers: { invites: false }, // Enable invite tracking for the bot
});

// Set up database variables for the ForgeDB extension
ForgeDB.variables(variables);

// ========== LOAD FUNCTIONS & COMMANDS ==========
// client.functions.load("./Custom Functions");
client.applicationCommands.load("./Slash Commands");
// client.commands.load("./Interaction Commands")

// ========== LOGIN & STARTUP ==========
// Log in to Discord using the bot token from the environment file
client.login(process.env.BOT_TOKEN);

// ========== CLEANING & DISPLAY ==========
// Clear the console to keep things clean when the bot starts
console.clear();

// Display custom ASCII art and installed packages for debugging or info
displayAsciiArt();