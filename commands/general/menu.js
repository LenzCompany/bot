module.exports = {
    name: "menu",
    code: async(ctx) => {
        const menu = `
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
${ctx._used.prefix}replubika - Menampilkan Berita Replubika` 
        ctx.reply(`${menu}`)
    }
}