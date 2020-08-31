const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {    
    const subReddits = ["NoSanaNoLife"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);

    const embed = new Discord.MessageEmbed()
    .setImage(img)
    .setTitle(`From /r/${random}`)
    .setURL(`http://reddit.com/r/${random}`)
    .setColor('#9FA8DA')
    .setFooter('Dont forget to t!rep the admins')

    message.channel.send(embed);

}

module.exports.config = {
    name: "sana",
    description: "Send an image of Minatozaki Sana",
    usage: "=sana",
    accessableby: "Members",
    aliases: ["sanake", "snake", "shiba", "hamster", "mrtaxi", "taxitaxi", "cheesekimbap", "shyshyshy", "gae"]
}