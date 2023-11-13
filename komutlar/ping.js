const WestraDiscord =
      require('discord.js');
const WestraClient =
      new WestraDiscord.Client();
exports.run = (client, message) => {
  if(message.author.id !== "990205109411651604") if(message.author.id !== "990205109411651604") return message.channel.send("Bu Komut, Sahip Komutudur");
const WestraEmbed = new WestraDiscord.MessageEmbed().setColor(0x36393F).setFooter(``).setTimestamp()
.setDescription(`  Ping Değeri Şu An = **${client.ws.ping} ms**`)
message.channel.send(WestraEmbed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};