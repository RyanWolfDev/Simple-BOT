const Discord = require("discord.js");
const fs = require("fs");
const c = require("colors");
const client = new Discord.Client();
const config = require("./config.json");
client.config = config;

fs.readdir("./src/events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./src/events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Discord.Collection()

fs.readdir("./src/commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./src/commands/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

client.on('ready', () => {
  let activities = [
          `Teste`,
          `Teste 2`
      ],
      i = 0;
  setInterval(
      () =>

          client.user.setActivity(`${activities[i++ % activities.length]}`, {
              type: "PLAYING"
          }),
       1000 * 2
  );

  client.user.setStatus('online').catch(console.error);
  console.log(c.red('BOT: Iniciado com sucesso!'));
});

client.login(config.token);