const Discord = require("discord.js");
const token = "-";
var bot = new Discord.Client();

bot.on ("ready", function() {
    console.log(`${bot.user.name} is online`);
    
});

bot.on("message", function(message) { 
    if (message.author.equals(bot.user)) return;

    if (message.content === "gay") {
        message.channel.sendMessage("I know you are, but what am I?");

        }
    
    bot.login(token);
}); 