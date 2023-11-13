const botclub = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+');
    if (!message.guild) {
    const ozelmesajuyari = new botclub.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  if(!yazi) return message.channel.send(`**Lütfen yazı yazınız.** <a:maple_leaf:742698148329291826>`)
  const linqo = `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=karaoke-bar-logo&text=${yazi}`
  .replace(' ', '+')


  const botclub1 = new botclub.MessageEmbed()
  .setTitle("Neon Logo")
  .setColor("RANDOM")
  .setImage(linqo)
  .setFooter('Neon Logo Oluşturuldu')
  message.channel.send(botclub1)
}
exports.conf = {
    aliases: ['neonlogo' , 'neonlg'],
    permLevel: 0,
    kategori: "Eğlence",
};

exports.help = {
    name: 'Neon Logo Atar.',
    description: 'Neon Logo Atar.',
    usage: 'neonlogo <Kullanıcı Adı>',
};