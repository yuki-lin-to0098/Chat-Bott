
const truth = [
  "তোমার প্রথম Crush কে ছিল?",
  "কাকে সবচেয়ে বেশি বিশ্বাস করো?",
  "তোমার সবচেয়ে বড় গোপন ইচ্ছা কী?",
  "কাউকে মনে মনে পছন্দ করো?",
  "তোমার সবচেয়ে লজ্জার ঘটনা কী?",
  "কাকে সবচেয়ে বেশি মিস করো?",
  "তোমার সবচেয়ে বড় ভয় কী?",
  "কখনো কাউকে মিথ্যা বলেছো?",
  "তোমার প্রিয় মানুষ কে?",
  "তোমার জীবনের সবচেয়ে সুন্দর স্মৃতি কী?",
  "কখনো কারো মেসেজের অপেক্ষায় থেকেছো?",
  "তোমার সবচেয়ে বাজে অভ্যাস কী?",
  "তোমার প্রিয় খাবার কী?",
  "তোমার জীবনের লক্ষ্য কী?",
  "তুমি বেশি রাগী নাকি শান্ত?",
  "কখনো কাউকে Ignore করেছো?",
  "তোমার সবচেয়ে কাছের বন্ধু কে?",
  "তোমার সবচেয়ে বড় স্বপ্ন কী?",
  "তুমি কি সহজে কাউকে বিশ্বাস করো?",
  "তোমার প্রিয় গান কোনটি?",
  "কোন বন্ধুকে সবচেয়ে বেশি বিশ্বাস করো?",
  "তুমি কি রাত জাগতে পছন্দ করো?",
  "কখনো নিজের ভুল লুকিয়েছো?",
  "তোমার সবচেয়ে পছন্দের জায়গা কোথায়?",
  "তোমার সবচেয়ে প্রিয় রঙ কী?",
  "কোন মানুষকে সবচেয়ে বেশি মিস করো?",
  "তোমার জীবনের সেরা সিদ্ধান্ত কী?",
  "কখনো কাউকে Surprise দিয়েছো?",
  "তোমার প্রিয় সিনেমা কোনটি?",
  "তোমার সবচেয়ে মজার ডাকনাম কী?",
  "তুমি কি বেশি Emotional?",
  "কোন অভ্যাস পরিবর্তন করতে চাও?",
  "তোমার প্রিয় অভিনেতা কে?",
  "কোন বন্ধুর সাথে ঘুরতে যেতে চাও?",
  "তোমার সবচেয়ে বড় দুর্বলতা কী?",
  "কখনো কাউকে দেখে হিংসে হয়েছে?",
  "তোমার প্রিয় ফল কী?",
  "কোন স্মৃতি আবার ফিরে পেতে চাও?",
  "তুমি কি সহজে রেগে যাও?",
  "নিজের কোন গুণটি সবচেয়ে পছন্দ?"
];

const dare = [
  "গ্রুপে একটি মজার জোক বলো 😂",
  "নিজের নাম দিয়ে একটি কবিতা লেখো।",
  "পরপর ৫টি হাসির ইমোজি পাঠাও।",
  "একটি গান গেয়ে শোনাও।",
  "গ্রুপের সবাইকে সালাম দাও।",
  "নিজের সম্পর্কে ৩টি ভালো কথা বলো।",
  "একটি মজার স্ট্যাটাস লেখো।",
  "নিজের নাম উল্টো করে লেখো।",
  "একটি সুন্দর বাংলা ছড়া বলো।",
  "একটি মজার ডাকনাম তৈরি করো।",
  "একটি Emoji Story লেখো।",
  "একটি নতুন ধাঁধা বলো।",
  "একটি বন্ধুত্বের উক্তি লেখো।",
  "একটি ছোট গল্প বলো।",
  "গ্রুপের জন্য একটি নতুন নাম প্রস্তাব করো।",
  "একটি মজার প্রশ্ন করো।",
  "একটি Funny Bio তৈরি করো।",
  "বাংলায় ৫টি ফুলের নাম লেখো।",
  "একটি Motivational Quote লেখো।",
  "তোমার পছন্দের ৩টি Emoji পাঠাও।",
  "একটি কাল্পনিক সুপারহিরোর নাম দাও।",
  "একটি সুন্দর Good Night মেসেজ লেখো।",
  "একটি মজার ছড়া বানাও।",
  "একটি ছোট Rap Line লেখো।",
  "একটি Positive Message লেখো।",
  "নিজের বানানো একটি জোক শোনাও।",
  "একটি বাংলা Tongue Twister লেখো।",
  "একটি সুন্দর Birthday Wish লেখো।",
  "তোমার প্রিয় ৫টি খাবারের নাম লেখো।",
  "একটি বন্ধুত্বের কবিতা লেখো।",
  "একটি Funny Welcome Message লেখো।",
  "একটি নতুন Game-এর নাম তৈরি করো।",
  "গ্রুপের সবাইকে একটি ভালো কথা বলো।",
  "নিজের জন্য একটি সুন্দর উপাধি তৈরি করো।",
  "একটি মজার ক্যাপশন লেখো।",
  "তিনটি ভালো অভ্যাসের নাম লেখো।",
  "একটি সুন্দর ছন্দ তৈরি করো।",
  "তোমার প্রিয় গানের নাম বলো।",
  "একটি মজার কাল্পনিক ঘটনা বলো।",
  "নিজেকে নিয়ে একটি মজার ক্যাপশন লেখো।"
];

const pick = arr => arr[Math.floor(Math.random() * arr.length)];

module.exports = {
  config: {
    name: "truthdare",
    aliases: ["td", "tord"],
    version: "3.0.0",
    author: "Farhan Abir",
    countDown: 2,
    role: 0,
    shortDescription: "Truth or Dare Game",
    category: "game",
    guide: "{pn}"
  },

  onStart: async function ({ api, event }) {
    return api.sendMessage(
      `╭━━━〔 🎭 TRUTH OR DARE 🎭 〕━━━╮

❤️ T = TRUTH
🔥 D = DARE
🎲 Random = Random Challenge

✦ TOTAL: ${truth.length + dare.length} QUESTIONS

লিখো:
T or D
T
D
random

𓆩 POWERED BY FARHAN ABIR 𓆪
╰━━━━━━━━━━━━━━━━━━━━╯`,
      event.threadID,
      event.messageID
    );
  },

  onChat: async function ({ api, event }) {
    const body = (event.body || "").trim().toLowerCase();

    if (body === "t or d" || body === "tord") {
      return api.sendMessage(
        `🎭 TRUTH OR DARE 🎭\n\n❤️ T = Truth\n🔥 D = Dare\n🎲 Random = Random Challenge\n\n𓆩 FARHAN ABIR 𓆪`,
        event.threadID,
        event.messageID
      );
    }

    if (body === "t" || body === "truth") {
      return api.sendMessage(
        `╭━━━〔 ❤️ TRUTH TIME ❤️ 〕━━━╮\n\n❓ ${pick(truth)}\n\n╰━━〔 FARHAN ABIR 〕━━╯`,
        event.threadID,
        event.messageID
      );
    }

    if (body === "d" || body === "dare") {
      return api.sendMessage(
        `╭━━━〔 🔥 DARE TIME 🔥 〕━━━╮\n\n🎯 ${pick(dare)}\n\n╰━━〔 FARHAN ABIR 〕━━╯`,
        event.threadID,
        event.messageID
      );
    }

    if (body === "random" || body === "r") {
      const isTruth = Math.random() < 0.5;
      return api.sendMessage(
        `╭━━━〔 🎲 RANDOM CHALLENGE 〕━━━╮\n\n` +
        `${isTruth ? "❤️ TRUTH" : "🔥 DARE"}\n\n` +
        `${isTruth ? pick(truth) : pick(dare)}\n\n` +
        `╰━━〔 FARHAN ABIR 〕━━╯`,
        event.threadID,
        event.messageID
      );
    }
  }
};
