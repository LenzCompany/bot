module.exports = {
    name: "ping",
    code: async (ctx) => {
      const startTime = Date.now();
        const response = await fetch('https://api.ndaadev.us.kg/ping');
        const endTime = Date.now();
        const ping = endTime - startTime;
      ctx.reply(`${ping}ms\nServer : https://api.ndaadev.us.kg`);
    },
};