var TelegramBot = require('node-telegram-bot-api');
var rules = require('./rules');
var token = process.env.TELEGRAM_BOT_TOKEN;
var bot = new TelegramBot(token, {polling: true});
bot.on('text', function (msg) {
  console.log(msg);
  var chatId = msg.chat.id;
  var normas = rules[0].text;
  if(msg.text == "/normas" || msg.text == "/normas@NetiquetteBot")
    bot.sendMessage(chatId, normas)
});