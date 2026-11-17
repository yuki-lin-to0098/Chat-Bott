
const fs = require("fs-extra");
const path = require("path");

const cachePath = path.join(__dirname, "cache", "ship");

module.exports = {
  config: {
    name: "ship",
    aliases: ["love", "lovematch"],
    version: "2.0",
    author: "Farhan Abir",
    countDown: 5,
    role: 0,
    shortDescription: "Love Match System",
    longDescription: "Create a funny love match",
    category: "fun",
    guide: "{pn} @mention"
  },

  onStart: async function ({ api, event, args }) {
    const { threadID, messageID, senderID, mentions } = event;

    // PICK COMMAND
    if (args[0]?.toLowerCase() === "pick") {
      const file = path.join(cachePath, `${threadID}.json`);

      if (!fs.existsSync(file)) {
        return api.sendMessage(
          "❌ আগে কোনো Ship Match তৈরি করা হয়নি!",
          threadID,
          messageID
        );
      }

      const data = JSON.parse(fs.readFileSync(file, "utf8"));

      if (data.senderID !== senderID) {
        return api.sendMessage(
          "❌ এই Ship ছবিটি শুধু যে তৈরি করেছে সে Pick করতে পারবে!",
          threadID,
          messageID
        );
      }

      if (!fs.existsSync(data.image)) {
        return api.sendMessage(
          "❌ আগের ছবিটি পাওয়া যাচ্ছে না!",
          threadID,
          messageID
        );
      }

      return api.sendMessage({
        body: data.caption,
        attachment: fs.createReadStream(data.image)
      }, threadID, messageID);
    }

    const ids = Object.keys(mentions || {});

    let id1 = senderID;
    let id2;

    if (ids.length >= 2) {
      id1 = ids[0];
      id2 = ids[1];
    } else if (ids.length === 1) {
      id2 = ids[0];
    } else {
      return api.sendMessage(
        "╭━━━〔 💗 LOVE SHIP 💗 〕━━━╮\n\n" +
        "কাউকে Mention করে Ship করো!\n\n" +
        "Example: ship @Abir @Adiba\n\n" +
        "╰━━━━━━━━━━━━━━━━━━╯",
        threadID,
        messageID
      );
    }

    if (id1 === id2) {
      return api.sendMessage(
        "😂 নিজের সাথেই আবার Ship করছো নাকি?",
        threadID,
        messageID
      );
    }

    const percentage = Math.floor(Math.random() * 100) + 1;

    const replies = [
      "তোমাদের জুটি দেখে Cupid-ও অবাক! 🏹",
      "এই জুটি একদম আগুন! 🔥",
      "বিয়ের দাওয়াত কবে দিবে? 😂",
      "ভালোবাসার বাতাস বইছে! 💗",
      "একজন আরেকজনের জন্যই তৈরি! 🥰",
      "ম্যাচ দেখে হৃদয় গলে গেল! 💞",
      "এবার মিষ্টি খাওয়ানোর পালা! 🍬",
      "বন্ধুত্ব নাকি ভালোবাসা? রহস্য রয়ে গেল! 👀",
      "এমন জুটি সচরাচর দেখা যায় না! 💍",
      "Cupid আজকে অনেক খুশি! 💘"
    ];

    let status;

    if (percentage >= 90) status = "PERFECT COUPLE 💍";
    else if (percentage >= 70) status = "TRUE LOVE 💗";
    else if (percentage >= 50) status = "CUTE MATCH 🥰";
    else if (percentage >= 30) status = "JUST FRIENDS 😂";
    else status = "NO CHANCE BRO 💔";

    const reply = replies[Math.floor(Math.random() * replies.length)];

    const info = await api.getUserInfo([id1, id2]);

    const name1 = info[id1]?.name || "Person 1";
    const name2 = info[id2]?.name || "Person 2";

    const caption =
      "╭━━━〔 💗 𝐋𝐎𝐕𝐄 𝐒𝐇𝐈𝐏 💗 〕━━━╮\n\n" +
      `♡ ${name1} × ${name2} ♡\n\n` +
      `💘 LOVE MATCH: ${percentage}%\n` +
      `💞 STATUS: ${status}\n\n` +
      `💌 ${reply}\n\n` +
      "♡ ভালোবাসা থাকুক সারাজীবন ♡\n\n" +
      "╰━━〔 𝐅𝐀𝐑𝐇𝐀𝐍 𝐀𝐁𝐈𝐑 𝐁𝐎𝐓 〕━━╯\n" +
      "📌 আগের ছবি পেতে লিখো: pick";

    // Image is optional. Match result works without image API.
    return api.sendMessage(caption, threadID, messageID);
  }
};
