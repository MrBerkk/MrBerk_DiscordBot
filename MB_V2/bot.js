
// MrBerk V2  Old //

const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);


client.on('ready', () => {
  client.user.setActivity(`http://mrberk.com `);
 })
 
var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm Selam Hoşgeldin');
  }
  if (msg.content.toLowerCase() === 'berk') {
    msg.channel.sendMessage('King ღ ');
  }
  if (msg.content.toLowerCase() === 'adam') {
    msg.reply('https://media.giphy.com/media/ZbMu6BSZQd8jPnlYCp/giphy.gif');
  }
  if (msg.content.toLowerCase() === 'atatürk') {
    msg.reply('https://media.giphy.com/media/ZbMu6BSZQd8jPnlYCp/giphy.gif');
  }
  if (msg.content.toLowerCase() === 'atam') {
    msg.reply('https://media.giphy.com/media/ZbMu6BSZQd8jPnlYCp/giphy.gif');
  }
  if (msg.content.toLowerCase() === 'MrBerk') {
    msg.channel.sendMessage('King ღ ');
  }
  if (msg.content.toLowerCase() === '') {
    msg.channel.sendMessage('');
  }
  if (msg.content.toLowerCase() === '') {
    msg.channel.sendMessage('');
  }
  if (msg.content.toLowerCase() === '') {
    msg.channel.sendMessage('');
  }
  if (msg.content.toLowerCase() === '') {
    msg.channel.sendMessage('');
  }
  if (!msg.content.startsWith(prefix))  {
    return;
  }
  if (msg.content.toLowerCase() === prefix + 'kırmızışortli' ) {
    msg.channel.sendMessage('https://pbs.twimg.com/profile_images/1061371299124129797/KuKSO52x_400x400.jpg')
    msg.channel.sendMessage('https://pbs.twimg.com/profile_images/581071487416729600/GPAcXXgX.jpg')
    msg.channel.sendMessage('https://i.ytimg.com/vi/396gGW4VhM4/mqdefault.jpg')
  
  }

  if (msg.content.toLowerCase() === prefix + '' ) {
    msg.channel.sendMessage('')
    
  }
  if (msg.content.toLowerCase() === prefix + '') {
    msg.channel.sendMessage('')
    msg.channel.sendMessage('')
    msg.channel.sendMessage('')
    msg.channel.sendMessage('');
   
  }
  
  if (msg.content.toLowerCase() === prefix + 'kayıt') {
    msg.reply('<@&782037620216954880> <@&782037619441401906> <@&782037618803736586> <@&782037617683726336> Kayıtta Bekleyen Var İlgilenebilirmisiniz.');
  }
  
  if (msg.content.toLowerCase() === prefix + 'kayit') {
    msg.reply('<@&782037620216954880> <@&782037619441401906> <@&782037618803736586> <@&782037617683726336> Kayıtta Bekleyen Var İlgilenebilirmisiniz.');
  }

  if (msg.content.toLowerCase() === prefix + 'destek') {
    msg.reply('<@&782037620216954880> <@&782037619441401906> <@&782037618803736586> <@&782037617683726336> <@&782037616022782002> <@&782037615300968498> <@&782037614483341313> Desteğe Bekleniyorsunuz');
  }

  if (msg.content.toLowerCase() === prefix + 'Destek') {
    msg.reply('<@&782037620216954880> <@&782037619441401906> <@&782037618803736586> <@&782037617683726336> <@&782037616022782002> <@&782037615300968498> <@&782037614483341313> Desteğe Bekleniyorsunuz');
  }

  if (msg.content.toLowerCase() === prefix + 'destek'){
    msg.channel.sendMessage('https://media.giphy.com/media/H20uwbrYcIh0FUQSnP/giphy.gif')
  }

  if (msg.content.toLowerCase() === prefix + 'aktif'){
    msg.channel.sendMessage('Sunucu Aktif Giriş Yapabilrisiniz. @everyone')
  }
  if (msg.content.toLowerCase() === prefix + 'aktif'){
    msg.channel.sendMessage('https://media.giphy.com/media/H20uwbrYcIh0FUQSnP/giphy.gif')
  }

  if (msg.content.toLowerCase() === prefix + 'bakım'){
    msg.channel.sendMessage('Sunucu Bakıma Alınmıştır. @everyone')
  }

  if (msg.content.toLowerCase() === prefix + 'bakım'){
    msg.channel.sendMessage('https://media.giphy.com/media/H20uwbrYcIh0FUQSnP/giphy.gif')
  }

});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);
