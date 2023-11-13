const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, args, member) => {
  const yardım = new Discord.MessageEmbed()
    .setAuthor(`Hype Yardım Menüsü`, client.user.avatarURL())
    .setColor("0x36393F")
    .setThumbnail(client.user.avatarURL())
    .setDescription(`• Hey! <@${message.author.id}> beni kullandığın için teşekkür ederim!\n • Prefixim: **h!**\n • Dilim: **TR** :flag_tr:\n • Üyelik durumu: ${
      db.has(`üyelikk_${message.author.id}`, "üyelik") ? `**Gold üye!**` : `**Normal üye!**`
    }`)
    .addField(" • Kategoriler:", 
      "> • h!kullanıcı: **Kullanıcı yardım menüsünü gösterir.**  • h!moderasyon: **Moderasyon yardım menüsünü gösterir.**  • h!kayıtsistemi: **Kayıt sistemi yardım menüsünü gösterir.**  • h!korumasistemi: **Koruma sistemi yardım menüsünü gösterir.**  • h!logosistemi: **Logo sistemi yardım menüsünü gösterir.**  • h!çekilişsistemi: **Çekiliş sistemi yardım menüsünü gösterir.**  • h!ekonomisistemi: **Ekonomi yardım menüsünü gösterir.**  • h!eğlencesistemi: **Eğlence yardım menüsünü gösterir.**")
    .addField(" • Güncelleme Notları:", "Ekonomi Sistemi!")
    .addField(" • Linkler:", 
      "• **Davet Et:** [Davet Et](https://discord.com/oauth2/authorize?client_id=1014187610828197928&scope=bot&permissions=8) • **Destek Sunucusu:** [Destek Sunucusu](https://discord.gg/DmCDRj9nxv) • **Web Site:** [Web Site](https://hype-bot-site.glitch.me/) • **Top.gg:** [Top.gg](https://top.gg/bot/1014187610828197928/vote)")
    .setFooter(`Hype Bot`)
    .setImage("https://share.creavite.co/uX7H5nxgajpP4cTy.gif")
    .setTimestamp();

  message.channel.send(yardım);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y", "help", "h"],
  permLevel: 0,
};

exports.help = {
  name: "yardım",
  description: "Hype Bot Yardım Menüsü",
  usage: "yardım",
};
