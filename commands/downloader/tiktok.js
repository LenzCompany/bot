const fetch = require('node-fetch')

module.exports = {
    name: "tiktok",
    description: "Download video tiktok",
    code: async (ctx, bot) => {
        const url = ctx.args.join(" ")
        if (!url) return ctx.reply("Please provide a url")

        const response = await fetch(`${apii}tiktok?url=${url}`)
        const data = await response.json()
        const v = data.result
        ctx._client.sendMessage(ctx.id,
            {
                video:
                    {
                        url: v.play,
                    },
                    caption: `${v.title}`
            })
    }
}