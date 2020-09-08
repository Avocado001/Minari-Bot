const ms = require('ms');
//npm i ms
module.exports.run = async (bot, message, argsode ) => {

    let messageArray = message.content.split(" ");
    let arg = messageArray.slice(1);
    let cmd = messageArray[0];

     if(cmd === '/tempmute', '/mute'){
        if(message.member.hasPermission('MANAGE_ROLES')) {
            var member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(arg[0]));
            if(!member) return message.reply('Please Provide a Member to TempMute.')

            //Immunity Section
            if (member.roles.cache.some(r=>["Bot Commander 🔰"].includes(r.name)) ) {
                return message.reply("Minari cant musically mute the ones who made me<a:minablush:752739433458958336>")
              }

              if (member.roles.cache.some(r=>["JY 🍭 Park"].includes(r.name)) ) {
                return message.reply("Minari cant musically mute PDnim<a:minaoops:752739151409053798>")
              }

              if (member.roles.cache.some(r=>["JYP Staff ✴️"].includes(r.name)) ) {
                return message.reply("Minari cant musically mute JYP Staffs<a:minano:752747074394652702>")
              }

              if (member.roles.cache.some(r=>["🔌 Bots🤖"].includes(r.name)) ) {
                return message.reply("You cant musically mute bots silly<a:minabang:752735962068549672>")
              }
              //Immunity Section

            let mainrole = message.guild.roles.cache.find(role => role.name === "Music Perms");//Gawa tayo bagong role para dito
            let role = message.guild.roles.cache.find(role => role.name === "Musically Muted");//Change me to Musically Muted

            if (!role) return message.reply("Minari can't find JYP's 'Musically Muted' role.")

            let time = arg[1];
            if (!time) {
                return message.reply("Please specify a time!:confused:");
            }

            member.roles.remove(mainrole.id)
            member.roles.add(role.id);

            message.channel.send(`Minari musically muted @${member.user.tag} for ${ms(ms(time))}`)

            setTimeout( function () {
                member.roles.add(mainrole.id)
                member.roles.remove(role.id);
                message.channel.send(`@${member.user.tag} has been unmuted, Please don't troll:innocent:`)
            }, ms(time));

        } else {
            return message.channel.send('You dont have perms.')
        }
    }
}

module.exports.config = {
    name: "tempmute",
    description: "",
    usage: "=tempmute",
    accessableby: "ADMINS/BOT COMMANDERS",
    aliases: ["addrole", "mute"]
}