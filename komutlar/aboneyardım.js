const Discord = require('discord.js');
let ayarlar = require("../ayarlar.json")

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('<a:maviyildiz:793539752858877952> Botlist Yardım Komutları')
.setTimestamp()
.addField(`<a:maviyildiz:793539752858877952> ${ayarlar.prefix}abone`, `Abone rolü verir`)
.addField(`<a:maviyildiz:793539752858877952> ${ayarlar.prefix}aboneyrol`, `Yetkili Rolü Ayarlarsınız`)
.addField(`<a:maviyildiz:793539752858877952> ${ayarlar.prefix}abonerol`, `Abone Rolü Ayarlarsınız`)
.addField(`<a:maviyildiz:793539752858877952> ${ayarlar.prefix}abonelog`, `Abone Logunu Ayarlarsınız`)
.setImage('https://media.discordapp.net/attachments/769281758977458176/783299061012234260/standard_21.gif')
.setFooter('Cowboy', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'aboneyardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
}; 
  