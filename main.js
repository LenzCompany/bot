
const { ButtonBuilder, Client, Events, CommandHandler, Ctx } = require("@mengkodingan/ckptw")
const path = require('path')

//SETTINGS
global.apii = "https://api.ndaadev.us.kg/api/"


const bot = new Client({
    prefix: /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#%^&./\\©^]/,
    printQRInTerminal: false,
    readIncommingMsg: true,
    usePairingCode: true,
    phoneNumber: '62856405754212', // phone number, e.g 62xxxxx
    WAVersion: [2, 3000, 1017531287],
});

bot.ev.once(Events.ClientReady, (m) => {
    console.log(`BOT ONLINE!!\nNomor : ${m.user.id}`);
});

// register command handler
const cmd = new CommandHandler(bot, path.resolve() + '/commands');
cmd.load()

bot.launch();
