const { Events } = require('discord.js');
const { deployCommandsToGuild } = require('../../deploy.js');

function execute (guild) {
    deployCommandsToGuild(guild.id);
    return;
}

module.exports = { name: Events.GuildCreate, once: false, execute }