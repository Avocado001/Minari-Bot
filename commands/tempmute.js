const ms = require('ms');
const botsettings = require('../botsettings.json');
//npm i ms
module.exports.run = async (bot, message, argsode ) => {

    let messageArray = message.content.split(" ");
    let arg = messageArray.slice(1);
    let cmd = messageArray[0];

     if(cmd === `${botsettings.prefix}tempmute`, `${botsettings.prefix}mute`){
        if(message.member.hasPermission('MANAGE_ROLES')) {
            var member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(arg[0]));
            if(!member) return message.reply('Please Provide a Member to TempMute.')

            	let mainrole = message.guild.roles.cache.find(role => role.name === "Music Perms");//Gawa tayo bagong role para dito
	    let role = message.guild.roles.cache.find(role => role.name === "Musically Muted");//Change me to Musically Muted

            if (!role) return message.reply("Couldn't find the 'muted' role.")

            let time = arg[1];
            if (!time) {
                return message.reply("You didnt specify a time!");
            }

            member.roles.remove(mainrole.id)
            member.roles.add(role.id);

            message.channel.send(`@${member.user.tag} has now been muted for ${ms(ms(time))}`)

            setTimeout( function () {
                member.roles.add(mainrole.id)
                member.roles.remove(role.id);
                message.channel.send(`@${member.user.tag} has been unmuted.`)
            }, ms(time));

        } else {
            return message.channel.send('You dont have perms.')
        }
    }
}

module.exports.config = {
    name: "tempmute",
    description: "",
    usage: "/mute",
    accessableby: "ADMINS/BOT COMMANDERS",
    aliases: ["addrole", "mute"]
}
