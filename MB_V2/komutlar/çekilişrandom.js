const Discord = require('discord.js');
exports.run = function(client, message, args) {



    const çekiliş = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTitle("MrBerk Çekiliş Sistemi 2", true)
    .addField("Çekilişi Yapan:", `<@${message.author.id}>`, true)
    .addField("Çekilişin Yapıldığı Kanal:", message.channel)
    .addField("Çekilişin Yapıldığı Zaman:", message.createdAt)
    .addField(`Çekilişi Kazanan:`, `<@${message.guild.members.random().id}>`, true)
     .addField(`Yedek Çekilişi Kazanan:`, `<@${message.guild.members.random().id}>`, true)
     .addField(`Yedek Çekilişi Kazanan (2):`, `<@${message.guild.members.random().id}>`, true)
    .setColor("RANDOM")
    .setDescription('')
      message.react('756525012826980446')
    return message.channel.sendEmbed(çekiliş);

    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["çekilişyap","çekiliş-yap","hızlı-çekiliş"],
  kategori: 'çekiliş',
  permLevel: 2,
  kategori: "[ admin ]"
};

exports.help = {
  name: 'hızlıçekiliş',
  description: 'Çekiliş yapar. (Random Hızlı Çekiliş)',
  usage: 'hızlıçekiliş'
};