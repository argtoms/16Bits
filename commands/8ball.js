const Discord = require("discord.js");
const colors = require("../lib/colors.json");
exports.run = async (client, message, args) => {
  try {
    const prefix =
      message.guild === null
        ? ";;"
        : client.getSettings(message.guild.id).prefix;
    const results = ["Yes.", "No.", "Maybe."];
    const result = results[Math.floor(Math.random() * results.length)];
    const input = args.join(" ");

    if (!input) {
      const embed = new Discord.MessageEmbed()
        .setColor(colors.red)
        .setTitle("Invalid Syntax")
        .setDescription(
          `\`${prefix}8ball [message]\`\n\nIf question contains "who" or "whose", a random member from the guild will be chosen.`
        );

      message.channel.send(embed);
    } else {
      if (message.content.includes("who") || message.content.includes("Who")) {
        if (message.channel.type === "dm") {
          const member = ["You.", "Me."];
          const result = member[Math.floor(Math.random() * member.length)];
          message.channel.send(`${result}`);
        }
        var member = message.guild.members.cache.random();
        const embed = new Discord.MessageEmbed()
          .setColor(colors.default)
          .setThumbnail(member.avatarURL)
          .addField(member.displayName, `<@${member.id}>`)
          .setTimestamp()
        message.channel.send(embed);
      } else {
        message.channel.send(result);
      }
    }
  } catch (err) {
    message.channel.send(client.errors.genericError + err.stack).catch();
  }
}

exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: "User",
};

exports.help = {
  name: "8ball",
  category: "Utility",
  description: "Ask the mighty 8ball a question.",
  usage: "8ball <question>",
};
