module.exports = {
    name: "kumparan",
    code : async (ctx) => {
        const res = await fetch(`${apii}news-kumparan`)
        const data = await res.json()
        const dataa = data.result
        const txt = dataa.map(e => `_Title : ${e.title}_\n\nLink : ${e.link}\n`).join("\n")
        ctx.reply(`${txt}`)
    }
}