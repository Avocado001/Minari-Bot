const Discord = require('discord.js');
const botsettings = require('./botsettings.json');

const bot = new Discord.Client({disableEveryone: true});

bot.on("guildMemberAdd", member => {
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === '💬✮〢𝐆eneral-𝐂hat')
    welcomeChannel.send (`Wilkins! ${member} , Please proceed to <#726399048726216714> to get your Roles :point_right::point_left: 
    -Janitor ng JT`)
    welcomeChannel.send (`<a:Avocado:756798030274887710> <a:kndrckjvr:756800055490642001>`)
})

require("./util/eventHandler")(bot)

const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js") 
    if(jsfile.length <= 0) {
         return console.log("[LOGS] Couldn't Find Commands!");
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        bot.commands.set(pull.config.name, pull);  
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        });
    });
});

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = botsettings.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = message.content.substring(message.content.indexOf(' ')+1);

    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(bot,message,args)

})

//Deleted Messages
bot.snipes = new Discord.Collection();
bot.on('messageDelete', function(message, channel){
  require("./events/messageDelete")(message);
})
//Deleted Messages

//Incase of Raid

//Insert Auto Kick Snippet(Nakay Avocado)

bot.login(process.env.DJS_TOKEN);
