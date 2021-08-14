const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () =>{
    console.log(`bot ${client.user.tag}`)
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;
  
    if (interaction.commandName === 'ping') {
      await interaction.reply('Pong!');
    }
  });
  
  client.login('ODU0ODI1MDM2ODc5NzU3MzUy.YMpj2g.l8ExDy1YLHvWmy9aRj6VGi8IgaQ')