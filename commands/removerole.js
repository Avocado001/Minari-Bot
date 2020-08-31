module.exports.run = async (bot, message, args) => {
    let epicRole = message.guild.roles.cache.get('747455695724609567');
    const member = message.mentions.members.first();
    if(!message.member.hasPermission('MANAGE_ROLES'))
    message.channel.send("You don't have permission to use that command.");
else {
    member.roles.add(epicRole);
    message.channel.send('Member is now Musically Muted, Shame on You!')
}

}

module.exports.config = {
    name: "unmute",
    description: "",
    usage: "=unmute",
    accessableby: "ADMINS/BOT COMMANDER",
    aliases: ["removerole"]
}