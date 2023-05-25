function message(client, config){

  client.on("messageCreate", async(message) =>{

    if(message.author.bot) return;
    if(message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)){
        return message.reply(`Olá meu prefixo é **${config.prefix}**`)}
    if(!message.content.startsWith(config.prefix)) return;
  
    let user = message.mentions.users.first() || message.author;
    let args = message.content.split(" ").slice(1)
    let command = message.content.split(" ")[0];
    command = command.slice(config.prefix.length);
      try {
          let commandFile = require(`../commands/${command}.js`);
          delete require.cache[require.resolve(`../commands/${command}.js`)];
          return commandFile.run(client, message, args);
      } catch (err) {
        console.log(err)
      }
    })
}
module.exports = {message}
