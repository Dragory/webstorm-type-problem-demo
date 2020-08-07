const Discord = require("discord.js");
const { Client } = require("discord.js");
import { Client as ImportClient } from "discord.js";

/**
 * Alt+clicking on Client here jumps to the correct location
 * @param {Discord.Client} client
 */
function foo(client) {
    // Autocompletion does not work for client here, works in VS Code
}

/**
 * Alt+clicking on Client here jumps to the correct location
 * @param {Client} client
 */
function foo(client) {
    // Autocompletion does not work for client here, works in VS Code
}

/**
 * Alt+clicking on Client here jumps to the correct location
 * @param {ImportClient} client
 */
function foo(client) {
    // Autocompletion *does* work here, but if the project wants to stick to CommonJS require() calls for now, this is not an option
}

/**
 * Alt+clicking on Client here jumps to the correct location
 * @param {module:"discord.js".Client} client
 */
function foo(client) {
    // Autocompletion *does* work here, but doesn't work in e.g. VS Code which other members of the team might be using
}

/**
 * Alt+clicking on Client here jumps to the correct location
 * @param {import("discord.js").Client} client
 */
function foo(client) {
    // Autocompletion *does* work here, but the type gets merged with any global "Client" type, which is not ideal
}
