
module.exports = {
  config: {
    name: "uptime",
    aliases: ["up", "runtime"],
    version: "1.0.0",
    author: "Farhan Abir",
    countDown: 5,
    role: 0,
    shortDescription: {
      en: "Check bot uptime"
    },
    description: {
      en: "Show bot running time"
    },
    category: "system",
    guide: {
      en: "{pn}"
    }
  },

  onStart: async function ({ api, event }) {
    const uptime = process.uptime();

    const days = Math.floor(uptime / 86400);
    const hours = Math.floor((uptime % 86400) / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const seconds = Math.floor(uptime % 60);

    const format = n => String(n).padStart(2, "0");

    const time =
      `${format(days)} : ${format(hours)} : ` +
      `${format(minutes)} : ${format(seconds)}`;

    const msg = `
╭━━━〔 ✦ FARHAN ABIR ✦ 〕━━━╮

       ⚡ SYSTEM UPTIME ⚡

       ╭──────────────╮
       │   ${time}   │
       ╰──────────────╯

  ✧ DAYS     : ${days}
  ✧ HOURS    : ${hours}
  ✧ MINUTES  : ${minutes}
  ✧ SECONDS  : ${seconds}

━━━━━━━━━━━━━━━━━━━━

  🤖 BOT STATUS : 🟢 ONLINE
  💻 PLATFORM   : NODE.JS
  ⚡ RUNTIME    : ACTIVE

━━━━━━━━━━━━━━━━━━━━

      ✦ ALWAYS READY ✦
       𓆩 POWERED BY FARHAN ABIR 𓆪

╰━━━━━━━━━━━━━━━━━━━━╯`;

    return api.sendMessage(msg, event.threadID);
  }
};
      
