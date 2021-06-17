let Discord = require("discord.js")
let client = new Discord.Client()

client.on('ready', () => {
 client.user.setActivity('prefix $ | .gg/lunary', { type: 'LISTENING' })
   console.log("i am online B)");
})

client.on("message", message => {
  if (message.content.startsWith("$kick")) {
 if (message.member.hasPermission("KICK_MEMBERS")) {
 let member = message.mentions.members.first()
 if (!member) message.channel.send("Please mention someone")
 else {
 member.kick().then(mem => {
 message.channel.send(`Kicked ${mem.user.username}!`)
 })
 }
 } else {
 message.reply("You don't have the permission to do that...")
 }


}})

client.login("UR_TOKEN")
