const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
    const subReddits = ["twicememes"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);

    const embed = new Discord.MessageEmbed()
    .setImage(img)
    .setTitle(`From /r/${random}`)
    .setURL(`http://reddit.com/r/${random}`)

    message.channel.send(embed);

}

module.exports.config = {
    name: "meme",
    description: "Sends a Twice Meme",
    usage: "=meme",
    accessableby: "Members",
    aliases: ["memes", "twicememe"]
}