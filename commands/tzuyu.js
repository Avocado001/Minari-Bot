const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
    const subReddits = ["tzuyu"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);

    const embed = new Discord.MessageEmbed()
    .setImage(img)
    .setTitle(`From /r/${random}`)
    .setURL(`http://reddit.com/r/${random}`)
    .setColor('#0277BD')
    .setFooter('Dont forget to t!rep the admins')

    message.channel.send(embed);

}

module.exports.config = {
    name: "tzuyu",
    description: "Send an image of Chou Tzuyu",
    usage: "=tzuyu",
    accessableby: "Members",
    aliases: ["savage", "maknae", "yoda", "squirrel", "maleficent", "bread"]
}