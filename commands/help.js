const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);

    if(helpArgs[0] === 'bot') {
        return message.reply("Please contact @AVOCADO#1747 for more info.")
    }

    if(!helpArgs[0]) {
        var embed = new Discord.MessageEmbed()
            .setAuthor(`Here is the Avaible Commands to use:`)
            .addFields(
                { name: 'List of Commands:', value: '```embed | tempmute | snipe | twice | nayeon | jeongyeon | sana | momo | jihyo | mina | dahyun | chaeyoung | tzuyu```', inline: false},
                { name: 'Prefix', value: '```=```', inline: false},
                { name: 'Command Information', value: '```=help (command)```', inline: false},
                { name: 'Note', value: "```The pictures provided changes depending on the website's post/s -Avocado```", inline: true},
            )
            .setColor('#00FFF3')
            .setThumbnail('https://images-ext-1.discordapp.net/external/6BmEilP-kdiS88W527pf_TyLewrmOE7UlbOv8rveBTo/https/images-ext-1.discordapp.net/external/fpl_K9SRCRp0s6RrB4y4RfW6lHgFivQqMVS9JBFws38/%253Fsize%253D128/https/cdn.discordapp.com/icons/322047437067911170/a_88d1f004e3292afb187abb263e0e3a44.gif')
            .setFooter('For more info please contact @AVOCADO#1747.', 'https://images-ext-1.discordapp.net/external/6BmEilP-kdiS88W527pf_TyLewrmOE7UlbOv8rveBTo/https/images-ext-1.discordapp.net/external/fpl_K9SRCRp0s6RrB4y4RfW6lHgFivQqMVS9JBFws38/%253Fsize%253D128/https/cdn.discordapp.com/icons/322047437067911170/a_88d1f004e3292afb187abb263e0e3a44.gif')
            .setTimestamp()
            .setColor('#00FF00')

        message.channel.send(embed);
    }

    //Reads the moudle.exports.config (This line of code is on commands folder, each command will read automaticly) by the second argument (the command name) and shows the information of it.
    if(helpArgs[0]) {
        let command = helpArgs[0];

        if(bot.commands.has(command)) {
            
            command = bot.commands.get(command);
            var embed = new Discord.MessageEmbed()
            .setAuthor(`${command.config.name} Command`)
            .setDescription(`
            - **Command's Description:** __${command.config.description || "There is no Description for this command."}__
            - **Command's Usage:** __${command.config.usage || "No Usage"}__
            - **Command's Permissions:** __${command.config.accessableby || "Members"}__
            - **Command's Aliases:** __${command.config.aliases || "No Aliases"}__
            `)
            .setColor('#2EFF00')

        message.channel.send(embed);
    }}
}

module.exports.config = {
    name: "help",
    description: "Shows the Commands available",
    usage: "=help",
    accessableby: "Members",
    aliases: ["h"]
}