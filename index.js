const { CommandoClient } = require('discord.js-commando');
const { Structures } = require('discord.js');
const path = require('path');
const { prefix, token } = require('./config.json');

Structures.extend('Guild', function(Guild) {
  class MusicGuild extends Guild {
    constructor(client, data) {
      super(client, data);
      this.musicData = {
        queue: [],
        isPlaying: false,
        nowPlaying: null,
        songDispatcher: null,
        volume: 1
      };
      this.triviaData = {
        isTriviaRunning: false,
        wasTriviaEndCalled: false,
        triviaQueue: [],
        triviaScore: new Map()
      };
    }
  }
  return MusicGuild;
});

const client = new CommandoClient({
  commandPrefix: prefix,
  owner: '211774244294623243',
  invite: 'https://discord.gg/ZsSx8XB'
});

client.registry
  .registerDefaultTypes()
  .registerGroups([
    ['music', 'Music Commands'],
    ['gif', 'GIF Generate'],
    ['moderation', 'Server Moderation'],
    ['auto', 'Auto Reply'],
    ['info', 'Informations'],
    ['others', 'Other Commands']
  ])
  .registerDefaultGroups()
  .registerDefaultCommands({
    eval: false,
    unknowmCommand: false,
    commandState: false
  })
  .registerCommandsIn(path.join(__dirname, 'commands'));

client.once('ready', () => {
  console.log('Ready!');
  let activities = [`v${version}`, `${client.guilds.cache.size} servers`, `${client.channels.cache.size} channels`, `${client.registry.commands.size} commands`, `${client.users.cache.size} users` ], i=0;
  setInterval(() => client.user.setActivity(`Music | ${prefix}help | ${activities[i++ % activities.length]}`, {type: 'LISTENING'}), 10000); //1000 is equals to 1 second
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'joins-and-leaves'); 
  if (!channel) return;
  channel.send(`Welcome ${member} | ${member.user.tag}!`);
});

client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'joins-and-leaves'); 
  if (!channel) return;
  channel.send(`${member} | ${member.user.tag} has left the server.`);
});

client.on('message', async message => {
   let embed = new MessageEmbed()
    .setColor('#5dc4ff')
    .setDescription(`Hey there **${message.author.tag}**! \n• Want to know my prefix? \n\`gin\` | \`gin help\` \n\`@Gin-san#5627\` | \`@Gin-san#5627 help\``)
    if (message.content === `<@!${client.user.id}>` || message.content === `<@${client.user.id}>`)
    return message.channel.send(embed);
});

client.login(token);
