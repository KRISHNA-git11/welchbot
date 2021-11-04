const { Client } = require('discord.js');
const { botIntents } = require('./config/config');
const config = require('./config/default');

const client = new Client({
  intents: botIntents,
  partials: ['CHANNEL', 'MESSAGE'],
});

client.on('ready', () => {
  console.log('Logged in as' + client.user.tag);
});

client.login(config.DISCORD_TOKEN);
