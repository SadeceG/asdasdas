const HypeDiscord = require('discord.js');
const HypeClient = new HypeDiscord.Client();
exports.run = (client, message) => {
  const HypeEmbed = new HypeDiscord.MessageEmbed();
 HypeEmbed.setColor(0x36393F)
  HypeEmbed.setDescription(`  **Botu Davet etmek için** [**Buraya Tıkla**](https://discord.com/oauth2/authorize?client_id=1014187610828197928&scope=bot&permissions=8)`)
  message.channel.send(HypeEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};