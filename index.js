const Discord = require('discord.js-selfbot-v13');
const config = require('./config.js');
const { Listr } = require('listr2');

const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

client.on('ready', async () => {
    const tasks = new Listr(
        [
            {
                title: 'Clear Console',
                task: async () => {
                    console.clear();
                }
            },
            {
                title: 'Log Status',
                task: async (ctx, task) => {
                    console.log(`${client.user.tag} - rich presence started!`);
                }
            },
            {
                title: 'Set Rich Presence',
                task: async () => {
                    const r = new Discord.RichPresence()
                        .setApplicationId('1200725210656145479')
                        .setType('PLAYING')
                        .setURL('https://www.youtube.com/@ZenithSenpai')
                        .setState('Join Now')
                        .setName('Zsenpai')
                        .setDetails('Discord Bots Developer')
                        .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1232717204093538347/1243472575783505960/1716453832479.png?ex=66519994&is=66504814&hm=1fdc89f018984cdf5d07ade7c18033c38fd63615c26b02cc2cb738fc41c3e84d&')
                        .setAssetsLargeText('Visit this')
                        .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1232717204093538347/1243472756486443038/3d-rendering-blue-verified-sign-isolated-png.webp?ex=665199bf&is=6650483f&hm=44ffd82328f217358811143007f64408b7b42d5682e3e27bb40249e70d80a3bb&')
                        .setAssetsSmallText('Verified')
                        .addButton('Yt Channel', 'https://www.youtube.com/@ZenithSenpai')
                        .addButton('Discord Server', 'https://discord.gg/AQJAuaTckj');

                    client.user.setActivity(r);
                    client.user.setPresence({ status: 'dnd' });
                }
            }
        ],
        {
            concurrent: false // Set to true if you want tasks to run concurrently
        }
    );

    await tasks.run(); // Execute the list of tasks
});

client.login(config.token);
