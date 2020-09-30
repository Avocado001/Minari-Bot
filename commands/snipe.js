const Discord = require('discord.js')


module.exports.run = (bot, message, args) =>{
    if (message.member.roles.cache.some(r=>["Bot Commander 🔰", "JY 🍭 Park", "JYP Staff ✴️","Youtube Channel Admin ▶️","Turbo Master 💎"].includes(r.name)) ) {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];

        const snipes = bot.snipes.get(message.channel.id) || [];
	const msg = snipes[args[0] - 1 || 0];

        if (!msg) {
		const embed = new Discord.MessageEmbed()
			.setDescription("Snipes not available");
		return message.channel.send(embed);
	}

        const embed = new Discord.MessageEmbed()
	        .setAuthor(
			msg.author.tag,
        		msg.author.displayAvatarURL({ dynamic: true, size: 256 })
	 	)
	      	.setDescription(msg.content)
		.setFooter(`Date: ${msg.date} | ${args[0] || 1}/${snipes.length}`);

	if (msg.attachment) embed.setImage(msg.attachment);
	message.channel.send(embed)
    } else {
	const embed = new Discord.MessageEmbed()
                        .setDescription("You need some milk. (You don\'t have permissions to do this).");
        return message.channel.send(embed);
    }

}

module.exports.config = {
    name: "snipe",
    description: "Recovers a recently deleted Message",
    usage: "=snipe",
    accessableby: "ADMINS/BOT COMMANDERS",
    aliases: ["snip"]
}
