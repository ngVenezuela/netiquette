var TelegramBot = require('node-telegram-bot-api');
var rules = require('./rules');
var token = process.env.TELEGRAM_BOT_TOKEN;
var bot = new TelegramBot(token, {polling: true});

bot.on('text', function(msg) {
  console.log(msg);
  var isGroup = !!(msg.chat.title);
  
  var chatId = msg.chat.id;
  var normas = rules[0].text;
  
  if (msg.text.indexOf("/normas") !== -1) {
    if (isGroup && msg.text.indexOf("@NetiquetteBot") !== -1)
      bot.sendMessage(chatId, normas);
    else if (!isGroup)
      bot.sendMessage(chatId, normas);
  }
});
