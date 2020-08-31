const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
    const subReddits = ["MyouiMina"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);

    const embed = new Discord.MessageEmbed()
    .setImage(img)
    .setTitle(`From /r/${random}`)
    .setURL(`http://reddit.com/r/${random}`)
    .setColor('#80CBC4')
    .setFooter('Dont forget to t!rep the admins')

    message.channel.send(embed);

}

module.exports.config = {
    name: "mina",
    description: "Send an image of Myoui Mina",
    usage: "=mina",
    accessableby: "Members",
    aliases: ["minari", "penguin", "sharon", "ketchup", "jombie"]
}