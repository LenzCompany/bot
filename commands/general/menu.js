module.exports = {
    name: "menu",
    code: async(ctx) => {
        const startTime = Date.now();
        const response = await fetch('https://api.ndaadev.us.kg');
        const endTime = Date.now();
        const ping = endTime - startTime;
        const menu = `Hello ${ctx._sender.pushName}!

        _Server_ : https://api.ndaadev.us.kg
        _Ping_ : ${ping}ms
        _Owner_ : https://wa.me/6285640575421

_GENERAL_
${ctx._used.prefix}menu - Menampilkan Menu
${ctx._used.prefix}ping - Menampilkan Ping Bot

_AI_
${ctx._used.prefix}lumin-ai - Chat Dengan AI Lumin
${ctx._used.prefix}openai - Chat Dengan AI OpenAI

_NEWS_
${ctx._used.prefix}cnbc - Menampilkan Berita CNBC
${ctx._used.prefix}cnn - Menampilkan Berita CNN
${ctx._used.prefix}Kumparan - Menampilkan Berita Kumparan
${ctx._used.prefix}replubika - Menampilkan Berita Replubika

_SEARCH_
${ctx._used.prefix}covid-19 - Menampilkan Statistik COVID-19

_DOWNLOADER_
${ctx._used.prefix}tiktok - Download Video Tiktok` 
        ctx.reply(`${menu}`)
    }
}