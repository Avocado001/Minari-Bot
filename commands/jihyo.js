const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
    const subReddits = ["ParkJihyo"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);

    const embed = new Discord.MessageEmbed()
    .setImage(img)
    .setTitle(`From /r/${random}`)
    .setURL(`http://reddit.com/r/${random}`)
    .setColor('#FFB74D')
    .setFooter('Dont forget to t!rep the admins')
    message.channel.send(embed);

}

module.exports.config = {
    name: "jihyo",
    description: "Send an image of Park Jihyo",
    usage: "=jihyo",
    accessableby: "Members",
    aliases: ["leader", "god", "rold", "panginoon", "unicorn", "kangdaniel", "jigglypuff"]
}