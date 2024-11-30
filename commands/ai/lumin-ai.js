module.exports = {
  name: "lumin-ai",
  code: async (ctx) => {
    const res = await fetch(`${apii}lumin-ai?query=${ctx.args.join(" ")}`)
    const data = await res.json()
    ctx.reply(`${data.result.result}`)
  },
};