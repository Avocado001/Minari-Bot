module.exports.run = async (bot, message, args) => {
    return message.reply("Hello")
}

module.exports.config = {
    name: "hi",
    description: "Reply Hi to Minari Bot",
    usage: "=hi",
    accessableby: "Members",
    aliases: ['h']
}