var TelegramBot = require('node-telegram-bot-api');

var token = process.env.TELEGRAM_BOT_TOKEN;
// Setup polling way
var bot = new TelegramBot(token, {polling: true});
bot.on('text', function (msg) {
  console.log(msg);
  var chatId = msg.chat.id;
  var normas = "Regla 1: Nunca olvide que la persona que lee el mensaje es otro ser humano con sentimientos que pueden ser lastimados.\n\n";
  normas += "Regla 2: Adhiérase a los mismos estándares de comportamiento en línea que usted sigue en la vida real.\n\n";
  normas += "Regla 3: Escribir todo en mayúsculas se considera como gritar y además, dificulta la lectura.\n\n";
  normas += "Regla 4: Respete el tiempo y el ancho de banda de otras personas.\n\n";
  normas += "Regla 5: Muestre el lado bueno de sí mismo mientras se mantenga en línea.\n\n";
  normas += "Regla 6: Comparta con la comunidad.\n\n";
  normas += "Regla 7: Ayude a mantener los debates en un ambiente sano y educativo.\n\n";
  normas += "Regla 8: Respete la privacidad de terceras personas, hacer un grupo contra una persona está mal.\n\n";
  normas += "Regla 9: No abuse de su poder (ordenador).\n\n";
  normas += "Regla 10: Sea objetivo sobre temas cuyo bien primordial no afecte el general.\n\n";
  if(msg.text == "/normas" || msg.text == "/normas@NetiquetteBot")
    bot.sendMessage(chatId, normas)
});
