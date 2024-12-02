const fetch = require("node-fetch")
module.exports = {
  name: "openai",
  code: async (ctx) => {
    const query = ctx.args.join(" ")
    if (!query) return ctx.reply("Please provide a query")
    const res = await fetch(`${apii}openai?query=${ctx.args.join(" ")}`)
    const data = await res.json()
    ctx.reply(`${data.result}`)
  },
};