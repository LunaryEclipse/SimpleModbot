let Discord = require("discord.js")
let client = new Discord.Client()

client.on('ready', () => {
 client.user.setActivity('prefix $ | .gg/lunary', { type: 'LISTENING' })
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
    
    
 if (message.content.startsWith('$ban')) {
if(message.member.hasPermission("BAN_MEMBERS")) {
 const user = message.mentions.users.first();
 
 if (user) {
 
 const member = message.guild.member(user);

 if (member) {

 member
 .ban({
 reason: 'They were bad!',
 })
 .then(() => {
 // We let the message author know we were able to ban the person
 message.reply("Successfully banned ${user.tag}");
 })
 .catch(err => {

 message.reply("I was unable to ban the member");
 
 console.error(err);
 });
 } else {
 
 message.reply("That user isn't in this guild!");
 }
 } else {
 
 message.reply("You didn't mention the user to ban!");
 }
 }
}
    if(message.content.toLowerCase().startsWith("$slowmode")){
 if (message.member.hasPermission("MANAGE_CHANNELS")) {
 let sentence = message.content.split(" ");
 sentence.shift();
 sentence = sentence.join(" "); 
 if(sentence != null){
 message.channel.setRateLimitPerUser(sentence);
 }

 message.reply(`This chat now has a slowmode of ${sentence} seconds!`)
 } else {
 message.reply("You don't have perms to do that...")
 } 
}
     if(message.content === "$lock") {
 let embedYes = new Discord.MessageEmbed()
 .setDescription("Channel Locked.")
 .setFooter("Use $unlock to unlock the channel again.")
 .setColor("GREEN")
 if(message.member.hasPermission("MANAGE_CHANNELS")) {
 message.channel.send(embedYes)
 message.channel.updateOverwrite(message.guild.roles.everyone, {
SEND_MESSAGES: false
});
 } else {
 let embed2 = new Discord.MessageEmbed()
 .setTitle("Error")
 .setColor("RED")
 .setDescription("You don't have permission to use this command.")
 message.channel.send(embed2)
 }
 }
     if(message.content === "$unlock") {
 let embedNo = new Discord.MessageEmbed()
 .setDescription("Channel Unlocked.")
 .setColor("GREEN")
 if(message.member.hasPermission("MANAGE_CHANNELS")) {
 message.channel.send(embedNo)
 message.channel.updateOverwrite(message.guild.roles.everyone, {
SEND_MESSAGES: true
});
 } else {
 let embed = new Discord.MessageEmbed()
 .setTitle("Error")
 .setColor("RED")
 .setDescription("You don't have permission to use this command.")
 message.channel.send(embed)
 }
 }
    if(message.content.startsWith(`$eval`)){

const notowner = new Discord.MessageEmbed()
.setDescription("Only the bot owner can use this command")
.setColor("RED")
const owners_id = ["YOUR_ID"];
 if (!owners_id.includes(message.author.id))
 return message.channel.send(notowner); const args2 = message.content.split(" ").slice(1);

 const clean = text => {
 if (typeof(text) === "string")
 return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
 else
 return text;
}
 
 try {
 const code = args2.join(" ");
 let evaled = eval(code);
const lmao = message.content.slice("".length).trim().split(/ +/);
lmao.shift().toLowerCase().split(" ")[0]
msg.channel.send(lmao.join(" "))
 const { inspect } = require("util");
const output = clean(evaled)

 const eval2 = new Discord.MessageEmbed()
 .addField("Input", `\`\`\`js\n${lmao.join(" ")}\`\`\``)
 .addField("Output", `\`\`\`js\n${output}\`\`\``)
 
 // msg.channel.send(clean(evaled));
 message.channel.send(eval2)
 } catch (err) {
 message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
 }
};
 })}
