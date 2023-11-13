const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = (client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Eğlence Sistemi Yardım Menüsü`)
 .setDescription(` **${prefix}ambulans** \n-> Ambulans çağırırsınız.
 **${prefix}hbcay** \n-> Herkese çay ısmarlarsınız.
 **${prefix}aşkölçer** \n-> Etiketlediğiniz kişiyle olan aşkınızı ölçer.
 **${prefix}ateşle** \n-> Etiketlediğiniz kişinin kafasına sıkarsınız.
`)
 .setFooter(`Hype Bot`)
 .setImage("https://share.creavite.co/uX7H5nxgajpP4cTy.gif") 
 .setTimestamp()
 message.channel.send(WestraEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'eğlencesistemi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};