const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *MR 𝗠𝗔𝗟𝗜𝗗𝗨 𝗛𝗔𝗡𝗦𝗔𝗡𝗔*

> *QUEEN SADU_MD REPO:*
*|* *https://github.com/*

> *SUPPORT CHENNAL:*
*|* *https://whatsapp.com/channel/0029Vb0Anqe9ZAcEYc2fT2c*
> * *SYSTEM SETTING:*
*|* *ᴍʀ Malidu*
*|* *94786528867*
*╰──────────────●●►*

> *CREATED BY MR 𝗠𝗔𝗟𝗜𝗗𝗨 𝗛𝗔𝗡𝗦𝗔𝗡𝗔*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363232588171807@newsletter',
      newsletterName: "𝐌𝐀𝐋𝐈𝐃𝐔 𝐇𝐀𝐍𝐒𝐀𝐍𝐀 𝐌𝐃",
      serverMessageId: 999
    },
externalAdReply: { 
title: '𝐌𝐀𝐋𝐈𝐃𝐔 𝐇𝐀𝐍𝐒𝐀𝐍𝐀 𝐌𝐃',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/mrdinesh595" ,
thumbnailUrl: "https://i.postimg.cc/C5YSXhHr/20241225-020201.jpg)" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
