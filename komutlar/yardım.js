const Discord = require('discord.js');
let ayarlar = require("../ayarlar.json")

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('<a:maviyildiz:793539752858877952> Botlist Yardım Komutları')
.setTimestamp()
.addField(`<a:maviyildiz:793539752858877952> ${ayarlar.prefix}aboneyardım`, `Abone komutlarını gösyerir`)
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
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
}; 
  