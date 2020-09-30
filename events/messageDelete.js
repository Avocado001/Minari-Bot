const { MessageEmbed } = require("discord.js");
const moment = require('moment');
module.exports = async (message) => {
  try {
    if (message.author.bot) return;
    const snipes = message.client.snipes.get(message.channel.id) || [];
    snipes.unshift({
      content: message.content,
      author: message.author,
      image: message.attachments.first()
        ? message.attachments.first().proxyURL
        : null,
      date: moment().utc().utcOffset(8).format('YYYY-MM-DD hh:mm:ss A'),
    });
    snipes.splice(10);
    message.client.snipes.set(message.channel.id, snipes);
  } catch (e) {
	console.log(e);
  }
};
