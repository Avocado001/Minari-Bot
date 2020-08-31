const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
    const subReddits = ["Jeongyeon"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);

    const embed = new Discord.MessageEmbed()
    .setImage(img)
    .setTitle(`From /r/${random}`)
    .setURL(`http://reddit.com/r/${random}`)
    .setColor('#AED581')
    .setFooter('Dont forget to t!rep the admins')

    message.channel.send(embed);

}

module.exports.config = {
    name: "jeongyeon",
    description: "Send an image of Yoo Jeongyeon",
    usage: "=jeongyeon",
    accessableby: "Members",
    aliases: ["ostrich", "lizard", "lego", "bulbasaur"]
}