const Discord = require("discord.js")

exports.run = async(client, message) => {
	
	let prefix = '.'

	const codare = new Discord.RichEmbed()
       .setAuthor(`MB Development`)
       .setTitle(`https://discord.gg/AwcXmGNyZ5`)
       .setDescription(`\n\nSunucu IP: .........  \n\n TS3 IP: ......  \n\n İyi Roller :) `)
       .setFooter("MrBerk")
      
  return message.channel.send(codare)
}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,
  kategori: "[ genel ]"
};

exports.help = {
  name: 'ip',
  usage: '.ip'
};