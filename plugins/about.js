/* 
created by TOHID KHAN
contact me 917849917350
© Copy coder alert ⚠
*/

const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `*╭┈───────────────•*

*👋 HELLO ${pushname}*

*╰┈───────────────•*
 ◈ •╭═══ ━ ━ • ━ ━ ━ ═══♡᭄
 ◈ •│       「 𝗠𝗬 𝗜𝗡𝗧𝗥𝗢 」
 ◈ •│ Name      : 𝗠𝗔𝗟𝗜𝗗𝗨 𝗛𝗔𝗡𝗦𝗔𝗡𝗔
 ◈ •│
 ◈ •│ Place      : ꜱʀɪ ʟᴀɴᴋᴀ
 ◈ •│
 ◈ •│ Gender    : ᴍᴀʟᴇ
 ◈ •│
 ◈ •│ Age       : ᴜɴʟɪᴍɪᴛᴇᴅ
 ◈ •│
 ◈ •│ Status     : Musician
 ◈ •│
 ◈ •│ Phone     : wa.me/94772356258
 ◈ •│
 ◈ •│ IG ID      : maliduhansana6254 
 ◈ •│
 ◈ •│ Connect   : undefined 
 ◈ •│
 ◈ •│ Github     : maliduhansana
 ◈ •│
 ◈ •│ Website    :undefined 
 ◈ •│
 ◈ •╰═══ ━ ━ • ━ ━ ━ ═══♡᭄
 ◈ • *◆◆◆◆◆◆◆◆◆◆◆◆*

 ◈ •*[ • 𝐌𝐀𝐋𝐈𝐃𝐔 𝐇𝐀𝐍𝐒𝐀𝐍𝐀 𝐌𝐃 - TEAM • ]*
 ◈ •*╭┈───────────────•*
 ◈ •*│  ◦* *▢➠ᴍʀ 𝙼𝚊𝚕𝚒𝚍𝚞*
 ◈ •*│  ◦* *▢➠undefined*
 ◈ •*│  ◦* *▢➠undefined*
 ◈ •*│  ◦* *▢➠undefined*
 ◈ •*│  ◦* *▢➠undefined*
 ◈ •*╰┈───────────────•*
 ◈ •*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝗠𝗔𝗟𝗜𝗗𝗨 𝗛𝗔𝗡𝗦𝗔𝗡𝗔
 ◈ •*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:about},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
