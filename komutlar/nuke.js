 const Discord = require("discord.js");

module.exports.run = async(client,message,args) => {

 if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("`Bu Komutu Kullanmak İçin Kanalları Yönet Yetkisine Sahip Olmalısın!`");
let csc = message.channel
   let kategoriID = csc.parentID;
              csc.clone().then(z => {
                let chn = message.guild.channels.find(x => x.id === z.id);
                if (kategoriID) {
                  chn.setParent(message.guild.channels.find(s => s.id === kategoriID));
                }
              });
  message.channel.delete();
 
};
module.exports.conf = {
enabled: true,
guildOnly: false,
aliases:[],
permLevel: 0
};
module.exports.help = {
  name: 'nuke',
  description: 'Kanalı Siler Aynı Özelliklere Sahip Kanal Açar.',
  usage: 'nuke'
};