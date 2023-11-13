const WestraDiscord = require('discord.js');
const WestraClient = new WestraDiscord.Client();
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

exports.run = (client, message) => {
 const WestraEmbed = new WestraDiscord.MessageEmbed()
  .setColor(0x36393F)
 .setAuthor(`${client.user.username} | Kullanıcı Yardım Menüsü`)
 .setDescription(`
 **${prefix}davet** \n-> Botu davet edersiniz.
 **${prefix}pp** \n-> Etiketlediğiniz kişinin avatarını gösterir.
 **${prefix}randompp** \n-> Botun ekli olduğu sunuculardaki her hangi birinin avatarını atar.
 **${prefix}öneri** \n-> Bota öneri belirtirsiniz.
 **${prefix}istatistik** \n-> Botun istatistiğini gösterir.
 **${prefix}sonmesaj** \n-> Yazdığınız son mesajı gösterir.
 **${prefix}şikayet** \n-> Bottaki yanlış bir komutu bildirirsiniz.
 **${prefix}afk** \n-> Afk olursunuz.
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
  name: 'kullanıcı',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};