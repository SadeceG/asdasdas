const westradiscord = require('discord.js');

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["bilgi", "sunucubilgi", "sunucu-bilgi", "sb"],
  permLevel: 0,
  kategori: "bot",
};

exports.help = {
  name: 'say',
  description: 'westra',
  usage: 'westra',

};
exports.run = async (client, message, args) => {
  const seskanallari = message.guild.channels.cache.filter(c => c.type === 'voice'); 
  let westracc = 0
  let  westrabroo = message.guild.members.cache.filter(m => !m.user.bot && m.user.presence.status !== "offline").size 
  let metinkanallari = message.guild.channels.cache.filter(m => m.type == "text").size; 
  for (const [id, voiceChannel] of seskanallari) westracc += voiceChannel.members.size;
  const westraembed = new westradiscord.MessageEmbed()
  .setColor("0x36393F")
  .setTitle("Hype - Sunucu Bilgi")
  .setFooter("Hype")
  .setTimestamp()
  .setDescription(`
:sparkles: Toplam üye sayısı: **${message.guild.memberCount}**
:sparkles: Toplam çevrimiçi üye sayısı: **${westrabroo}**
:sparkles: Toplam metin kanalı sayısı: **${metinkanallari}**
:sparkles: Toplam ses kanalı sayısı: **${seskanallari.size}**
:sparkles: Toplam çevrimiçi durumda olan üye sayısı: **${message.guild.members.cache.filter(o => o.presence.status === 'online').size}**
:sparkles: Toplam boşta durumda olan üye sayısı: **${message.guild.members.cache.filter(i => i.presence.status === 'idle').size}**
:sparkles: Toplam rahatsız etme durumda olan üye sayısı: **${message.guild.members.cache.filter(i => i.presence.status === 'dnd').size}**
`)
  message.channel.send(westraembed)
  }