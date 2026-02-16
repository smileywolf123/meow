const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
  client.user.setPresence({
    status: 'online',
    activities: [{ name: 'Loading Custom Nodes...', type: ActivityType.Custom }],
  });
  console.log(✅ ${client.user.tag} is online!);
});

client.login(process.env.DISCORD_BOT_TOKEN);
