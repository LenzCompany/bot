const fetch = require("node-fetch")

module.exports = {
    name: "covid-19",
    description: "Get the latest COVID-19 statistics",
    code: async(ctx) => {
        const response = await fetch(`${apii}covid-19`)
        const data = await response.json()
        const c = data.result
        ctx.reply(`Total cases: ${c.totalCases}\nRecovered : ${c.recovered}\nDeaths : ${c.deaths}\nActiveCases : ${c.activeCases}\nClosed Cases : ${c.closedCases}`)
    }
}