const { MessageEmbed } = require('discord.js')
const i = '<:info:688057843558908013>'
const x = '<:noov:695993429087354991> '
const tick = '<:bigtick:779736050892931082>'
const dev = '<:discord_bot_dev:719535352829837322>'
const dg = '<:dg:780426487580852224>'
module.exports.run = async (bot, message, args) => {
      const member = message.member;
      const credits1 = new MessageEmbed()
      .setDescription(`
**${i} Hydra+ Development Team :**

${dev} Bot Developer :\n\`Brandon-Dev#9784\`
${dg} Graphics & Design Developers :\n\`enlighten1self#9067\`, \`Brandon-Dev#9784\`
`)
      .setColor('BLUE')

     message.channel.send(credits1)
}
module.exports.config = {
    name: 'credits', // Command Name
    description: 'credits to the bot.', // Description
    usage: 'h credits', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 0, // Amount of bank space to give when command is used.
    cooldown: 5 // Command Cooldown
}