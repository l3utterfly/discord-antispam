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
        option.setRequired(true);
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
        option.setRequired(true);
        return option;
    });
    return subcommand;
});
command.setDefaultMemberPermissions(PermissionFlagsBits.Administrator);

/**
 * ============= MAIN FUNCTION ==============
 */
async function execute(interaction) {
    const subcommand = interaction.options._subcommand;
    switch (subcommand) {
        case 'expiration':
            cmdExpiration(interaction);
            break;
        case 'limitation':
            cmdLimitation(interaction);
            break;
        default:
            interaction.reply({ content: 'Unknown subcommand.', flags: [MessageFlags.Ephemeral] });
    }
    return;
}

/**
 * ============= COMMAND FUNCTIONS ================
 */
async function cmdExpiration (interaction) {
    const expSeconds = interaction.options._hoistedOptions.value;
}

async function cmdLimitation (interaction) {
    const limitCount = interaction.options._hoistedOptions.value;
}

/**
 * ============= EXPORTS ==============
 * Used for registering the command with the command handler.
 */
module.exports = {
	data: command, execute
};