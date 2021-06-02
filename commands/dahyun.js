const https = require('https');
const Discord = require('discord.js');
const url = 'https://www.reddit.com/r/dahyun/hot/.json?limit=100'

module.exports.run = async (bot, message, args) => {  

        https.get(url, (result) => {
            let body = ''
            result.on('data', (chunk) => {
                body += chunk
            })

            result.on('end', () => {
                const response = JSON.parse(body)
                const index = response.data.children[Math.floor(Math.random() * 99) + 1].data

                if (index.post_hint !== 'image') {

                    const text = index.selftext
                    const textembed = new Discord.MessageEmbed()
                        .setTitle(subRedditName)
                        .setColor(9384170)
                        .setDescription(`[${title}](${link})\n\n${text}`)
                        .setURL(`https://reddit.com/${subRedditName}`)

                    message.channel.send(textembed)
                }

                const image = index.preview.images[0].source.url.replace('&amp;', '&')
                const title = index.title
                const link = 'https://reddit.com' + index.permalink
                const subRedditName = index.subreddit_name_prefixed

                console.log(image);
                const imageembed = new Discord.MessageEmbed()
                    .setTitle(subRedditName)
                    .setImage(image)
                    .setColor(9384170)
                    .setDescription(`[${title}](${link})`)
                    .setURL(`https://reddit.com/${subRedditName}`)
                message.channel.send(imageembed)
            }).on('error', function (e) {
                console.log('Got an error: ', e)
            })
        })
}

module.exports.config = {
    name: "dahyun",
    description: "Send an image of Kim Dahyun",
    usage: "=dahyun",
    accessableby: "Members",
    aliases: ["dubu", "tofu", "dinosaur", "bibimbap", "bonjuruu", "waowexpensive", "eagle"]
}
