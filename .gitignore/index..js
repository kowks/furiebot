const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function(){
    bot.user.setGame("FurieBot, !help");
    console.log("Le bot a bien ete connecte");
});

bot.login("NTk3NDcyMDg2OTIzMDE4MjUw.XSIliw.1iddK2_jE7TqZHlqrVqT3zuJvlU");
