module.exports.run = async(client, message, args) =>{
    message.delete();
    const messageSend = args.join(" ")
    if(!messageSend) return message.channel.send('Escreva uma mensagem para mim')
    message.channel.send(messageSend)
}