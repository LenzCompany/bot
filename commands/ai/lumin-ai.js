module.exports = {
  name: "lumin-ai",
  code: async (ctx) => {
    const query = ctx.args.join(" ")
    if (!query) return ctx.reply("Please provide a query")
    const res = await fetch(`${apii}lumin-ai?query=${ctx.args.join(" ")}`)
    const data = await res.json()
    ctx.reply(`${data.result.result}`)
  },
};