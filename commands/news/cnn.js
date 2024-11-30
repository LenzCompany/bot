module.exports = {
    name: "cnn",
    code: async(ctx) => {
        const res = await fetch(`${apii}news-cnn`)
        const data = await res.json()
        const dataa = data.result
        const txt = dataa.map(e => `_Title : ${e.title}_\n\nLink : ${e.link}\n`).join("\n")
        ctx.reply(`${txt}`)
    }
}