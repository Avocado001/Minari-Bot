const https = require('https');
const Discord = require('discord.js');
const url = 'https://www.reddit.com/r/chaeyoung/hot/.json?limit=100'

module.exports.run = async (bot, message, args) => {  

        https.get(url, (result) => {
            var body = ''
            result.on('data', (chunk) => {
                body += chunk
            })

            result.on('end', () => {
                var response = JSON.parse(body)
                var index = response.data.children[Math.floor(Math.random() * 99) + 1].data

                if (index.post_hint !== 'image') {

                    var text = index.selftext
                    const textembed = new Discord.MessageEmbed()
                        .setTitle(subRedditName)
                        .setColor('#FF1744')
                        .setDescription(`[${title}](${link})\n\n${text}`)
                        .setURL(`https://reddit.com/${subRedditName}`)

                    message.channel.send(textembed)
                }

                var image = index.preview.images[0].source.url.replace('&amp;', '&')
                var title = index.title
                var link = 'https://reddit.com' + index.permalink
                var subRedditName = index.subreddit_name_prefixed

                console.log(image);
                const imageembed = new Discord.MessageEmbed()
                    .setTitle(subRedditName)
                    .setImage(image)
                    .setColor('#FF1744')
                    .setDescription(`[${title}](${link})`)
                    .setURL(`https://reddit.com/${subRedditName}`)
                message.channel.send(imageembed)
            }).on('error', function (e) {
                console.log('Got an error: ', e)
            })
        })
}

module.exports.config = {
    name: "chaeyoung",
    description: "Sends a photo of Son Chaeyoung",
    usage: "=chaeyoung",
    accessableby: "Members",
    aliases: ["chae", "cub", "tiger", "smol", "babybeast", "strawberry", "seyoung"]
}
