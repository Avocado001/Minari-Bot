const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            let memeUpvotes = content[0].data.children[0].data.ups;
            let memeDownvotes = content[0].data.children[0].data.downs;
            let memeNumComments = content[0].data.children[0].data.num_comments;
    
    got('https://www.reddit.com/r/memes/random/.json').then(response => {
            const embed = new Discord.MessageEmbed()
            .setTitle(`${memeTitle}`)
            .setURL(`${memeUrl}`)
            .setImage(memeImage)
            .setColor('RANDOM')
            .setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`)
            
            message.channel.send(embed);
        })
    }

}

module.exports.config = {
    name: "chaeyoung",
    description: "Send an image of Son Chaeyoung",
    usage: "=chaeyoung",
    accessableby: "Members",
    aliases: ["chae", "cub", "tiger", "smol", "babybeast", "strawberry", "seyoung"]
}
