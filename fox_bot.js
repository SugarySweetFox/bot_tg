const TelegramBot = require('node-telegram-bot-api');


const token = '//';


const bot = new TelegramBot(token, {polling: true});


bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const mess = msg.text;

  bot.sendMessage(chatId, mess);
});