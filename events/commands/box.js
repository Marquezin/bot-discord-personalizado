const Discord = require('discord.js'), convertColor = require('../../utils/colorEmbed/color')
module.exports.run = async(client, message, args) =>{
    message.delete();

    if(!args[0]) return message.channel.send("Escreva uma cor para mandar uma mensagem!")
    const color = convertColor.color(args[0].toLowerCase())
    const messages = args.slice(1).join(" ")
    if(!messages) return message.channel.send("Escreva uma mensagem para mim mandar!")
    let embed = new Discord.EmbedBuilder()
    .setThumbnail(message.client.user.displayAvatarURL())
    .setDescription(`${messages}`)
    .setColor(color)
    .setTimestamp()
    message.channel.send({embeds: [embed]})

}   