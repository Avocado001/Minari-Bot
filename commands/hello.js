module.exports.run = async (bot, message, args) => {
      message.reply('Sup')
}

module.exports.config = {
    name: "hello",
    description: "Reply Hello to Minari Bot",
    usage: "=hello",
    accessableby: "Members",
    aliases: ["hey"]
}