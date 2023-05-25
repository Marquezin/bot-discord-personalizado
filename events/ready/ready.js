function ready(client){
    client.on("ready", () =>{
        console.log(`Estou online: ${client.user.username}`)
    })
}
module.exports = {ready};