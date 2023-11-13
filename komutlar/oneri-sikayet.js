
const Discord = require('discord.js')

exports.run = (client, message, args) => {
    if(args[0] === "şikayet"){
        let hypeikayet = args.slice(1).join(' ');
        let channel = message.guild.channels.cache.filter((channel) => channel.type === "text").first();

        channel.createInvite().then(hypeinvite => {
            if(!hypeikayet){
                const hype = new Discord.MessageEmbed()
                .setDescription(`**Şikayetinizi belirtin**`)
                .setColor('RED')
                return message.channel.send(hype)
            } else {
                const hype = new Discord.MessageEmbed()
                .setDescription(`**Şikayetiniz yetkili ekibe iletild.**`)
                .setColor('GREEN')
                message.channel.send(hype)
    
                client.channels.cache.get('1016027771924906035').send(new Discord.MessageEmbed().setDescription(`${message.author} İsimli Kişinin Şikayeti **${hypeikayet}**`).setColor('YELLOW').setFooter('Hype'))
            }
        })
    }

    if(args[0] === "öneri"){
        let hypeoneri = args.slice(1).join(' ');
        let channel = message.guild.channels.cache.filter((channel) => channel.type === "text").first();

        channel.createInvite().then(hypeinvite => {
            if(!hypeoneri){
                const hype = new Discord.MessageEmbed()
                .setDescription(`**Önerinizi belirtin**`)
                .setColor('RED')
                return message.channel.send(hype)
            } else {
                const hype = new Discord.MessageEmbed()
                .setDescription(`**Öneriniz yetkili ekibe iletildi**`)
                .setColor('GREEN')
                message.channel.send(hype)
    
                client.channels.cache.get('1016027771924906035').send(new Discord.MessageEmbed().setDescription(`${message.author} İsimli Kişinin Önerisi **${hypeoneri}**`).setColor('BLUE').setFooter('Hype'))
            }
        })
    }
    if(args[0] === "bug"){
        let hypebug = args.slice(1).join(' ');
        let channel = message.guild.channels.cache.filter((channel) => channel.type === "text").first();

        channel.createInvite().then(hypeinvite => {
            if(!hypebug){
                const hype = new Discord.MessageEmbed()
                .setDescription(`**Yaşadığınız bugu belirtin**`)
                .setColor('RED')
                return message.channel.send(hype)
            } else {
                const hype = new Discord.MessageEmbed()
                .setDescription(`**Bug bildirisi başarıyla yetkili ekibine iletildi**`)
                .setColor('GREEN')
                message.channel.send(hype)
    
                client.channels.cache.get('914147025552031754').send(new Discord.MessageEmbed().setDescription(`${message.author} İsimli Kişinin Bug Bildirisi **${hypebug}**`).setColor('RED').setFooter('Hype'))
            }
        })
    }
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['Bildir','BİLDİR'],
permLevel: 0
}

exports.help = {
name: 'bildir'
}
