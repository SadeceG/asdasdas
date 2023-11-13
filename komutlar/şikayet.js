const Discord = require('discord.js')

    exports.run = async(client, message, args) => {
        let sikayetmesaj = args.slice(0).join(' ')
        
        if(!sikayetmesaj){
            const cmfhata = new Discord.MessageEmbed()
            .setDescription(`**Şikayetini/Önerini Girmen Gerekiyor**`)
            .setColor('#ff0000')
            return message.channel.send(cmfhata)
        }

        // Zaman
        var zaman = new Date(); 
        var zaman = zaman.getDate() + "/"+ (zaman.getMonth()+1)  + "/" + zaman.getFullYear() + " - " + zaman.getHours() + ":" + zaman.getMinutes() + ":" + zaman.getSeconds();

        // Sunucunun İnvitesi İçin
        if(sikayetmesaj){
            message.channel.createInvite().then(inv => {
                const sikayet = new Discord.MessageEmbed()
                .setDescription(`
                    **${message.guild.name}** Adlı Sunucudan ${message.author} Kişisi Bot Hakkında Şikayette/Öneride Bulundu, Edilen Şikayet/Öneri: **${sikayetmesaj}**\n
                    **Sunucunun Linki**: ${inv.url}
                `)
                .setColor('RANDOM')
                .setTitle(`**Şikayet/Öneri Var**`)
                .setFooter(zaman)
                client.channels.cache.get('1014193356328415272').send(sikayet)
            })

        }
    }


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Şikayet','Report','öneri','REPORT','report'],
    permLevel: 0
}

exports.help = {
    name: 'şikayet'
}