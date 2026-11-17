
const fs = require("fs-extra");

const roastList = [
  "তোর ব্রেইন কি এখনো Loading এ আছে? 😂",
  "তোর বুদ্ধি দেখে Google নিজেই Confused! 🤣",
  "তুই এত Slow, কচ্ছপও তোকে দেখে Fast মনে করে! 🐢",
  "তোর Attitude দেখে WiFi-ও Disconnect হয়ে যায়! 💀",
  "তুই একটা Walking Comedy Show! 🤡",
  "তোর কথা শুনে Calculator-ও Error দেখায়! 😂",
  "তোর IQ মনে হয় এখনো Update হয়নি! 🤣",
  "তুই Online থাকিস, কিন্তু বুদ্ধি Offline! 😭",
  "তোর Personality দেখে আয়নাও হাসে! 😂",
  "তুই এমন এক Legend, যার কোনো Tutorial নাই! 🔥",
  "তোর Logic শুনে বিজ্ঞানীরাও ছুটি নেয়! 🤣",
  "তুই কথা বললেই Comedy শুরু হয়! 🎭",
  "তোর মাথায় কি শুধু Notification বাজে? 😂",
  "তুই একাই একটা পুরো Circus! 🤡",
  "তোর Confidence আকাশে, কিন্তু Logic মাটির নিচে! 💀",
  "তুই এমন Smart যে নিজের Password নিজেই ভুলে যাস! 🤣",
  "তোর Brain এখনো Beta Version! 😂",
  "তুই আসলে Premium Class-এর ফ্রি Entertainment! 😎",
  "তোর কথা শুনে হাসি থামানো দায়! 🤣",
  "তুই একটা চলন্ত Meme! 😂"
];

const lastRoast = new Map();

module.exports.config = {
  name: "roast",
  version: "1.0.0",
  author: "Farhan Abir",
  countDown: 3,
  role: 0,
  shortDescription: "Funny Bangla Roast",
  longDescription: "Random funny roast command",
  category: "fun",
  guide: {
    en: "{pn} or {pn} @mention"
  }
};

module.exports.onStart = async function ({ api, event, args }) {
  const { threadID, messageID, senderID, mentions } = event;

  const targetID = Object.keys(mentions || {})[0] || senderID;

  const targetName = mentions && mentions[targetID]
    ? mentions[targetID].replace("@", "")
    : "তোমাকে";

  const key = threadID + "_" + targetID;

  let available = roastList.filter(
    (item) => item !== lastRoast.get(key)
  );

  if (available.length === 0) available = roastList;

  const roast = available[
    Math.floor(Math.random() * available.length)
  ];

  lastRoast.set(key, roast);

  return api.sendMessage(
    `╭━━━〔 🔥 ROAST TIME 🔥 〕━━━╮\n\n` +
    `👤 Target: ${targetName}\n\n` +
    `🤣 ${roast}\n\n` +
    `╰━━━〔 😂 FUN MODE 〕━━━╯`,
    threadID,
    messageID
  );
};
