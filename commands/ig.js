const axios = require('axios')
const { MessageEmbed } = require('discord.js');
module.exports = {
    run: async (bot, message, args) => {
        const messageArray = message.content.split(' ');
        const arg = messageArray.slice(1);
        if (!arg[0]) {
            return message.channel.send(`Please Enter a Channel Name`)
        }
        let url, response, account, details;
        try {
            url = `https://instagram.com/${arg[0]}/?__a=1`;
            response = await axios.get(url)
            account = response.data
            details = account.graphql.user
        } catch (error) {
            return message.channel.send(`Account does not exist.`)
        }

        const embed = new MessageEmbed()
            .setTitle(`${details.is_verified ? `${details.username} <a:emoji_1:752043230606000209>` : ` ${details.username}`} ${details.is_private ? '🔒' : ''} `)
            .setDescription(details.biography)
            .setThumbnail(details.profile_pic_url)
            .addFields(
                {
                    name: "Total Posts:",
                    value: details.edge_owner_to_timeline_media.count.toLocaleString(),
                    inline: true
                },
                {
                    name: "Followers:",
                    value: details.edge_followed_by.count.toLocaleString(),
                    inline: true
                },
                {
                    name: "Following",
                    value: details.edge_follow.count.toLocaleString(),
                    inline: true
                }
            )
await message.channel.send(embed)

    }
}

    module.exports.config = {
        name: "instagram",
        description: "Sends a Yotube Channel's Information",
        usage: "=ig",
        accessableby: "Members",
        aliases: ['insta', 'ig']
    }