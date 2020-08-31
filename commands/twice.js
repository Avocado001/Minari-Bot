const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
    const subReddits = ["twicemedia"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);

    const embed = new Discord.MessageEmbed()
    .setImage(img)
    .setTitle(`From /r/${random}`)
    .setURL(`http://reddit.com/r/${random}`)
    .setColor('RANDOM')

    message.channel.send(embed);

}

module.exports.config = {
    name: "twice",
    description: "Send a random Picture of a random **Member**",
    usage: "=twice",
    accessableby: "Members",
    aliases: ["2ice", "babies"]
}