const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('Just Twaisu')
        .setURL('https://www.youtube.com/channel/UCgA4WojmBRiAzr9IOa7EIpQ')
        .setAuthor('Just Twaisu' , 'https://images-ext-1.discordapp.net/external/6BmEilP-kdiS88W527pf_TyLewrmOE7UlbOv8rveBTo/https/images-ext-1.discordapp.net/external/fpl_K9SRCRp0s6RrB4y4RfW6lHgFivQqMVS9JBFws38/%253Fsize%253D128/https/cdn.discordapp.com/icons/322047437067911170/a_88d1f004e3292afb187abb263e0e3a44.gif')
        .setDescription('Welcome to Just Twaisu\'s YouTube Channel!')
        .setColor('#FF2D00')
        .setThumbnail('https://images-ext-1.discordapp.net/external/6BmEilP-kdiS88W527pf_TyLewrmOE7UlbOv8rveBTo/https/images-ext-1.discordapp.net/external/fpl_K9SRCRp0s6RrB4y4RfW6lHgFivQqMVS9JBFws38/%253Fsize%253D128/https/cdn.discordapp.com/icons/322047437067911170/a_88d1f004e3292afb187abb263e0e3a44.gif')
        .setImage('https://cdn.discordapp.com/attachments/742759883887345726/749975251198279700/Untitled_design_2.png')
        .setFooter('Please Like, Share and Subscribe', 'https://images-ext-1.discordapp.net/external/6BmEilP-kdiS88W527pf_TyLewrmOE7UlbOv8rveBTo/https/images-ext-1.discordapp.net/external/fpl_K9SRCRp0s6RrB4y4RfW6lHgFivQqMVS9JBFws38/%253Fsize%253D128/https/cdn.discordapp.com/icons/322047437067911170/a_88d1f004e3292afb187abb263e0e3a44.gif')
        .addFields(
            { name: 'Information', value: ' We mainly do podcasts every Mondays, Wednesdays, and Fridays at 9 PM, but also upload some replays of our gameplay with our members (Among Us, Skribbl, etc.).', inline: true},
            { name: 'For More&More Information', value: 'Check out our podcast replays and go to the description box for our invite link to share or community!', inline: false},
        )
        .setTimestamp()


    message.channel.send(embed);
}

module.exports.config = {
    name: "embed",
    description: "example of an Embed.",
    usage: "=embed",
    accessableby: "Members",
    aliases: ["yt", "plug", "jt"]
}