module.exports.run = async (bot, message) => {
    const messageArray = message.content.split(' ');
	const args = messageArray.slice(1);

    if (!message.member.permissions.has("MANAGE_MESSAGES")) {
	    return message.channel.send('Lack of Perms!')
	    .then(msg => msg.delete({timeout:5000}));
    }
    
    let deleteAmount;

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) { 
	return message.reply('Please put a number only!') 
	.then(msg => msg.delete({timeout:5000}))
    }

    if (parseInt(args[0]) > 100) {
        return message.reply('You can only delete 100 messages at a time!')
	.then(msg => msg.delete({timeout:5000}))
    } else {
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount + 1, true);
    message.reply(`**Minari** Defeated ***${deleteAmount}*** Messages.`).then(msg => msg.delete({timeout:5000}))
}

module.exports.config = {
    name: "purge",
    description: "Purges the chat channel",
    usage: "=purge",
    accessableby: "ADMINS",
    aliases: ["prune", "clear", "delete"]
}
