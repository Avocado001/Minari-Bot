const Discord = require('discord.js')


module.exports.run = async(bot, message, args) =>{
    if(message.member.hasPermission('MANAGE_ROLES')) {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];

        const msg = bot.snipes.get(message.channel.id)
        if(!msg)return message.channel.send("There are no deleted messages")
        const embed = new Discord.MessageEmbed()
        .setAuthor(msg.author)
        .setDescription(msg.content)
        if(msg.img)embed.setImage(msg.img)
        message.channel.send(embed)
    }else {
        return message.channel.send('You dont have perms.')
    }

}

module.exports.config = {
    name: "snipe",
    description: "Recovers a recently deleted Message",
    usage: "=snipe",
    accessableby: "ADMINS/BOT COMMANDERS",
    aliases: ["snip"]
}
