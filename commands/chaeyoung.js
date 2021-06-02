const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
    const subReddits = ["chaeyoung"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);

    const embed = new Discord.MessageEmbed()
    .setImage(img)
    .setTitle(`From /r/${random}`)
    .setURL(`http://reddit.com/r/${random}`)
    .setColor('#FF1744')
    .setFooter('Dont forget to t!rep the admins')

    message.channel.send(embed);

}

module.exports.config = {
    name: "chaeyoung",
    description: "Send an image of Son Chaeyoung",
    usage: "=chaeyoung",
    accessableby: "Members",
    aliases: ["chae", "cub", "tiger", "smol", "babybeast", "strawberry", "seyoung"]
}
