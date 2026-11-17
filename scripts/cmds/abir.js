
module.exports.config = {
    name: "abir",
    aliases: ["abirvai", "abir-bhai", "আবির"],
    version: "2.0.0",
    author: "Farhan Abir",
    countDown: 2,
    role: 0,
    description: "Abir Islamic Funny Love Chat",
    category: "chat",
    guide: {
        en: "{pn}"
    }
};

// Duplicate message protection
const processed = new Map();

const replies = {
    islamic: [
        "আসসালামু আলাইকুম ওয়া রহমাতুল্লাহি ওয়া বারাকাতুহু! 🤍🕊️",
        "আলহামদুলিল্লাহ! মহান আল্লাহর কাছে লাখো শুকরিয়া। ❤️",
        "আল্লাহর উপর ভরসা রাখো, তিনি উত্তম পরিকল্পনাকারী। 🤲",
        "নামাজ হলো মুমিনের জীবনের প্রশান্তি। 🕌",
        "সুবহানাল্লাহ! আল্লাহর সৃষ্টি কতই না সুন্দর! 🌙",
        "বেশি বেশি ইস্তিগফার করো, আল্লাহর রহমত অনেক বড়।",
        "দুনিয়ার মোহে আখিরাতকে ভুলে যেও না। 🤍",
        "মানুষের সাথে সুন্দর ব্যবহার করাও একটি ভালো আমল।",
        "ইনশাআল্লাহ, একদিন সবকিছু সুন্দর হবে।",
        "আল্লাহ আমাদের সবাইকে সঠিক পথে চলার তৌফিক দিন। আমিন। 🤲",
        "রাগের সময় চুপ থাকা অনেক বড় গুণ।",
        "কারো মনে কষ্ট দিও না, মানুষের মন অনেক কোমল।",
        "দোয়া করতে কখনো ক্লান্ত হয়ো না।",
        "আলহামদুলিল্লাহ, প্রতিটি অবস্থায় আল্লাহর শুকরিয়া আদায় করো।"
    ],

    moral: [
        "মানুষের সৌন্দর্য চেহারায় নয়, সুন্দর ব্যবহারে। ❤️",
        "কাউকে ছোট করে নিজেকে বড় করা যায় না।",
        "সময় থাকতে মানুষকে মূল্য দিতে শেখো।",
        "যে তোমাকে সম্মান করে, তাকেও সম্মান দাও।",
        "মিথ্যা দিয়ে সম্পর্ক তৈরি হয়, কিন্তু টিকে থাকে না।",
        "অহংকার পতনের মূল, তাই বিনয়ী হও।",
        "ভালো মানুষ হওয়া সবচেয়ে বড় পরিচয়। 🤍",
        "অন্যের দুঃখ নিয়ে কখনো হাসবে না।",
        "কথা দেওয়ার আগে ভাবো, কথা রাখাও দায়িত্ব।",
        "ক্ষমা করতে শেখো, এতে নিজের মন শান্ত থাকে।",
        "কারো বিশ্বাস নিয়ে কখনো খেলা করো না।",
        "ধৈর্য ধরো, সুন্দর সময় আসবেই।"
    ],

    love: [
        "ভালোবাসা মানে শুধু I Love You নয়, যত্ন নেওয়াও ভালোবাসা। ❤️",
        "সত্যিকারের ভালোবাসায় বিশ্বাস আর সম্মান থাকে।",
        "যে তোমার মন বোঝে, সে-ই তোমার আপন মানুষ। 🥰",
        "ভালোবাসা সুন্দর, যদি সেখানে মিথ্যা না থাকে।",
        "একটু যত্ন, একটু বিশ্বাস আর অনেকটা ভালোবাসা! 🤍",
        "মানুষ বদলায়, কিন্তু সুন্দর স্মৃতিগুলো থেকে যায়।",
        "সম্পর্ক সুন্দর হয় দুজনের সমান সম্মানে।",
        "ভালোবাসা জোর করে পাওয়া যায় না, অনুভব করতে হয়।"
    ],

    romantic: [
        "তোমার হাসিটা যেন এক টুকরো চাঁদের আলো! 🌙",
        "কিছু মানুষ জীবনে আসে, আর জীবনটা সুন্দর করে দেয়।",
        "তুমি হাসলে পৃথিবীটা একটু বেশি সুন্দর লাগে। 🥰",
        "চাঁদ সুন্দর, কিন্তু সুন্দর মনের মানুষের তুলনা নেই।",
        "এক কাপ চা, সুন্দর বিকেল আর প্রিয় মানুষের গল্প! ☕",
        "হাজার মানুষের ভিড়েও প্রিয় মানুষটাকে আলাদা লাগে।",
        "কিছু অনুভূতি মুখে বলা যায় না, শুধু হৃদয়ে থাকে। ❤️",
        "ভালোবাসা থাকুক পবিত্র, সম্পর্ক থাকুক সুন্দর।"
    ],

    funny: [
        "হ্যালো! আমি আবির, আগে সালাম দাও তারপর কথা বলো! 😂",
        "আমি আবির, আমার ব্রেইন এখন চার্জে আছে! 🔋",
        "কী খবর? প্রেম করো নাকি শুধু স্ট্যাটাস দেখো? 🤣",
        "আমাকে ডাকছো কেন? বিরিয়ানি পাঠাবে নাকি? 🍗",
        "আমি আবির, ঘুম আমার জাতীয় দায়িত্ব! 😴",
        "পড়তে বসেছিলাম, বই আমাকে দেখে ঘুমিয়ে গেল! 😂",
        "আমার মুড ভালো, কিন্তু পকেটের অবস্থা খারাপ! 😭",
        "আমি অনেক ভালো ছেলে, শুধু আমার বন্ধুরা সেটা জানে না! 😎",
        "আমার লাইফে টেনশন নেই, টেনশনই আমার লাইফে থাকে! 🤣",
        "কী চাই? দোয়া, ভালোবাসা নাকি বিরিয়ানি? 🐸"
    ],

    intro: [
        "আসসালামু আলাইকুম! আমি আবির। কেমন আছো? ❤️",
        "জি! আমি আবির, আলহামদুলিল্লাহ ভালো আছি। তুমি কেমন?",
        "হ্যালো! আবির হাজির আছি। কী খবর তোমার? 😎",
        "জি বলো! আবিরকে ডাকছিলে নাকি? 🥰",
        "আসসালামু আলাইকুম! ভালো থেকো, সুস্থ থেকো। 🤍"
    ]
};

function getReply(type) {
    const list = replies[type] || replies.intro;
    return list[Math.floor(Math.random() * list.length)];
}

function detectType(body) {
    const text = body.toLowerCase();

    if (/সালাম|assalamu|salam|ইসলাম|নামাজ|আল্লাহ|দোয়া/.test(text))
        return "islamic";

    if (/ভালোবাসা|love|ভালোবাসি|প্রেম/.test(text))
        return "love";

    if (/রোমান্টিক|romantic|চাঁদ|হৃদয়/.test(text))
        return "romantic";

    if (/ফানি|funny|মজা|হাসি|হাহা/.test(text))
        return "funny";

    if (/নৈতিক|উপদেশ|শিক্ষা|জীবন|সত্য/.test(text))
        return "moral";

    return "intro";
}

function saveReply(api, event, message, type) {
    api.sendMessage(
        message,
        event.threadID,
        (err, info) => {
            if (!err && info) {
                global.GoatBot.onReply.set(info.messageID, {
                    commandName: "abir",
                    person: type
                });
            }
        },
        event.messageID
    );
}

// Command
module.exports.onStart = async ({ api, event }) => {
    return saveReply(
        api,
        event,
        getReply("islamic"),
        "islamic"
    );
};

// Automatic chat
module.exports.onChat = async ({ api, event }) => {
    if (!event.body || event.type === "message_reply") return;

    const body = event.body.trim().toLowerCase();

    if (!/(^|\s)(abir|abirvai|abir bhai|আবির|আবির ভাই)(\s|$)/i.test(body))
        return;

    const messageID = event.messageID;

    if (!messageID) return;

    // Only one reply for the same message
    if (processed.has(messageID)) return;

    processed.set(messageID, Date.now());

    const type = detectType(body);

    return saveReply(
        api,
        event,
        getReply(type),
        type
    );
};

// Reply to Abir
module.exports.onReply = async ({ api, event }) => {
    if (event.type !== "message_reply") return;

    const oldData = global.GoatBot.onReply.get(
        event.messageReply?.messageID
    );

    if (!oldData || oldData.commandName !== "abir") return;

    const type = detectType(event.body || "");

    return saveReply(
        api,
        event,
        getReply(type),
        type
    );
};
          
