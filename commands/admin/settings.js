/**
 * ============= IMPORTS AND REQUIREMENTS ==============
 */
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageFlags, PermissionFlagsBits } = require('discord.js');

/**
 * ============= SLASH COMMAND ==============
 */
const command = new SlashCommandBuilder();
command.setName('settings');
command.setDescription('Configuration and options for the bot.');
command.addSubcommand(subcommand => {
    subcommand.setName('expiration');
    subcommand.setDescription("The time (in seconds) before a cache entry expires.");
    subcommand.addNumberOption(option => {
        option.setName('seconds');
        option.setDescription("Must be > 4, not recommended above 120.");
        return option;
    });
    return subcommand;
});
command.addSubcommand(subcommand => {
    subcommand.setName('limitation');
    subcommand.setDescription("The number of duplicate messages to allow before taking action.");
    subcommand.addNumberOption(option => {
        option.setName('count');
        option.setDescription("Must be > 1, recommended > 3.");
        return option;
    });
    return subcommand;
});
command.setDefaultMemberPermissions(PermissionFlagsBits.Administrator);

/**
 * ============= MAIN FUNCTION ==============
 */
async function execute(interaction) {
    console.log(interaction);
    return;
}

/**
 * ============= EXPORTS ==============
 * Used for registering the command with the command handler.
 */
module.exports = {
	data: command, execute
};