// PUNYA SAYA [ RIMURUBOTZ ] JANGAN UBAH THX TO YA
// DILARANG DI PERJUAL BELIKAN

// NOTE KLO MAU AMBIL FITUR MINIMAL ADD "RIMURUBOTZ" DI THX TO BOT KLAEN
const respon = require('./lib/respon.js');
let { aiovideodl } = require('./lib/scraper')
const iklan = require('./admin/iklan.js');
const karakterskill = require('./lib/karakter.js');
const { generateWAMessageFromContent, proto, generateWAMessage, downloadContentFromMessage } = require('@adiwajshing/baileys');
const { color, bgcolor } = require('./lib/color')
const fs = require('fs');
const imgbb = require('imgbb-uploader')
const hx = require('hxz-api');
const ffmpeg = require('fluent-ffmpeg')
const moment = require("moment-timezone");
const { exec, spawn } = require("child_process")
const { fetch, downloadSaveImgMsg } = require('./lib/anu.js');
const { wait, simih, getBuffer, h2k } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const session = require('./session.json');
const {confirmATM, addATM } = require('./lib/limitatm.js')
const { cekHp, cekKarakter, cekUang } = require('./lib/cek.js')
moment.tz.setDefault('Asia/Jakarta').locale("id");
const setting = JSON.parse(fs.readFileSync('./admin/settings.json')) 
const tebakgambar = JSON.parse(fs.readFileSync('./game/tebakgambar.json'))
const tebakkimia = JSON.parse(fs.readFileSync('./game/tebakimia.json'))
const caklontong = JSON.parse(fs.readFileSync('./game/caklontong.json'))
const tebakbendera = JSON.parse(fs.readFileSync('./game/tebakbendera.json'))
const tebaklirik = JSON.parse(fs.readFileSync('./game/tebaklirik.json'))
const tebakjenaka = JSON.parse(fs.readFileSync('./game/tebakjenaka.json'))
termux = fs.readFileSync(`./media/sticker/termux.webp`) 
cangkul = fs.readFileSync(`./media/sticker/cangkul.webp`) 
anti = fs.readFileSync(`./media/sticker/anti.webp`) 
bahasa = "id"
apa = "other"
const prem = []
const antilink = []
const antitag = []
const antivirtex = [] 
prefix = setting.prefix
const { namabot, kodeprem, instagram, youtube, namaowner, linkgrub, nomerowner, gopay, dana, pulsa, donasi } = setting
function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)} : ${pad(minutes)} : ${pad(seconds)}`}
runtime = process.uptime()
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}
module.exports = hehe = async (nayla, nay, store) => {
try {
const type = Object.keys(nay.message)[0];
const body = (type === 'conversation') ? nay.message.conversation : (type == 'imageMessage') ? nay.message.imageMessage.caption : (type == 'videoMessage') ? nay.message.videoMessage.caption : (type == 'extendedTextMessage') ? nay.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? nay.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? nay.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? nay.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (nay.message.buttonsResponseMessage?.selectedButtonId || nay.message.listResponseMessage?.singleSelectReply.selectedRowId || nay.text) : ''
const budy = (type === 'conversation') ? nay.message.conversation : (type === 'extendedTextMessage') ? nay.message.extendedTextMessage.text : ''
const isCommand = body.startsWith(prefix);
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const command1 = body.slice(5).trim().split(/ +/).shift().toLowerCase()
const cmd = isCommand ? body.slice(1).trim().split(/ +/).shift().toLowerCase() : null;
const isCmd = body.startsWith(prefix)
const time = moment(new Date()).format("HH:mm");
const text = nay.message.conversation;
const isGroup = nay.key.remoteJid.endsWith('@g.us');
const from = nay.key.remoteJid;
const content = JSON.stringify(nay.message);
const args = body.trim().split(/ +/).slice(1);
const q = args.join(" ");
const botNumber = nayla.user.id.split(':')[0] + '@s.whatsapp.net';
const ownerNumber = [`${nomerowner}@s.whatsapp.net`]
const botName = nayla.user.name;
const pushname = nay.pushName;
const sender = isGroup ? (nay.key.participant ? nay.key.participant : nay.participant) : nay.key.remoteJid;
const groupMetadata = isGroup ? await nayla.groupMetadata(from) : '';
const uwong = isGroup ? await groupMetadata.participants : '';
const groupAdmins = isGroup ? await uwong.filter(v => v.admin !== null).map(a => a.id) : '';
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;
const isGroupAdmins = groupAdmins.includes(sender) || false;
const groupName = isGroup ? groupMetadata.subject : "";
const isOwner = ownerNumber.includes(sender)
const isPrem = prem.includes(sender) || isOwner	
const isAntiLink = isGroup ? antilink.includes(from) : false 
const isAntiVirtex = isGroup ? antivirtex.includes(from) : false 
const isAntitag = isGroup ? antitag.includes(from) : false 			
const isMedia = (type === 'imageMessage' || type === 'videoMessage');
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage');
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage');
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage');
await nayla.sendReadReceipt(from, nay.key.participant, [nay.key.id]);
fake = fs.readFileSync(`./media/image/fake.jpg`)
nay1 = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {})},message: {"extendedTextMessage": {"text": `HY : ${pushname}\n❀ RUNTIME : ${kyun(runtime)}`, 'title':'2', 'jpegThumbnail': fake}}}
if (!isGroup && isCommand) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;32m=>\x1b[1;37m]', color(`[ CMD ]`, 'yellow'), color('NAME', 'red'), color(pushname, 'yellow'), color('SEDANG', 'white'), color('MENGGUNAKAN', 'yellow'), color('FITUR', 'red'), color('=>', 'yellow'), color(command), 'DI :', color('PESAN PRIBADI', 'yellow')) 
if (isCommand && isGroup) console.log('\x1b[1;31m=\x1b[1;37m>', '[\x1b[1;32m=>\x1b[1;37m]', color(`[ CMD ]`, 'yellow'), color('NAME', 'red'), color(pushname, 'yellow'), color('SEDANG', 'white'), color('MENGGUNAKAN', 'yellow'), color('FITUR', 'red'), color('=>', 'yellow'), color(command), 'DI :', color(groupName, 'yellow'))	  
const mentions = (teks, memberr, id) => {(id == null || id == undefined || id == false) ? nayla.sendMessage(from, {text:teks.trim() }, {contextInfo: {"mentionedJid": memberr}}) : nayla.sendMessage(from, {text:teks.trim()}, {quoted: nay, contextInfo: {"mentionedJid": memberr}})}					
const reply = (teksnya) => {
nayla.sendMessage(from, { text: teksnya },{ quoted: nay1});
}
const isUrl = (url) => {return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))}
const sendText = (teksnya, fiturnya) => {
const buttons = [
{buttonId: `.${fiturnya}`, buttonText: {displayText: `NEXT`}, type: 1},
]
const buttonMessage = {
text: "Loading...",footer: teksnya,buttons: buttons,headerType: 1}
nayla.sendMessage(from, buttonMessage, {quoted:nay1})
}
const prosess = (teksnya) => {
nayla.sendMessage(from, { text: teksnya },{ quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {})},message: {"extendedTextMessage": {"text": `HY : ${pushname}\n❀ RUNTIME : ${kyun(runtime)}`, 'title':'2', 'jpegThumbnail': fs.readFileSync(`./media/image/prosess.jpg`)}}}})
}; 
const errorr = (teksnya) => {
nayla.sendMessage(from, { text: teksnya },{ quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {})},message: {"extendedTextMessage": {"text": `HY : ${pushname}\n❀ RUNTIME : ${kyun(runtime)}`, 'title':'2', 'jpegThumbnail': fs.readFileSync(`./media/image/error.jpg`)}}}})
};
const sukses = (teksnya) => {
nayla.sendMessage(from, { text: teksnya },{ quoted: {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {})},message: {"extendedTextMessage": {"text": `HY : ${pushname}\n❀ RUNTIME : ${kyun(runtime)}`, 'title':'2', 'jpegThumbnail': fs.readFileSync(`./media/image/sukses.jpg`)}}}})
};
nayla.sendnew = async (satu, dua, tiga) => {return await generateWAMessage(satu, dua, {...tiga ,userJid: nayla.authState.creds.me.id,upload: nayla.waUploadToServer})}      
const sendMenu = async (satu, dua, tiga, empat) => {
var menu1 = await generateWAMessageFromContent(from, {
"templateMessage": {"hydratedTemplate": {...empat.message,"hydratedContentText": dua,"hydratedFooterText": tiga,"hydratedButtons": [
{"urlButton": {"displayText": "SOURCE CODE","url": "https://youtube.com/channel/UCeQaKIQQhDNHMOq_odQh5Sw"}},
{"urlButton": {"displayText": "OWNER","url": "https://wa.me/"+ nomerowner}},
{"quickReplyButton": {"displayText": "DONASI","id": `${prefix}donasi`}},
{"quickReplyButton": {"displayText": "MYGRUB","id": `${prefix}mygrub`,}},
{"quickReplyButton": {"displayText": "SYARAT & KETENTUAN","id": `${prefix}desk`}}
]}}}, {})
nayla.relayMessage(satu, menu1.message, { messageId: menu1.key.id })
}
const sendMenuu = async (satu, dua, tiga, empat) => {
var menuu1 = await generateWAMessageFromContent(from, {
"templateMessage": {"hydratedTemplate": {...empat.message,"hydratedContentText": dua,"hydratedFooterText": tiga,"hydratedButtons": [
{"urlButton": {"displayText": "SOURCE CODE","url": "https://youtube.com/channel/UCeQaKIQQhDNHMOq_odQh5Sw"}},
{"urlButton": {"displayText": "OWNER","url": "https://wa.me/"+ nomerowner}},
{"quickReplyButton": {"displayText": "ALLMENU","id": `${prefix}allmenu`}}
]}}}, {})
nayla.relayMessage(satu, menuu1.message, { messageId: menuu1.key.id })
}
const nextt = (satu, dua, tiga, empat) => {
const buttons0 = [{buttonId: `${prefix + satu}`, buttonText: {displayText:dua}, type: 1}]
const buttonMessage0 = {image: {url:tiga},caption: empat, footerText: 'Loading...',buttons: buttons0,headerType: 4}
nayla.sendMessage(from, buttonMessage0, {quoted:nay1})}
const emote = (satu, dua) => {
try{	    
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
emoji.get(satu)
.then(emoji => {
const buttons = [{buttonId: "y", buttonText: {displayText:satu}, type: 1}]
const buttonMessage = {image: {url: emoji.images[dua].url},caption: "NIH",footerText: 'Loading...',buttons: buttons,headerType: 4}
nayla.sendMessage(from, buttonMessage, {quoted:nay1})
})
} catch (e) {
reply("Emoji error, silahkan masukkan emoji lain\nNOTE : Cukup masukkan 1 emoji")
}
}
// NOTE KLO MAU AMBIL FITUR MINIMAL ADD "RIMURUBOTZ" DI THX TO BOT KLAEN
const hacker = (satu, dua, tiga, empat) => {
const A = [
{buttonId: `${prefix + satu} yakin`, buttonText: {displayText: 'YAKIN!'}, type: 1},
{buttonId: `${prefix + satu} tidak`, buttonText: {displayText: 'TIDAK!'}, type: 1}]
const B = { image: {url: tiga}, caption: dua + " saat ini, apakah anda ingin hack " + dua, footerText: 'loading...', buttons: A,headerType: 4}
hack1 = fs.readFileSync(`./media/image/${dua}2.jpg`)
hack2 = empat          
if (!q)return nayla.sendMessage(from, B, {quoted:nay})
if ((args[0]) === 'yakin') {	
const A = [{buttonId: `${prefix + satu} termux`, buttonText: {displayText: 'TERMUX!'}, type: 1},
{buttonId: `${prefix + satu} cangkul`, buttonText: {displayText: 'CANGKUL!'}, type: 1}]
const B = {text: `SILAHKAN PILIH METODE DI BAWAH INI`, footer: `Loading...`, buttons: A, headerType: 1}
nayla.sendMessage(from, B, {quoted:nay})
} else if ((args[0]) === 'tidak') {reply("Baiklah")
} else if ((args[0]) === 'termux') {nayla.sendMessage(from, {sticker : termux}, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `TUNGGU SEBENTAR... SEDANG HACK ${dua} MAKE TERMUX😱😤`} } }}) 	
setTimeout( () => {
nayla.sendMessage(from, {image:hack1, caption:hack2}, {quoted:nay1})
}, 10000)  
} else if ((args[0]) === 'cangkul') {nayla.sendMessage(from, {sticker : cangkul}, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `TUNGGU SEBENTAR... SEDANG HACK ${dua} MAKE CANGKUL😱😤`} } }}) 	
setTimeout( () => {
nayla.sendMessage(from, {image:hack1, caption:hack2}, {quoted:nay1})
}, 10000)  
}
};
const txt = nay.message.conversation 
 if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakgambar[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
ok1 = fs.readFileSync("./media/sticker/ok.webp")
nayla.sendMessage(from, {sticker:ok1},{quoted: { key: { fromMe: false, participant: `${sender.split("@")[0]}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `🍭JAWABAN KAMU BENAR🍡\n*MAMAK KAMU PASTI BANGGA*`} } }})
delete tebakgambar[sender.split('@')[0]]
fs.writeFileSync(`./game/tebakgambar.json`, JSON.stringify(tebakgambar))
}
} 		
if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebaklirik[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
ok1 = fs.readFileSync("./media/sticker/ok.webp")
nayla.sendMessage(from, {sticker:ok1},{quoted: { key: { fromMe: false, participant: `${sender.split("@")[0]}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `🍭JAWABAN KAMU BENAR🍡\n*MAMAK KAMU PASTI BANGGA*`} } }})
delete tebaklirik[sender.split('@')[0]]
fs.writeFileSync(`./game/tebaklirik.json`, JSON.stringify(tebaklirik))
}
} 										
if (tebakkimia.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakkimia[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
ok1 = fs.readFileSync("./media/sticker/ok.webp")
nayla.sendMessage(from, {sticker:ok1},{quoted: { key: { fromMe: false, participant: `${sender.split("@")[0]}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `🍭JAWABAN KAMU BENAR🍡\n*MAMAK KAMU PASTI BANGGA*`} } }})
delete tebakkimia[sender.split('@')[0]]
fs.writeFileSync(`./game/tebakkimia.json`, JSON.stringify(tebakkimia))
}
} 										
if (tebakjenaka.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakjenaka[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
ok1 = fs.readFileSync("./media/media/sticker/ok.webp")
nayla.sendMessage(from, {sticker:ok1},{quoted: { key: { fromMe: false, participant: `${sender.split("@")[0]}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `🍭JAWABAN KAMU BENAR🍡\n*MAMAK KAMU PASTI BANGGA*`} } }})
delete tebakjenaka[sender.split('@')[0]]
fs.writeFileSync(`./game/tebakjenaka.json`, JSON.stringify(tebakjenaka))
}
} 										
if (tebakbendera.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = tebakbendera[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
ok1 = fs.readFileSync("./media/sticker/ok.webp")
nayla.sendMessage(from, {sticker:ok1},{quoted: { key: { fromMe: false, participant: `${sender.split("@")[0]}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `🍭JAWABAN KAMU BENAR🍡\n*MAMAK KAMU PASTI BANGGA*`} } }})
delete tebakbendera[sender.split('@')[0]]
fs.writeFileSync(`./game/tebakbendera.json`, JSON.stringify(tebakbendera))
}
} 										
if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
kuis = true
jawaban = caklontong[sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
ok1 = fs.readFileSync("./media/sticker/ok.webp")
nayla.sendMessage(from, {sticker:ok1},{quoted: { key: { fromMe: false, participant: `${sender.split("@")[0]}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `🍭JAWABAN KAMU BENAR🍡\n*MAMAK KAMU PASTI BANGGA*`} } }})
delete caklontong[sender.split('@')[0]]
fs.writeFileSync(`./game/caklontong.json`, JSON.stringify(caklontong))
}
} 
var premi = "♟"
if (isPrem) {premi = '♛'} 
var owneri = "♟"
if (isOwner) {owneri = '♛'} 
var antilinki = "♟"
if (isAntiLink) {antilinki = '♛'} 
var antivirtexi = "♟"
if (isAntiVirtex) {antivirtexi = '♛'} 
var antitagi = "♟"
if (isAntitag) {antitagi = '♛'} 
if (isGroup) { 
var infoq = `[ *INFORMATION* ]
┃│[ ♟ ] => *NOT*
║│[ ♛ ] => *YES*
┃│✄ *PREM* : ${premi}
║│✄ *OWNER* : ${owneri}
┃│✄ *ANTITAG* : ${antilinki}
║│✄ *ANTIVIRTEX* : ${antivirtexi}
┃│✄ *ANTITAG* : ${antitagi}`
} // GROUP
if (!isGroup) { 
var infoq = `[ *INFORMATION* ]
┃│[ ♟ ] => *NOT*
║│[ ♛ ] => *YES*
┃│✄ *PREM* : ${premi}
║│✄ *OWNER* : ${owneri}`
}

/* UANG  & REGISTER */ 
// NOTE KLO MAU AMBIL FITUR MINIMAL ADD "RIMURUBOTZ" DI THX TO BOT KLAEN
const tamat = JSON.parse(fs.readFileSync('./database/user/tamat.json'))
const hadiah = JSON.parse(fs.readFileSync('./database/user/hadiah.json'))
const boom = JSON.parse(fs.readFileSync(`./database/user/boom.json`))
const _registered = JSON.parse(fs.readFileSync('./database/user/registered.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const officeruser = JSON.parse(fs.readFileSync('./database/bot/user.json'))
const waifu = JSON.parse(fs.readFileSync('./database/user/waifu.json'))
const officer = JSON.parse(fs.readFileSync('./database/bot/officer.json'))
const hp = JSON.parse(fs.readFileSync('./database/user/hp.json'))
const karakter = JSON.parse(fs.readFileSync('./database/user/karakter.json'))
const isRegistered = _registered.includes(sender)
const isTamat = tamat.includes(sender)
const isBoom = boom.includes(sender) 
const isOfficeruser = officeruser.includes(sender) 
daftazz = "KAMU BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN PILIH PILIHAN DIBAWAH, APAKAH ANDA INGIN BERGABUNG?"
const addKoinUser = (userid, amount) => {
let position = false
Object.keys(uang).forEach((i) => {
if (uang[i].id === userid) {
position = i
}})
if (position !== false) {
uang[position].uang += amount
fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
}} 
// KARAKTER

const checkATMuser = (userid) => {
let position = false
Object.keys(uang).forEach((i) => {
if (uang[i].id === userid) {
position = i
}})
if (position !== false) {
return uang[position].uang
}}
const resetuang = (userid) => {
let uang3 = false
Object.keys(uang).forEach((i) => {
if (uang[i].id === userid) {
uang3 = i
}})
if (uang3 !== false) {
uang[uang3].uang = 1
fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))}}
function _0x1b9d(_0x323e32,_0x1a01df){const _0x33e08a=_0x57c3();return _0x1b9d=function(_0x441f66,_0x2434a0){_0x441f66=_0x441f66-(-0x9*-0x373+-0xb*0x18b+0x2*-0x667);let _0x2324a6=_0x33e08a[_0x441f66];return _0x2324a6;},_0x1b9d(_0x323e32,_0x1a01df);}const _0x56c0e2=_0x1b9d;(function(_0xf39f81,_0x310884){const _0x11b36b=_0x1b9d,_0x1b1b81=_0xf39f81();while(!![]){try{const _0x18d910=parseInt(_0x11b36b(0x17e))/(0x1045+-0x1ce5+-0x35*-0x3d)*(-parseInt(_0x11b36b(0x178))/(0x16de+-0x179c+0xc0))+-parseInt(_0x11b36b(0x147))/(-0x2646+0x22e5*-0x1+0x492e)*(parseInt(_0x11b36b(0x159))/(-0xb06+0x15f*-0xf+-0x1f*-0x105))+parseInt(_0x11b36b(0x182))/(-0x9f2+0x107d+-0x686)*(parseInt(_0x11b36b(0x199))/(-0x70+-0x1288+0x2*0x97f))+parseInt(_0x11b36b(0x191))/(-0x1*-0x1513+0x2502+-0x2*0x1d07)+-parseInt(_0x11b36b(0x184))/(0x2464+-0x24*-0x63+-0x3248)*(-parseInt(_0x11b36b(0x163))/(-0x3*0x9e3+-0x1102+0x2eb4))+-parseInt(_0x11b36b(0x177))/(0xd*0x1c5+0x1af9+0xc7c*-0x4)*(parseInt(_0x11b36b(0x14e))/(-0x3b*0x39+0x527+0x3*0x2ad))+-parseInt(_0x11b36b(0x155))/(0x18d7+0x202a+-0x38f5);if(_0x18d910===_0x310884)break;else _0x1b1b81['push'](_0x1b1b81['shift']());}catch(_0x55fd35){_0x1b1b81['push'](_0x1b1b81['shift']());}}}(_0x57c3,0x1*0x6f82d+-0x63d5a+0x3c7f9));const karakterAdd=_0x11d98e=>{const _0x1239e5=_0x1b9d,_0x13db7d={'toCnX':_0x1239e5(0x161),'UQbwk':_0x1239e5(0x192)+_0x1239e5(0x197)+_0x1239e5(0x167)},_0x4da661={'id':_0x11d98e,'karakterr':_0x13db7d[_0x1239e5(0x188)]};karakter[_0x1239e5(0x154)](_0x4da661),fs[_0x1239e5(0x183)+_0x1239e5(0x181)](_0x13db7d[_0x1239e5(0x176)],JSON[_0x1239e5(0x166)](karakter));},BuyKarakter=(_0x213cf9,_0x2f69a1)=>{const _0x3600b9=_0x1b9d,_0x4e81da={'muLwu':function(_0x3e2ca3,_0x17ea3e){return _0x3e2ca3==_0x17ea3e;},'vcrWI':function(_0x28d0bd,_0x107b7c){return _0x28d0bd===_0x107b7c;},'tGLeg':function(_0x5ecc40,_0x3f028c){return _0x5ecc40!==_0x3f028c;},'VTBap':_0x3600b9(0x192)+_0x3600b9(0x197)+_0x3600b9(0x167)};for(let _0x10f76b of karakter){if(_0x4e81da[_0x3600b9(0x185)](_0x10f76b['id'],_0x213cf9)){let _0x5c3c4f=![];Object[_0x3600b9(0x190)](karakter)[_0x3600b9(0x160)](_0x49da8f=>{const _0x2cc7e9=_0x3600b9;_0x4e81da[_0x2cc7e9(0x14b)](karakter[_0x49da8f]['id'],_0x213cf9)&&(_0x5c3c4f=_0x49da8f);}),_0x4e81da[_0x3600b9(0x15b)](_0x5c3c4f,![])&&(karakter[_0x5c3c4f][_0x3600b9(0x19c)]=_0x2f69a1,fs[_0x3600b9(0x183)+_0x3600b9(0x181)](_0x4e81da[_0x3600b9(0x17a)],JSON[_0x3600b9(0x166)](karakter)));}}},karakter1=(_0x4430b4,_0x13e4f5,_0x1c198e)=>{const _0x49134e=_0x1b9d,_0x48d3c6={'bYfGC':function(_0x447535,_0x4adb81){return _0x447535<=_0x4adb81;},'YsSZQ':function(_0x3a294f,_0x1f3616){return _0x3a294f(_0x1f3616);},'YIwLp':function(_0x5c7a4a,_0x190293){return _0x5c7a4a(_0x190293);},'oqqYF':function(_0x449160,_0x2cfea9){return _0x449160>=_0x2cfea9;},'KCRGI':function(_0x4e313a,_0x4107fa){return _0x4e313a+_0x4107fa;},'JDnMI':function(_0x1ad6a6,_0x49d9b9){return _0x1ad6a6+_0x49d9b9;},'cRixd':_0x49134e(0x149)+_0x49134e(0x180),'LNarZ':_0x49134e(0x172),'TCURM':function(_0x184827,_0x381937,_0x4eda3f){return _0x184827(_0x381937,_0x4eda3f);},'KImwa':function(_0x178d36,_0x50a9ac,_0x3bd31d){return _0x178d36(_0x50a9ac,_0x3bd31d);}},_0x4d80fb=_0x4430b4,_0x416692=_0x4d80fb;if(_0x48d3c6[_0x49134e(0x15e)](_0x48d3c6[_0x49134e(0x17b)](checkATMuser,sender),_0x416692))return _0x48d3c6[_0x49134e(0x15d)](reply,_0x49134e(0x170)+_0x49134e(0x144)+_0x49134e(0x15f)+_0x49134e(0x193)+_0x49134e(0x18c)+_0x49134e(0x175)+_0x49134e(0x165));_0x48d3c6[_0x49134e(0x14a)](_0x48d3c6[_0x49134e(0x17b)](checkATMuser,sender),_0x416692)&&(nayla[_0x49134e(0x18e)+'e'](from,{'image':{'url':_0x48d3c6[_0x49134e(0x174)](_0x48d3c6[_0x49134e(0x189)](_0x48d3c6[_0x49134e(0x164)],_0x13e4f5),_0x48d3c6[_0x49134e(0x18b)])},'caption':_0x1c198e},{'quoted':nay1}),_0x48d3c6[_0x49134e(0x16c)](confirmATM,sender,_0x416692),_0x48d3c6[_0x49134e(0x14d)](BuyKarakter,sender,_0x13e4f5));},karakter2=(_0x1cca4c,_0x281252)=>{const _0x1a65cc=_0x1b9d,_0x21e7f3={'exEWx':_0x1a65cc(0x195)+_0x1a65cc(0x168),'eewpP':function(_0x1b092d,_0x15bb97){return _0x1b092d+_0x15bb97;},'kfdux':function(_0x39fef7,_0x15e3f5){return _0x39fef7+_0x15e3f5;},'WdjwV':_0x1a65cc(0x149)+_0x1a65cc(0x180),'NFZWJ':_0x1a65cc(0x172),'QTmNK':_0x1a65cc(0x15a)+'.'},_0x827604=[{'buttonId':prefix+(_0x1a65cc(0x14f)+'r\x20')+_0x1cca4c+'1','buttonText':{'displayText':_0x21e7f3[_0x1a65cc(0x17c)]},'type':0x1}],_0x1aeb7f={'image':{'url':_0x21e7f3[_0x1a65cc(0x18f)](_0x21e7f3[_0x1a65cc(0x1a0)](_0x21e7f3[_0x1a65cc(0x19b)],_0x1cca4c),_0x21e7f3[_0x1a65cc(0x153)])},'caption':_0x281252,'footer':_0x21e7f3[_0x1a65cc(0x148)],'buttons':_0x827604,'headerType':0x4};nayla[_0x1a65cc(0x18e)+'e'](from,_0x1aeb7f,{'quoted':nay1});};menukarakter=prefix+(_0x56c0e2(0x14f)+_0x56c0e2(0x150)+_0x56c0e2(0x18d)+_0x56c0e2(0x16d))+prefix+(_0x56c0e2(0x14f)+_0x56c0e2(0x17f)+_0x56c0e2(0x16a)+_0x56c0e2(0x173))+prefix+(_0x56c0e2(0x14f)+_0x56c0e2(0x156)+_0x56c0e2(0x145)+_0x56c0e2(0x173))+prefix+(_0x56c0e2(0x14f)+_0x56c0e2(0x19f)+_0x56c0e2(0x19a)+_0x56c0e2(0x194))+prefix+(_0x56c0e2(0x14f)+_0x56c0e2(0x171)+_0x56c0e2(0x18a)+_0x56c0e2(0x151))+prefix+(_0x56c0e2(0x14f)+_0x56c0e2(0x19d)+_0x56c0e2(0x158)+_0x56c0e2(0x196)+_0x56c0e2(0x162))+checkATMuser(sender);const addhp=_0x38ace5=>{const _0x112c91=_0x56c0e2,_0x47e11b={'fjrNm':_0x112c91(0x192)+_0x112c91(0x17d)+_0x112c91(0x187)},_0x1af9a6={'id':_0x38ace5,'hp':0x64};hp[_0x112c91(0x154)](_0x1af9a6),fs[_0x112c91(0x183)+_0x112c91(0x181)](_0x47e11b[_0x112c91(0x16b)],JSON[_0x112c91(0x166)](hp));},nothp=(_0x4029f6,_0xfe8d74)=>{const _0x4e9d9f=_0x56c0e2,_0x2567a1={'RwIwp':function(_0x23fabf,_0xd26afd){return _0x23fabf===_0xd26afd;},'MvHdO':function(_0x21237e,_0x32c756){return _0x21237e!==_0x32c756;},'gNeNq':_0x4e9d9f(0x192)+_0x4e9d9f(0x17d)+_0x4e9d9f(0x187)};let _0x5705fd=![];Object[_0x4e9d9f(0x190)](hp)[_0x4e9d9f(0x160)](_0x5e108a=>{const _0x25dccf=_0x4e9d9f;_0x2567a1[_0x25dccf(0x19e)](hp[_0x5e108a]['id'],_0x4029f6)&&(_0x5705fd=_0x5e108a);}),_0x2567a1[_0x4e9d9f(0x179)](_0x5705fd,![])&&(hp[_0x5705fd]['hp']-=_0xfe8d74,fs[_0x4e9d9f(0x183)+_0x4e9d9f(0x181)](_0x2567a1[_0x4e9d9f(0x16e)],JSON[_0x4e9d9f(0x166)](hp)));},resethp=_0x5d9091=>{const _0x33e88a=_0x56c0e2,_0x30da6d={'jKwEH':function(_0x56b3e1,_0x2d38c3){return _0x56b3e1===_0x2d38c3;},'lBFjx':function(_0x58952a,_0x3f2dfd){return _0x58952a!==_0x3f2dfd;},'iuuVr':_0x33e88a(0x192)+_0x33e88a(0x17d)+_0x33e88a(0x187)};let _0x3959dd=![];Object[_0x33e88a(0x190)](hp)[_0x33e88a(0x160)](_0x277aee=>{const _0x10c63e=_0x33e88a;_0x30da6d[_0x10c63e(0x198)](hp[_0x277aee]['id'],_0x5d9091)&&(_0x3959dd=_0x277aee);}),_0x30da6d[_0x33e88a(0x16f)](_0x3959dd,![])&&(hp[_0x3959dd]['hp']=0x6cd*-0x1+-0x5bc*-0x5+-0x15c6,fs[_0x33e88a(0x183)+_0x33e88a(0x181)](_0x30da6d[_0x33e88a(0x157)],JSON[_0x33e88a(0x166)](hp)));},plushp=_0x2311a7=>{const _0xd99fbb=_0x56c0e2,_0x2b95e0={'TOFmn':function(_0x51aacd,_0x489eac){return _0x51aacd===_0x489eac;},'WAvLj':_0xd99fbb(0x15c),'ZUtpg':_0xd99fbb(0x192)+_0xd99fbb(0x17d)+_0xd99fbb(0x187)};let _0x5ef311=![];Object[_0xd99fbb(0x190)](hp)[_0xd99fbb(0x160)](_0x108504=>{const _0x5095eb=_0xd99fbb;_0x2b95e0[_0x5095eb(0x169)](hp[_0x108504]['id'],_0x2311a7)&&(hp[_0x108504]['hp']=_0x2b95e0[_0x5095eb(0x14c)],fs[_0x5095eb(0x183)+_0x5095eb(0x181)](_0x2b95e0[_0x5095eb(0x186)],JSON[_0x5095eb(0x166)](hp)));});},sendButton=(_0x9eb5f0,_0x541ba4,_0x482e8e,_0x288dc8)=>{const _0xeb1907=_0x56c0e2,_0x126121={'GscnJ':_0xeb1907(0x15a)+'.'},_0x5281d3=[{'buttonId':''+prefix+_0x541ba4,'buttonText':{'displayText':_0x9eb5f0},'type':0x1}],_0x2a1a7a={'image':{'url':_0x288dc8},'caption':_0x482e8e,'footer':_0x126121[_0xeb1907(0x152)],'buttons':_0x5281d3,'headerType':0x4};nayla[_0xeb1907(0x18e)+'e'](from,_0x2a1a7a,{'quoted':nay1});},pluskoin=(_0xa16bfd,_0xe947ed)=>{const _0x1e36d4=_0x56c0e2,_0x4ddcae={'zLwWj':function(_0x28b807,_0x5e9446,_0x1fd602){return _0x28b807(_0x5e9446,_0x1fd602);}};_0x4ddcae[_0x1e36d4(0x146)](addKoinUser,_0xa16bfd,_0xe947ed);};function _0x57c3(){const _0x4f5346=['287815TFYAMK','writeFileS','24HxyTDA','vcrWI','ZUtpg','son','toCnX','JDnMI','ARGA*\x20:\x2010','LNarZ','\x20kumpulkan','HARGA*\x20:\x209','sendMessag','eewpP','keys','2526132EXAHNw','./database','.\x20silahkan','5000\x0a\x0a','BELI\x20SEKAR','000\x0a\x0a*UANG','/user/kara','jKwEH','54BhwUns','HARGA*\x20:\x207','WdjwV','karakterr','r\x20ijat\x0a*HA','RwIwp','r\x20hacker\x0a*','kfdux','kamu\x20belum','RGA*\x20:\x20500','zLwWj','176211heoDie','QTmNK','./media/ka','oqqYF','muLwu','WAvLj','KImwa','1309055nBgsmj','buykarakte','r\x20zombie\x0a*','0000\x0a\x0a','GscnJ','NFZWJ','push','6068604UwsFRb','r\x20mark\x0a*HA','iuuVr','RGA*\x20:\x20150','4qBzbRj','Loading...','tGLeg','100','YIwLp','bYfGC','\x20mencukupi','forEach','NaN','\x20KAMU*\x20:\x20\x20','1263069PeFxmH','cRixd','nanti','stringify','kter.json','ANG','TOFmn','RGA*\x20:\x20250','fjrNm','TCURM','500\x0a\x0a','gNeNq','lBFjx','maaf\x20uang\x20','r\x20ilham\x0a*H','.jpg','00\x0a\x0a','KCRGI','\x20dan\x20beli\x20','UQbwk','20gIefwC','2ZVRoFn','MvHdO','VTBap','YsSZQ','exEWx','/user/hp.j','201874xOkQCY','r\x20alok\x0a*HA','rakter/','ync'];_0x57c3=function(){return _0x4f5346;};return _0x57c3();}
if (isRegistered) {
var hpnya1 = "undefined"
Object.keys(hp).forEach((i) => {
if (hp[i].id === sender) { 
hpnya1 = hp[i].hp 
}}) 
var uangnya1 = "undefined"
Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) { 
uangnya1 = uang[i].uang
}}) }
if (hpnya1 <= 0) return resethp(sender)
if (uangnya1 <= 0) return resetuang(sender)
// NOTE KLO MAU AMBIL FITUR MINIMAL ADD "RIMURUBOTZ" DI THX TO BOT KLAEN

if (!isBoom) {
bom = "1"
Object.keys(boom).forEach((i) => {
if (boom[i].id === sender) {
var bom1 = "❲1⃣❳"
var bom2 = "❲2⃣❳"
var bom3 = "❲3⃣❳"
var bom4 = "❲4⃣❳"
var bom5 = "❲5⃣❳"
var bom6 = "❲6⃣❳"
var bom7 = "❲7⃣❳"
var bom8 = "❲8⃣❳"
var bom9 = "❲9⃣❳"
if (boom[i].bom1 == true) {bom1 = "❲🔅❳"}
if (boom[i].bom2 == true) {bom2 = "❲🔅❳"}
if (boom[i].bom3 == true) {bom3 = "❲🔅❳"}
if (boom[i].bom4 == true) {bom4 = "❲🔅❳"}
if (boom[i].bom5 == true) {bom5 = "❲🔅❳"}
if (boom[i].bom6 == true) {bom6 = "❲🔅❳"}
if (boom[i].bom7 == true) {bom7 = "❲🔅❳"}
if (boom[i].bom8 == true) {bom8 = "❲🔅❳"}
if (boom[i].bom9 == true) {bom9 = "❲🔅❳"} 

const sendBoom = (satu, dua, tiga, empat, lima, enam, tujuh, delapan, sembilan) => {
bomx = `❲ *HARD-GAME* ❳\n\n${satu}${dua}${tiga}\n${empat}${lima}${enam}\n${tujuh}${delapan}${sembilan}\n\nTebakan kamu benar, ayo tebak lagi!`
reply(bomx)}
const bomzzzz = {id: sender, bom1 : boom[i].bom1, bom2 : boom[i].bom2, bom3 : boom[i].bom3, bom4 : boom[i].bom4, bom5 : boom[i].bom5, bom6 : boom[i].bom6, bom7 : boom[i].bom7, bom8 : boom[i].bom8, bom9 : boom[i].bom9, bomnya : boom[i].bomnya} 
fs.writeFileSync('./database/user/boom.json', JSON.stringify(boom))
if (boom[i].id == sender && boom[i].bom1 == false && boom[i].bom2 == true && boom[i].bom3 == true && boom[i].bom4 == true && boom[i].bom5 == true && boom[i].bom6 == true && boom[i].bom7 == true && boom[i].bom8 == true && boom[i].bom9 == true && boom[i].bomnya == "1") { boom.splice(bomzzzz, 1)
fs.writeFileSync('./database/user/boom.json', JSON.stringify(boom))
sendButton("MAIN LAGI??", "tebakbom", "WAHH ANDA BERHASIL MEMENANGKAN GAME INI!!","./media/image/bom.jpg")
sendButton("SPIN", "xcvbnmy", "KERENA ANDA TELAH MEMENANGKAN GAME NYA, ANDA BISA SPIN DAN DAPATKAN HADIAH RANDOM DISINI! AYO SPIN DAN SEMOGA BERUNTUNG!","./media/image/spin.jpg")}
if (boom[i].id == sender && boom[i].bom1 == true && boom[i].bom2 == false && boom[i].bom3 == true && boom[i].bom4 == true && boom[i].bom5 == true && boom[i].bom6 == true && boom[i].bom7 == true && boom[i].bom8 == true && boom[i].bom9 == true && boom[i].bomnya == "2") { boom.splice(bomzzzz, 1)
fs.writeFileSync('./database/user/boom.json', JSON.stringify(boom))
sendButton("MAIN LAGI??", "tebakbom", "WAHH ANDA BERHASIL MEMENANGKAN GAME INI!!","./media/image/bom.jpg")
sendButton("SPIN", "xcvbnmy", "KERENA ANDA TELAH MEMENANGKAN GAME NYA, ANDA BISA SPIN DAN DAPATKAN HADIAH RANDOM DISINI! AYO SPIN DAN SEMOGA BERUNTUNG!","./media/image/spin.jpg")}
if (boom[i].id == sender && boom[i].bom1 == true && boom[i].bom2 == true && boom[i].bom3 == false && boom[i].bom4 == true && boom[i].bom5 == true && boom[i].bom6 == true && boom[i].bom7 == true && boom[i].bom8 == true && boom[i].bom9 == true && boom[i].bomnya == "3") { boom.splice(bomzzzz, 1)
fs.writeFileSync('./database/user/boom.json', JSON.stringify(boom))
sendButton("MAIN LAGI??", "tebakbom", "WAHH ANDA BERHASIL MEMENANGKAN GAME INI!!","./media/image/bom.jpg")
sendButton("SPIN", "xcvbnmy", "KERENA ANDA TELAH MEMENANGKAN GAME NYA, ANDA BISA SPIN DAN DAPATKAN HADIAH RANDOM DISINI! AYO SPIN DAN SEMOGA BERUNTUNG!","./media/image/spin.jpg")}
if (boom[i].id == sender && boom[i].bom1 == true && boom[i].bom2 == true && boom[i].bom3 == true && boom[i].bom4 == false && boom[i].bom5 == true && boom[i].bom6 == true && boom[i].bom7 == true && boom[i].bom8 == true && boom[i].bom9 == true && boom[i].bomnya == "4") { boom.splice(bomzzzz, 1)
fs.writeFileSync('./database/user/boom.json', JSON.stringify(boom))
sendButton("MAIN LAGI??", "tebakbom", "WAHH ANDA BERHASIL MEMENANGKAN GAME INI!!","./media/image/bom.jpg")
sendButton("SPIN", "xcvbnmy", "KERENA ANDA TELAH MEMENANGKAN GAME NYA, ANDA BISA SPIN DAN DAPATKAN HADIAH RANDOM DISINI! AYO SPIN DAN SEMOGA BERUNTUNG!","./media/image/spin.jpg")}
if (boom[i].id == sender && boom[i].bom1 == true && boom[i].bom2 == true && boom[i].bom3 == true && boom[i].bom4 == true && boom[i].bom5 == false && boom[i].bom6 == true && boom[i].bom7 == true && boom[i].bom8 == true && boom[i].bom9 == true && boom[i].bomnya == "5") { boom.splice(bomzzzz, 1)
fs.writeFileSync('./database/user/boom.json', JSON.stringify(boom))
sendButton("MAIN LAGI??", "tebakbom", "WAHH ANDA BERHASIL MEMENANGKAN GAME INI!!","./media/image/bom.jpg")
sendButton("SPIN", "xcvbnmy", "KERENA ANDA TELAH MEMENANGKAN GAME NYA, ANDA BISA SPIN DAN DAPATKAN HADIAH RANDOM DISINI! AYO SPIN DAN SEMOGA BERUNTUNG!","./media/image/spin.jpg")}
if (boom[i].id == sender && boom[i].bom1 == true && boom[i].bom2 == true && boom[i].bom3 == true && boom[i].bom4 == true && boom[i].bom5 == true && boom[i].bom6 == false && boom[i].bom7 == true && boom[i].bom8 == true && boom[i].bom9 == true && boom[i].bomnya == "6") { boom.splice(bomzzzz, 1)
fs.writeFileSync('./database/user/boom.json', JSON.stringify(boom))
sendButton("MAIN LAGI??", "tebakbom", "WAHH ANDA BERHASIL MEMENANGKAN GAME INI!!","./media/image/bom.jpg")
sendButton("SPIN", "xcvbnmy", "KERENA ANDA TELAH MEMENANGKAN GAME NYA, ANDA BISA SPIN DAN DAPATKAN HADIAH RANDOM DISINI! AYO SPIN DAN SEMOGA BERUNTUNG!","./media/image/spin.jpg")}
if (boom[i].id == sender && boom[i].bom1 == true && boom[i].bom2 == true && boom[i].bom3 == true && boom[i].bom4 == true && boom[i].bom5 == true && boom[i].bom6 == true && boom[i].bom7 == false && boom[i].bom8 == true && boom[i].bom9 == true && boom[i].bomnya == "7") { boom.splice(bomzzzz, 1)
fs.writeFileSync('./database/user/boom.json', JSON.stringify(boom))
sendButton("MAIN LAGI??", "tebakbom", "WAHH ANDA BERHASIL MEMENANGKAN GAME INI!!","./media/image/bom.jpg")
sendButton("SPIN", "xcvbnmy", "KERENA ANDA TELAH MEMENANGKAN GAME NYA, ANDA BISA SPIN DAN DAPATKAN HADIAH RANDOM DISINI! AYO SPIN DAN SEMOGA BERUNTUNG!","./media/image/spin.jpg")}
if (boom[i].id == sender && boom[i].bom1 == true && boom[i].bom2 == true && boom[i].bom3 == true && boom[i].bom4 == true && boom[i].bom5 == true && boom[i].bom6 == true && boom[i].bom7 == true && boom[i].bom8 == false && boom[i].bom9 == true && boom[i].bomnya == "8") { boom.splice(bomzzzz, 1)
fs.writeFileSync('./database/user/boom.json', JSON.stringify(boom))
sendButton("MAIN LAGI??", "tebakbom", "WAHH ANDA BERHASIL MEMENANGKAN GAME INI!!","./media/image/bom.jpg")
sendButton("SPIN", "xcvbnmy", "KERENA ANDA TELAH MEMENANGKAN GAME NYA, ANDA BISA SPIN DAN DAPATKAN HADIAH RANDOM DISINI! AYO SPIN DAN SEMOGA BERUNTUNG!","./media/image/spin.jpg")}
if (boom[i].id == sender && boom[i].bom1 == true && boom[i].bom2 == true && boom[i].bom3 == true && boom[i].bom4 == true && boom[i].bom5 == true && boom[i].bom6 == true && boom[i].bom7 == true && boom[i].bom8 == true && boom[i].bom9 == false && boom[i].bomnya == "9") { boom.splice(bomzzzz, 1)
fs.writeFileSync('./database/user/boom.json', JSON.stringify(boom))
sendButton("MAIN LAGI??", "tebakbom", "WAHH ANDA BERHASIL MEMENANGKAN GAME INI!!","./media/image/bom.jpg")
sendButton("SPIN", "xcvbnmy", "KERENA ANDA TELAH MEMENANGKAN GAME NYA, ANDA BISA SPIN DAN DAPATKAN HADIAH RANDOM DISINI! AYO SPIN DAN SEMOGA BERUNTUNG!","./media/image/spin.jpg")}
if (budy == boom[i].bomnya) {
sendButton("MAIN LAGI??", "tebakbom", "YAHH SAYANG SEKALI, TERNYATA BOOM NYA ADA DI NOMER " + boom[i].bomnya + "DAN ANDA KALAH:( UANG ANDA 1000 TERBUANG SIA SIA, TAPI SAYA TIDAK PEDULI, MAU COBA LAGI?","./media/image/kalah.jpg")
const bomzzz = {id: sender, bom1 : boom[i].bom1, bom2 : boom[i].bom2, bom3 : boom[i].bom3, bom4 : boom[i].bom4, bom5 : boom[i].bom5, bom6 : boom[i].bom6, bom7 : boom[i].bom7, bom8 : boom[i].bom8, bom9 : boom[i].bom9,bomnya : boom[i].bomnya} 
boom.splice(bomzzz, 1)
fs.writeFileSync('./database/user/boom.json', JSON.stringify(boom))
}
console.log(boom[i].bomnya)
if (budy == '1') {
if(boom[i].bom1 == true) return reply("JAWABAN ITU SUDAH KAMU PILIH SEBELUMNYA")
boom[i].bom1 = true
fs.writeFileSync(`./database/user/boom.json`, JSON.stringify(boom))
sendBoom("❲🔅❳", bom2 ,bom3 ,bom4 ,bom5 ,bom6 ,bom7 ,bom8 ,bom9)}
if (budy == '2') {
if(boom[i].bom2 == true) return reply("JAWABAN ITU SUDAH KAMU PILIH SEBELUMNYA")
boom[i].bom2 = true
fs.writeFileSync(`./database/user/boom.json`, JSON.stringify(boom))
sendBoom(bom1, "❲🔅❳" ,bom3 ,bom4 ,bom5 ,bom6 ,bom7 ,bom8 ,bom9)}
if (budy == '3') {
if(boom[i].bom3 == true) return reply("JAWABAN ITU SUDAH KAMU PILIH SEBELUMNYA")
boom[i].bom3 = true
fs.writeFileSync(`./database/user/boom.json`, JSON.stringify(boom))
sendBoom(bom1, bom2 ,"❲🔅❳" ,bom4 ,bom5 ,bom6 ,bom7 ,bom8 ,bom9)}
if (budy == '4') {
if(boom[i].bom4 == true) return reply("JAWABAN ITU SUDAH KAMU PILIH SEBELUMNYA")
boom[i].bom4 = true
fs.writeFileSync(`./database/user/boom.json`, JSON.stringify(boom))
sendBoom(bom1, bom2 ,bom3 ,"❲🔅❳" ,bom5 ,bom6 ,bom7 ,bom8 ,bom9)}
if (budy == '5') {
if(boom[i].bom5 == true) return reply("JAWABAN ITU SUDAH KAMU PILIH SEBELUMNYA")
boom[i].bom5 = true
fs.writeFileSync(`./database/user/boom.json`, JSON.stringify(boom))
sendBoom(bom1, bom2 ,bom3 ,bom4 ,"❲🔅❳" ,bom6 ,bom7 ,bom8 ,bom9)}
if (budy == '6') {
if(boom[i].bom6 == true) return reply("JAWABAN ITU SUDAH KAMU PILIH SEBELUMNYA")
boom[i].bom6 = true
fs.writeFileSync(`./database/user/boom.json`, JSON.stringify(boom))
sendBoom(bom1, bom2 ,bom3 ,bom4 ,bom5 ,"❲🔅❳" ,bom7 ,bom8 ,bom9)}
if (budy == '7') {
if(boom[i].bom7 == true) return reply("JAWABAN ITU SUDAH KAMU PILIH SEBELUMNYA")
boom[i].bom7 = true
fs.writeFileSync(`./database/user/boom.json`, JSON.stringify(boom))
sendBoom(bom1, bom2 ,bom3 ,bom4 ,bom5 ,bom6 ,"❲🔅❳" ,bom8 ,bom9)}
if (budy == '8') {
if(boom[i].bom8 == true) return reply("JAWABAN ITU SUDAH KAMU PILIH SEBELUMNYA")
boom[i].bom8 = true
fs.writeFileSync(`./database/user/boom.json`, JSON.stringify(boom))
sendBoom(bom1, bom2 ,bom3 ,bom4 ,bom5 ,bom6 ,bom7 ,"❲🔅❳" ,bom9)}
if (budy == '9') {
if(boom[i].bom9 == true) return reply("JAWABAN ITU SUDAH KAMU PILIH SEBELUMNYA")
boom[i].bom9 = true
fs.writeFileSync(`./database/user/boom.json`, JSON.stringify(boom))
sendBoom(bom1, bom2 ,bom3 ,bom4 ,bom5 ,bom6 ,bom7 ,bom8 ,"❲🔅❳")
}}})}
const addHadiah = (userid) => {
const hdh = {id: userid, waifu : 0, mobil : 0, piring : 0, sendok : 0, sandal : 0, sepeda : 0, helikopter : 0}
hadiah.push(hdh)
fs.writeFileSync('./database/user/hadiah.json', JSON.stringify(hadiah))
}
 
const addOfficer  = (userid) => {
const ofc = {id: userid, officer : "NaN"}
officer.push(ofc)
fs.writeFileSync('./database/bot/officer.json', JSON.stringify(officer))
} 
const addWaifu = (userid) => {
const whu = {id: userid, waifu : "NaN"}
waifu.push(whu)
fs.writeFileSync('./database/user/waifu.json', JSON.stringify(waifu))
} 
switch (cmd) {
case 'buywaifu':
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if(!q) return sendButton("BACK","x",`[ *SHOP WAIFU* ]\n\n• *LIST WAIFU*\n~ ${prefix + command} pico\n~ ${prefix + command} hinata\n~ ${prefix + command} kaguya\n~ ${prefix + command} mikasa\n~ ${prefix + command} miku\n~ ${prefix + command} kitakawa\n~ ${prefix + command} yorforger\n~ ${prefix + command} elaina\n\n• *HARGA?*\n~ 35000\n• *NOTE* : Setelah membeli waifu anda akan mendapatkan doujin waifu yang anda beli FREE\nTapi setelah anda membeli karakter baru, maka karakter sebelum nya akan terhapus`, "./media/18/list.jpg")
if ( checkATMuser(sender) <= 34999) return reply(`Harga Waifu 35000 dan uang kamu belum cukup:(, Ayo kumpulkan uang kamu terlebih dahulu, cek? ${prefix}uang`)
Object.keys(waifu).forEach((i) => {
if (waifu[i].id == sender) {
if((args[0]) == "pico") {
waifu[i].waifu = "pico"
fs.writeFileSync('./database/user/waifu.json', JSON.stringify(waifu))
confirmATM(sender, 34999)
sendButton("CEK-MY-WAIFU","cekwaifu","SUKSES MEMBELI WAIFU MHEWHEH SILAHKAN CEK WAIFU ANDA:)",`./media/18/${args[0]}.jpg`)
}
if((args[0]) == "hinata") {
waifu[i].waifu = "hinata"
fs.writeFileSync('./database/user/waifu.json', JSON.stringify(waifu))
confirmATM(sender, 34999)
sendButton("CEK-MY-WAIFU","cekwaifu","SUKSES MEMBELI WAIFU MHEWHEH SILAHKAN CEK WAIFU ANDA:)",`./media/18/${args[0]}.jpg`)
}
if((args[0]) == "kaguya") {
waifu[i].waifu = "kaguya"
fs.writeFileSync('./database/user/waifu.json', JSON.stringify(waifu))
confirmATM(sender, 34999)
sendButton("CEK-MY-WAIFU","cekwaifu","SUKSES MEMBELI WAIFU MHEWHEH SILAHKAN CEK WAIFU ANDA:)",`./media/18/${args[0]}.jpg`)
}
if((args[0]) == "mikasa") {
waifu[i].waifu = "mikasa"
fs.writeFileSync('./database/user/waifu.json', JSON.stringify(waifu))
confirmATM(sender, 34999)
sendButton("CEK-MY-WAIFU","cekwaifu","SUKSES MEMBELI WAIFU MHEWHEH SILAHKAN CEK WAIFU ANDA:)",`./media/18/${args[0]}.jpg`)
}
if((args[0]) == "miku") {
waifu[i].waifu = "miku"
fs.writeFileSync('./database/user/waifu.json', JSON.stringify(waifu))
confirmATM(sender, 34999)
sendButton("CEK-MY-WAIFU","cekwaifu","SUKSES MEMBELI WAIFU MHEWHEH SILAHKAN CEK WAIFU ANDA:)",`./media/18/${args[0]}.jpg`)
}
if((args[0]) == "kitakawa") {
waifu[i].waifu = "kitakawa"
fs.writeFileSync('./database/user/waifu.json', JSON.stringify(waifu))
confirmATM(sender, 34999)
sendButton("CEK-MY-WAIFU","cekwaifu","SUKSES MEMBELI WAIFU MHEWHEH SILAHKAN CEK WAIFU ANDA:)",`./media/18/${args[0]}.jpg`)
}
if((args[0]) == "yorforger") {
waifu[i].waifu = "yorforger"
fs.writeFileSync('./database/user/waifu.json', JSON.stringify(waifu))
confirmATM(sender, 34999)
sendButton("CEK-MY-WAIFU","cekwaifu","SUKSES MEMBELI WAIFU MHEWHEH SILAHKAN CEK WAIFU ANDA:)",`./media/18/${args[0]}.jpg`)
}
if((args[0]) == "elaina") {
waifu[i].waifu = "elaina"
fs.writeFileSync('./database/user/waifu.json', JSON.stringify(waifu))
confirmATM(sender, 34999)
sendButton("CEK-MY-WAIFU","cekwaifu","SUKSES MEMBELI WAIFU MHEWHEH SILAHKAN CEK WAIFU ANDA:)",`./media/18/${args[0]}.jpg`)
}
}})
break
case 'cekwaifu':
case 'mywaifu':
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
Object.keys(waifu).forEach((i) => {
if (waifu[i].id == sender) {
if (waifu[i].waifu == "NaN") return reply(`Maaf anda belum memiliki waifu, silahkan beli waifu di ${prefix}buywaifu`)
sendButton("DOUJIN-WAIFU","doujinwaifu",`[ *CEK-WAIFU* ]\n*NAME* ${waifu[i].waifu}\n*ROLE* : LEGENDS`,`./media/18/${waifu[i].waifu}.jpg`)
}})
break
case 'doujinwaifu':
if(isGroup) return reply("ONLY PESAN PRIBADI")
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
Object.keys(waifu).forEach((i) => {
if (waifu[i].id == sender) {
if (waifu[i].waifu == "NaN") return reply(`Maaf anda belum memiliki waifu, silahkan beli waifu di ${prefix}buywaifu`)
if (waifu[i].waifu == "pico") {
nayla.sendMessage(from, {image:{url:`./media/18/${waifu[i].waifu}1.jpg`}, caption: "*LINK* : https://cin.lol/v/15679"}, {quoted:nay1})
} 
if (waifu[i].waifu == "hinata") {
nayla.sendMessage(from, {image:{url:`./media/18/${waifu[i].waifu}1.jpg`}, caption: "*LINK* : https://cin.lol/v/404140"}, {quoted:nay1})
} 
if (waifu[i].waifu == "kaguya") {
nayla.sendMessage(from, {image:{url:`./media/18/${waifu[i].waifu}1.jpg`}, caption: "*LINK* : https://cin.lol/v/350212"}, {quoted:nay1})
} 
if (waifu[i].waifu == "mikasa") {
nayla.sendMessage(from, {image:{url:`./media/18/${waifu[i].waifu}1.jpg`}, caption: "*LINK* : https://cin.lol/v/98150"}, {quoted:nay1})
} 
if (waifu[i].waifu == "miku") {
nayla.sendMessage(from, {image:{url:`./media/18/${waifu[i].waifu}1.jpg`}, caption: "*LINK* : https://cin.lol/v/342606"}, {quoted:nay1})
} 
if (waifu[i].waifu == "kitakawa") {
nayla.sendMessage(from, {image:{url:`./media/18/${waifu[i].waifu}1.jpg`}, caption: "*LINK* : https://cin.lol/v/388535"}, {quoted:nay1})
} 
if (waifu[i].waifu == "yorforger") {
nayla.sendMessage(from, {image:{url:`./media/18/${waifu[i].waifu}1.jpg`}, caption: "*LINK* : https://cin.lol/v/403530"}, {quoted:nay1})
} 
if (waifu[i].waifu == "elaina") {
nayla.sendMessage(from, {image:{url:`./media/18/${waifu[i].waifu}1.jpg`}, caption: "*LINK* : https://cin.lol/v/378824"}, {quoted:nay1})
}}})
break
case 'mining':
if(isGroup) return reply("ONLY PESAN PRIBADI")
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
if(isOfficeruser) return reply(`ANDA HARUS MEMBALI OFFICER AGAR BISA MENGGUNAKAN FITUR INI:) GUNAKAN COMMAND ${prefix}buyofficer`)
Object.keys(officeruser).forEach((i) => {
if (officeruser[i].id == sender) {
mining = [100,101,102,103,104,105,106,107,108,109,200][Math.floor(Math.random() * ([100,101,102,103,104,105,106,107,108,109,200].length))]
pluskoin(sender, mining)
sendButton("MINING!","mining",`[ *SUKSES MINING* ]\n*HASIL* : ${mining}`,"https://akcdn.detik.net.id/visual/2018/05/09/47c22811-5cd2-492b-9df5-a93f607b20ce_169.jpeg")
}})
break
case 'buyofficer':
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
if (!q) return nayla.sendMessage(from, {image:{url: "./media/image/officer.jpg"}, caption: `[ *BUY OFFICER* ]\n\n• *LIST OFFICER*\n~ Oliyers(Harga 100000)\n${prefix}buyofficer oliyers\n~ Olivers(Harga 100000)\n${prefix}buyofficer olivers\n\n• *FUNGSI OFFICER?*\n~ Fitur AntiTag(On(Afk))\n~ Unlock Fitur ${prefix}mining\n\n• *APA PERBEDAAN OLIYERS & OLIVERS??*\n~ Uhmm.. Sama aja sih cuman yang olivers rasa stroberi`})
if ( checkATMuser(sender) <= 99999) return reply(`Harga office 100k dan uang kamu belum cukup:(, Ayo kumpulkan uang kamu terlebih dahulu, cek? ${prefix}uang`)
Object.keys(officer).forEach((i) => {
if (officer[i].id == sender) {
if ((args[0]) == "oliyers") {
if (officer[i].officer == "oliyers") return reply("Anda sudah membeli officer ini sebelumnya dan anda sekarang telah menggunakan officer ini")
officer[i].officer = "oliyers"
fs.writeFileSync('./database/bot/officer.json', JSON.stringify(officer))
const ofcrr = {id: sender, officer : "oliyers"}
officeruser.push(ofcrr)
fs.writeFileSync('./database/bot/user.json', JSON.stringify(officeruser))
confirmATM(sender, 99999)
sendButton("CEK-OFFICER","cekofficer","SUKSES MEMBELI OFFICER-(OLIYERS) SILAHKAN CEK","./media/image/infooliyers.jpg")}
if ((args[0]) == "olivers") {
if (officer[i].officer == "olivers") return reply("Anda sudah membeli officer ini sebelumnya dan anda sekarang telah menggunakan officer ini")
officer[i].officer = "olivers"
fs.writeFileSync('./database/bot/officer.json', JSON.stringify(officer))
const ofcr = {id: sender, officer : "olivers"}
officeruser.push(ofcr)
fs.writeFileSync('./database/bot/user.json', JSON.stringify(officeruser))
confirmATM(sender, 99999)
sendButton("CEK-OFFICER","cekofficer","SUKSES MEMBELI OFFICER-(OLIVERS) SILAHKAN CEK","./media/image/infoolivers.jpg")}}})
break 
case 'buyoliyers': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
reply(`Mungkin maksud kamu ${prefix}buyofficer oliyers ?`)
break
case 'buyolivers': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
reply(`Mungkin maksud kamu ${prefix}buyofficer olivers ?`)
break
case 'cekofficer':
case 'officer': 
case 'myofficer':
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
Object.keys(officer).forEach((i) => {
if (officer[i].id == sender) {
if (officer[i].officer == "NaN") return reply(`Anda belum memiliki officer, silahkan beli di ${prefix}buyofficer`)
nayla.sendMessage(from, {image:{url: `./media/image/${officer[i].officer}.jpg`}, caption: `[ *YOUR OFFICER* ]\n\n*NAME* : ${officer[i].officer}\n• *FUNGSI OFFICER?*\n~ Fitur AntiTag(On(Afk))\n~ Unlock Fitur ${prefix}mining\n\n• *APA PERBEDAAN OLIYERS & OLIVERS??*\n~ Uhmm.. Sama aja sih cuman yang olivers rasa stroberi`})
}})
break
case 'xcvbnmy': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
hadiah1 = ["waifu","mobil","piring","sendok","sandal","sepeda","helikopter","uang"][Math.floor(Math.random() * (["waifu","mobil","piring","sendok","sandal","sepeda","helikopter","uang"].length))]
let position = false
Object.keys(hadiah).forEach((i) => {
if (hadiah[i].id == sender) {
position = i
}})
if (position !== false) {
if (hadiah1 == "uang") {pluskoin(sender, 20000)}
if (hadiah1 == "waifu") {hadiah[position].waifu += 1
fs.writeFileSync('./database/user/hadiah.json', JSON.stringify(hadiah))}
if (hadiah1 == "helikopter") {hadiah[position].helikopter += 1
fs.writeFileSync('./database/user/hadiah.json', JSON.stringify(hadiah))}
if (hadiah1 == "sepeda") {hadiah[position].sepeda += 1
fs.writeFileSync('./database/user/hadiah.json', JSON.stringify(hadiah))}
if (hadiah1 == "sandal") {hadiah[position].sandal += 1
fs.writeFileSync('./database/user/hadiah.json', JSON.stringify(hadiah))}
if (hadiah1 == "sendok") {hadiah[position].sendok += 1
fs.writeFileSync('./database/user/hadiah.json', JSON.stringify(hadiah))}
if (hadiah1 == "piring") {hadiah[position].piring += 1
fs.writeFileSync('./database/user/hadiah.json', JSON.stringify(hadiah))}
if (hadiah1 == "mobil") {hadiah[position].mobil += 1
fs.writeFileSync('./database/user/hadiah.json', JSON.stringify(hadiah))}
}
sendButton("CEKHADIAH", "cekhadiah", "WOW ANDA MENDAPATKAN " + hadiah1 + " SILAHKAN CEK KOLEKSI HADIAH ANDA", `./media/image/${hadiah1}.jpg`)
break
case 'cekhadiah': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
Object.keys(hadiah).forEach((i) => {
if (hadiah[i].id === sender) {
nayla.sendMessage(from, {image:{url:"./media/image/bom.jpg"}, caption: "YOUR-HADIAH\n" + `• *WAIFU* : ${hadiah[i].waifu}\n~ *HARGA* : 50000\n\n• *HELIKOPTER* : ${hadiah[i].helikopter}\n~ *HARGA* : 45000\n\n• *MOBIL* : ${hadiah[i].mobil}\n~ *HARGA* : 40000\n\n• *SEPEDA* : ${hadiah[i].sepeda}\n~ *HARGA* : 35000\n\n• *SANDAL* : ${hadiah[i].sandal}\n~ *HARGA* : 30000\n\n• *PIRING* : ${hadiah[i].piring}\n~ *HARGA* : 25000\n\n• *SENDOK* : ${hadiah[i].sendok}\n~ *HARGA* : 15000\n\n*NOTE HADIAH BISA DIJUAL SEHARGA DIATAS, CARANYA GUNAKAN COMMAND\n*CMD* : ${prefix}jualhadiah nama-hadiah`})
}})
break
case 'jualhadiah': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
if (!q) return reply(`Mau jual hadiah apa??\n*CONTOH* : ${prefix + command} sepeda\nUntuk list hadiah kamu bisa cek di ${prefix}cekhadiah`)
let hadiah2 = false
Object.keys(hadiah).forEach((i) => {
if (hadiah[i].id === sender) {
hadiah2 = i
}})
if (hadiah2 !== false) {
if (q == "waifu") {
if (hadiah[hadiah2].waifu <= 0) return reply("HEHEHE EMANG PUNYA? COBA CEK DI " + `${prefix}cekhadiah`)
hadiah[hadiah2].waifu -= 1
fs.writeFileSync('./database/user/hadiah.json', JSON.stringify(hadiah))
pluskoin(sender, 50000)
reply("SUKSES MENJUAL, SILAHKAN CEK UANG ANDA😋")
}
if (q == "helikopter") {
if (hadiah[hadiah2].helikopter <= 0) return reply("HEHEHE EMANG PUNYA? COBA CEK DI " + `${prefix}cekhadiah`)
hadiah[hadiah2].helikopter -= 1
fs.writeFileSync('./database/user/hadiah.json', JSON.stringify(hadiah))
pluskoin(sender, 50000)
reply("SUKSES MENJUAL, SILAHKAN CEK UANG ANDA😋")
}
if (q == "mobil") {
if (hadiah[hadiah2].mobil <= 0) return reply("HEHEHE EMANG PUNYA? COBA CEK DI " + `${prefix}cekhadiah`)
hadiah[hadiah2].mobil -= 1
fs.writeFileSync('./database/user/hadiah.json', JSON.stringify(hadiah))
pluskoin(sender, 50000)
reply("SUKSES MENJUAL, SILAHKAN CEK UANG ANDA😋")
}
if (q == "sepeda") {
if (hadiah[hadiah2].sepeda <= 0) return reply("HEHEHE EMANG PUNYA? COBA CEK DI " + `${prefix}cekhadiah`)
hadiah[hadiah2].sepeda -= 1
fs.writeFileSync('./database/user/hadiah.json', JSON.stringify(hadiah))
pluskoin(sender, 50000)
reply("SUKSES MENJUAL, SILAHKAN CEK UANG ANDA😋")
}
if (q == "sandal") {
if (hadiah[hadiah2].sandal <= 0) return reply("HEHEHE EMANG PUNYA? COBA CEK DI " + `${prefix}cekhadiah`)
hadiah[hadiah2].sandal -= 1
fs.writeFileSync('./database/user/hadiah.json', JSON.stringify(hadiah))
pluskoin(sender, 50000)
reply("SUKSES MENJUAL, SILAHKAN CEK UANG ANDA😋")
}
if (q == "piring") {
if (hadiah[hadiah2].piring <= 0) return reply("HEHEHE EMANG PUNYA? COBA CEK DI " + `${prefix}cekhadiah`)
hadiah[hadiah2].piring -= 1
fs.writeFileSync('./database/user/hadiah.json', JSON.stringify(hadiah))
pluskoin(sender, 50000)
reply("SUKSES MENJUAL, SILAHKAN CEK UANG ANDA😋")
}
if (q == "sendok") {
if (hadiah[hadiah2].sendok <= 0) return reply("HEHEHE EMANG PUNYA? COBA CEK DI " + `${prefix}cekhadiah`)
hadiah[hadiah2].sendok -= 1
fs.writeFileSync('./database/user/hadiah.json', JSON.stringify(hadiah))
pluskoin(sender, 50000)
reply("SUKSES MENJUAL, SILAHKAN CEK UANG ANDA😋")
}}
break
case 'tebakbom': 
if(isGroup) return reply("ONLY PESAN PRIBADI")
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
if (isBoom) return reply("SELESAIKAN GAME SEBELUM NYA DULU BLOK")
if ( checkATMuser(sender) <= 1000) return reply(`Harga Game nya 1000, Tapi uang kamu tidak tercukupi`)
if (!q) return sendButton("SIAP", "tebakbom y", "HMM SAYA NGAK TAU NAMA GAME NYA APA. SEKILAS GAME INI MIRIP SEPERTI INI, NANTI KAMU AKAN DIBERI ANGKA 1-9, DIBALIK ANGKA NYA TERDAPAT BOOM, JIKA KAMU MENDAPATKAN BOM MAKA GAME OVER, JADI KAMU HARUS MEMILIH/MENEBAK BOOM PADA ANGKA/PILIHAN TERAKHIR","./media/image/gamenya.jpg")
if((args[0]) == "y") {
bomnyaa = ["1","2","3","4","5","6","7","8","9"][Math.floor(Math.random() * (["1","2","3","4","5","6","7","8","9"].length))]
const bomz = {id: sender, bom1 : false, bom2 : false, bom3 : false, bom4 : false, bom5 : false, bom6 : false, bom7 : false, bom8 : false, bom9 : false, bomnya : bomnyaa} 
boom.push(bomz)
fs.writeFileSync(`./database/user/boom.json`, JSON.stringify(boom))
reply(`❲ *HARD-GAME* ❳\n\n❲1⃣❳❲2⃣❳❲3⃣❳\n❲4⃣❳❲5⃣❳❲6⃣❳\n❲7⃣❳❲8⃣❳❲9⃣❳\n\n*PETUNJUK* : silahkan pilih angka diatas, CONTOH : 2\n*NOTE* : Harga game 1000`)
confirmATM(sender, 1000)
}
break 
case 'listpemenang': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
const isTamat1 = tamat.includes(tamat[0])
const isTamat2 = tamat.includes(tamat[1])
const isTamat3 = tamat.includes(tamat[2])
const isTamat4 = tamat.includes(tamat[3])
const isTamat5 = tamat.includes(tamat[4])
const isTamat6 = tamat.includes(tamat[5])
const isTamat7 = tamat.includes(tamat[6])
const isTamat8 = tamat.includes(tamat[7])
const isTamat9 = tamat.includes(tamat[8])
const isTamat10 = tamat.includes(tamat[9])
nama1 = "BELUM-ADA"
if(isTamat1) {nama1 = tamat[0]}
nama2 = "BELUM-ADA"
if(isTamat2) {nama2 = tamat[1]}
nama3 = "BELUM-ADA"
if(isTamat3) {nama3 = tamat[2]}
nama4 = "BELUM-ADA"
if(isTamat4) {nama4 = tamat[3]}
nama5 = "BELUM-ADA"
if(isTamat5) {nama5 = tamat[4]}
nama6 = "BELUM-ADA"
if(isTamat6) {nama6 = tamat[5]}
nama7 = "BELUM-ADA"
if(isTamat7) {nama7 = tamat[6]}
nama8 = "BELUM-ADA"
if(isTamat8) {nama8 = tamat[7]}
nama9 = "BELUM-ADA"
if(isTamat9) {nama9 = tamat[8]}
nama10 = "BELUM-ADA"
if(isTamat10) {nama10 = tamat[9]}
const sections = [
{title: "1",rows: [{title: nama1, rowId: "1", description: "hadiah Rp1.000.000"}]},    
{title: "2",rows: [{title: nama2, rowId: "2", description: "hadiah Rp1.000.000"}]},    
{title: "3",rows: [{title: nama3, rowId: "3", description: "hadiah Rp1.000.000"}]},    
{title: "4",rows: [{title: nama4, rowId: "4", description: "hadiah Rp1.000.000"}]},    
{title: "5",rows: [{title: nama5, rowId: "5", description: "hadiah Rp1.000.000"}]},    
{title: "6",rows: [{title: nama6, rowId: "6", description: "hadiah Rp1.000.000"}]},    
{title: "7",rows: [{title: nama7, rowId: "7", description: "hadiah Rp1.000.000"}]},    
{title: "8",rows: [{title: nama8, rowId: "8", description: "hadiah Rp1.000.000"}]},    
{title: "9",rows: [{title: nama9, rowId: "9", description: "hadiah Rp1.000.000"}]},    
{title: "10",rows: [{title: nama10, rowId: "10", description: "hadiah Rp1.000.000"}]},] 
const listMessage = {text: "games dungeon",footer: "Loading...",title: "LIST PEMENANG",buttonText: "OPEN",sections}
nayla.sendMessage(from, listMessage)
//reply(nama1 + nama2)
break
case 'cekhp':
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
var hpnya = "undefined"
Object.keys(hp).forEach((i) => {
if (hp[i].id === sender) { 
hpnya = hp[i].hp 
}}) 
if(hpnya === "undefined") {
const obj = {id: sender, hp : 100}
hp.push(obj)
fs.writeFileSync('./database/user/hp.json', JSON.stringify(hp))
reply("TRY AGAIN")}
reply("HP KAMU : " + hpnya + "\n\n*FUNSI HP* : Setiap bertarung di dungeon pastinya akan menguras hp, untuk memulihkan hp silahkan beli ramuan di " + `${prefix}buyramuan`)
break
case 'dungeon':
if(isTamat) return reply("ANDA TELAH MENAMATKAN GAME INI")
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
var karaktersaya = "NaN"
Object.keys(karakter).forEach((i) => {
if (karakter[i].id === sender) { 
karaktersaya = karakter[i].karakterr 
}}) // NOTE KLO MAU AMBIL FITUR MINIMAL ADD "RIMURUBOTZ" DI THX TO BOT KLAEN<
if (karaktersaya == "NaN") return reply("MAAF ANDA BELUM MEMILIKI KARAKTER, SILAHKAN BELI KARAKTER TERLEBIH DAHULU DI" + ` ${prefix}buykarakter`)
if (!q) return sendButton("NEXT!!!","dungeon 1","Haii apakah kamu siap untuk memasuki dungeon(penjara bawah tanah)??, Tujuan kalian adalah untuk mengalahkan raja iblis di lantai paling atas\nBerikut susunan fungsi/keahlian di setiap karakter\n\n*KARAKTER* : zombie\n*ATTACK* : lantai 1\n*TARGET* : hewan darat\n\n*KARAKTER* : alok\n*ATTACK* : lantai 2\n*TARGET* : hewan laut\n\n*KARAKTER* : mark\n*ATTACK* : lantai 3\n*TARGET* : titan\n\n*KARAKTER* : hacker\n*ATTACK* : lantai 4\n*TARGET* : monster\n\n*KARAKTER* : ilham\n*ATTACK* : lantai 5\n*TARGET* : raja monster\n\n*KARAKTER* : ijat\n*ATTACK* : lantai 6\n*TARGET* : raja iblis\n\n*NOTE* : setiap lantai memiliki joker🤡(Kucing hacker) Ketika anda bertemu kucing ini, otomatis hp kalian langsung terhackk🤯 dan berapapun nominal hp kalian akan otomatis berkurang menjadi 25%hp, kucing hacker ini sangat berbahaya bukan?", "./media/karakter/dungeon.jpg")
if (args[0] == "1") return sendButton("SIAP", "dungeonn", "Dungeon crawl adalah sebuah jenis skenario dalam permainan bermain peran fantasi dimana para karakter menjelajahi lingkungan labirin, bertarung dengan berbagai monster sesuai karakter, jadi kalian akan masuk ke dungeon menggunakan karakter anda, setiap karakter memiliki kemampuan di lantai masing masing,\n\n*CARA BERMAIN* : berjelajah menggunakan karakter zombie dan kamu akan mendapatkan uang, kumpulkan uang dan jika uang kalian sudah cukup untuk membeli karakter silahkan buy sekarang, karena semakin tinggi level karakter kalian, maka semakin tinggi juga uang yang di dapatkan\n• Setiap bertarung akan menguras hp 5-15, max hp kamu 100, dan jika hp kamu sudah hampir habis silahkan beli ramuan, di " + `${prefix}buyramuan` + " agar hp kalian pulih 100%, apakah anda siap??", "./media/karakter/dungeon.jpg")
break
case 'buyramuan':
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if(isGroup) return reply("ONLY PESAN PRIBADI")
const totalnya = 2500
if ( checkATMuser(sender) <= totalnya) return reply(`maaf uang kamu belum mencukupi. harga ramuan 2500, silahkan kumpulkan dan beli nanti`)
if ( checkATMuser(sender) >= totalnya ) {
confirmATM(sender, totalnya)
plushp(sender)
reply("SUKSES HP ANDA TELAH PULIH 100% KEMBALI")
}
break
case 'dungeonn':
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if(isGroup) return reply("ONLY PESAN PRIBADI")
if(isTamat) return reply("ANDA TELAH MENAMATKAN GAME INI")
musuh = ["musuh1","musuh2","musuh3","musuh4","musuh5","musuh6","musuh7","musuh8","musuh9","musuh10","kucinghacker"][Math.floor(Math.random() * (["musuh1","musuh2","musuh3","musuh4","musuh5","musuh6","musuh7","musuh8","musuh9","musuh10","kucinghacker"].length))]
musuhh = ["musuh1","musuh2","musuh3","musuh4","musuh5","musuh6","musuh7","musuh8","musuh9","musuh10"]
hpterkuras = [10,11,12,13,14,15,16][Math.floor(Math.random() * ([10,11,12,13,14,15,16].length))]
hadiahh = [457,458,481,491,562,572,581,619,728,721,723,532,932,927,981,871,870,824,1000][Math.floor(Math.random() * ([457,458,481,491,562,572,581,619,728,721,723,532,932,927,981,871,870,824,1000].length))]
hadiahh1 = [1457,2458,1481,2491,3562,2572,2581,3619,1728,3721,2723,1532,3932,3927,1981,3871,2870,1824,4000][Math.floor(Math.random() * ([1457,2458,1481,2491,3562,2572,2581,3619,1728,3721,2723,1532,3932,3927,1981,3871,2870,1824,4000].length))]
hadiahh2 = [5457,6458,7481,5491,6562,7572,4581,5619,6728,7721,5723,6532,7932,6927,5981,7871,5870,6824,8000][Math.floor(Math.random() * ([5457,6458,7481,5491,6562,7572,4581,5619,6728,7721,5723,6532,7932,6927,5981,7871,5870,6824,8000].length))]
hadiahh3 = [9457,8458,7481,9491,8562,7572,9581,8619,7728,9721,8723,7532,9932,8927,7981,9871,8870,7824,10000][Math.floor(Math.random() * ([9457,8458,7481,9491,8562,7572,9581,8619,7728,9721,8723,7532,9932,8927,7981,9871,8870,7824,10000].length))]
hadiahh4 = [11457,12458,13481,11491,12562,13572,14581,11619,12728,13721,14723,12532,11932,13927,14981,11871,12870,13824,16000][Math.floor(Math.random() * ([11457,12458,13481,11491,12562,13572,14581,11619,12728,13721,14723,12532,11932,13927,14981,11871,12870,13824,16000].length))]
var hpnya = "undefined"
Object.keys(hp).forEach((i) => {
if (hp[i].id === sender) { 
hpnya = hp[i].hp 
}}) 
aku = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
for (let akuu of aku)
if (hpnya == akuu) return reply(`MAAF HP KAMU TINGGAL ${hpnya} SILAHKAN BELI RAMUAN DI ${prefix}buyramuan SEHARGA 2500 UNTUK MEMULIHKAN HP`)
if(hpnya === "undefined") {
const obj = {id: sender, hp : 100}
hp.push(obj)
fs.writeFileSync('./database/user/hp.json', JSON.stringify(hp))
reply("TRY AGAIN")}
var karaktersayaa = "NaN"
Object.keys(karakter).forEach((i) => {
if (karakter[i].id === sender) { 
karaktersayaa = karakter[i].karakterr 
}})
if (!q) {
// NOTE KLO MAU AMBIL FITUR MINIMAL ADD "RIMURUBOTZ" DI THX TO BOT KLAEN
// KARAKTER
if (karaktersaya == "NaN") return reply("MAAF ANDA BELUM MEMILIKI KARAKTER, SILAHKAN BELI KARAKTER TERLEBIH DAHULU DI" + ` ${prefix}buykarakter`)
if (karaktersayaa == "zombie") return sendButton("MASUK", "dungeonn zombie1", "*KARAKTER ANDA* : ZOMBIE\nZombie ini dengan kekuatan pasif yang mengerikan, tapi memiliki pertahanan yang lemah, jadi hanya bisa memasuki dungeon lantai 1, apakah anda ingin masuk sekarang??\n*NOTE* : Semakin tinggi lantai yang anda masukin. maka semakin banyak juga hadiah yang di dapatkan", "./media/karakter/zombie.jpg")
if (karaktersayaa == "alok") return sendButton("MASUK", "dungeonn alok1", "*KARAKTER ANDA* : ALOK\nAlok ini Sangat pro dalam berenang, bahkan di epep sekalipun ia tidak terkalahkan, jadi alok ini akan berburu musuh di laut di lantai 2, apakah anda ingin masuk sekarang??\n*NOTE* : Semakin tinggi lantai yang anda masukin. maka semakin banyak juga hadiah yang di dapatkan", "./media/karakter/alok.jpg")
if (karaktersayaa == "mark") return sendButton("MASUK", "dungeonn mark1", "*KARAKTER ANDA* : MARK\nMark ini Bukan cuma bisa mengBanned akun media sosial, tpi juga bisa mengbanned otak Musuh, jadi Mark ini akan mengbanned titan di lantai 3, apakah anda ingin masuk sekarang??\n*NOTE* : Semakin tinggi lantai yang anda masukin. maka semakin banyak juga hadiah yang di dapatkan", "./media/karakter/mark.jpg")
if (karaktersayaa == "hacker") return sendButton("MASUK", "dungeonn hacker1", "*KARAKTER ANDA* : HACKER\nHacker ini Bukan cuma bisa mengHack media sosial, tpi juga bisa mengHack di dunia nyata, jadi Hacker ini akan mengHack pasukan monster di lantai 4, apakah anda ingin masuk sekarang??\n*NOTE* : Semakin tinggi lantai yang anda masukin. maka semakin banyak juga hadiah yang di dapatkan", "./media/karakter/hacker.jpg")
if (karaktersayaa == "ilham") return sendButton("MASUK", "dungeonn ilham1", "*KARAKTER ANDA* : ILHAM\nilham ini Bukan cuma mengandalkan ketampanan, tpi dia juga sangat gagah dan pemberani, jadi ilham ini akan membantai pasukan raja monster di lantai 5, apakah anda ingin masuk sekarang??\n*NOTE* : Semakin tinggi lantai yang anda masukin. maka semakin banyak juga hadiah yang di dapatkan", "./media/karakter/ilham.jpg")
if (karaktersayaa == "ijat") return sendButton("MASUK", "dungeonn ijat1", "*KARAKTER ANDA* : IJAT\nIjat ini adalah karakter yang paling kuat dari karakter lain nya, Anda akan menggunakan ijat ini untuk mengalahkan raja iblis!! ayoo masuk dan kalahkan sekarang!!", "./media/karakter/ijat.jpg")
}
// ZOMBIE
if (args[0] == "zombie1") { 
if(musuh == "kucinghacker") { 
sendButton("SERANG LAGI!!", "dungeonn zombie1", "Heyyy Heyy Anda sepertinya bertemu joker di pertandingan ini, kucing ini adalah hacker no 1 dunia, dan tidak akan terkalahkan, maaf perjalanan anda kali ini seperti nya mengecewakan,\n\n*NOTE* : Karena anda bertemu Kucinghacker(JOKER) hp anda terhack menjadi 25 dan uang anda hilang 1000", `./media/karakter/kucinghacker.jpg`)
resethp(sender)
confirmATM(sender, 1000)
} 
for (let musuhnya of musuhh)
if(musuh == musuhnya) { 
sendButton("SERANG LAGI!!", "dungeonn zombie1", "ANDA BERTEMU MUSUH INI, DAN ANDA BERHASIL MENGALAHKAN NYA MENGGUNAKAN ZOMBIE\n\n" + `*HADIAH* : ${hadiahh}\n*HP YANG TERKURAS* : ${hpterkuras}\n*HP SEKARANG* : ${hpnya}\n\n*NOTE* : jika hp kalian di bawah 20% otomatis anda akan di keluarkan di dungeon, maka jika hp kamu sudah di bawah 20 silahkan beli ramuan di ${prefix}buyramuan agar hp kamu pulih kembali`, `./media/karakter/zombie/${musuh}.jpg`)
pluskoin(sender, hadiahh)
nothp(sender, hpterkuras)
}}
// ALOK
if (args[0] == "alok1") { 
if(musuh == "kucinghacker") { 
sendButton("SERANG LAGI!!", "dungeonn alok1", "Heyyy Heyy Anda sepertinya bertemu joker di pertandingan ini, kucing ini adalah hacker no 1 dunia, dan tidak akan terkalahkan, maaf perjalanan anda kali ini seperti nya mengecewakan,\n\n*NOTE* : Karena anda bertemu Kucinghacker(JOKER) hp anda terhack menjadi 25 dan uang anda hilang 5000", `./media/karakter/kucinghacker.jpg`)
resethp(sender)
confirmATM(sender, 5000)
} 
for (let musuhnya of musuhh)
if(musuh == musuhnya) { 
sendButton("SERANG LAGI!!", "dungeonn alok1", "ANDA BERTEMU MUSUH INI, DAN ANDA BERHASIL MENGALAHKAN NYA MENGGUNAKAN ALOKKK!\n\n" + `*HADIAH* : ${hadiahh1}\n*HP YANG TERKURAS* : ${hpterkuras}\n*HP SEKARANG* : ${hpnya}\n\n*NOTE* : jika hp kalian di bawah 20% otomatis anda akan di keluarkan di dungeon, maka jika hp kamu sudah di bawah 20 silahkan beli ramuan di ${prefix}buyramuan agar hp kamu pulih kembali`, `./media/karakter/alok/${musuh}.jpg`)
pluskoin(sender, hadiahh1)
nothp(sender, hpterkuras)
}}
// MARK
if (args[0] == "mark1") { 
if(musuh == "kucinghacker") { 
sendButton("SERANG LAGI!!", "dungeonn mark1", "Heyyy Heyy Anda sepertinya bertemu joker di pertandingan ini, kucing ini adalah hacker no 1 dunia, dan tidak akan terkalahkan, maaf perjalanan anda kali ini seperti nya mengecewakan,\n\n*NOTE* : Karena anda bertemu Kucinghacker(JOKER) hp anda terhack menjadi 25 dan uang anda hilang 15000", `./media/karakter/kucinghacker.jpg`)
resethp(sender)
confirmATM(sender, 15000)
} 
for (let musuhnya of musuhh)
if(musuh == musuhnya) { 
sendButton("SERANG LAGI!!", "dungeonn mark1", "ANDA BERTEMU TITAN INI, DAN ANDA BERHASIL MENGBANNED OTAK NYA MENGGUNAKAN MARKK!\n\n" + `*HADIAH* : ${hadiahh2}\n*HP YANG TERKURAS* : ${hpterkuras}\n*HP SEKARANG* : ${hpnya}\n\n*NOTE* : jika hp kalian di bawah 20% otomatis anda akan di keluarkan di dungeon, maka jika hp kamu sudah di bawah 20 silahkan beli ramuan di ${prefix}buyramuan agar hp kamu pulih kembali`, `./media/karakter/mark/${musuh}.jpg`)
pluskoin(sender, hadiahh2)
nothp(sender, hpterkuras)
}}
// HACKER
if (args[0] == "hacker1") { 
if(musuh == "kucinghacker") { 
sendButton("SERANG LAGI!!", "dungeonn hacker1", "Heyyy Heyy Anda sepertinya bertemu joker di pertandingan ini, kucing ini adalah hacker no 1 dunia, dan tidak akan terkalahkan, maaf perjalanan anda kali ini seperti nya mengecewakan,\n\n*NOTE* : Karena anda bertemu Kucinghacker(JOKER) hp anda terhack menjadi 25 dan uang anda hilang 30000", `./media/karakter/kucinghacker.jpg`)
resethp(sender)
confirmATM(sender, 30000)
} 
for (let musuhnya of musuhh)
if(musuh == musuhnya) { 
sendButton("SERANG LAGI!!", "dungeonn hacker1", "ANDA BERTEMU MONSTER INI, DAN ANDA BERHASIL MENGHACK ORGAN TUBUH NYA MENGGUNAKAN HACKER!\n\n" + `*HADIAH* : ${hadiahh3}\n*HP YANG TERKURAS* : ${hpterkuras}\n*HP SEKARANG* : ${hpnya}\n\n*NOTE* : jika hp kalian di bawah 20% otomatis anda akan di keluarkan di dungeon, maka jika hp kamu sudah di bawah 20 silahkan beli ramuan di ${prefix}buyramuan agar hp kamu pulih kembali`, `./media/karakter/hacker/${musuh}.jpg`)
pluskoin(sender, hadiahh3)
nothp(sender, hpterkuras)
}}
if (args[0] == "ilham1") { 
if(musuh == "kucinghacker") { 
sendButton("SERANG LAGI!!", "dungeonn ilham1", "Heyyy Heyy Anda sepertinya bertemu joker di pertandingan ini, kucing ini adalah hacker no 1 dunia, dan tidak akan terkalahkan, maaf perjalanan anda kali ini seperti nya mengecewakan,\n\n*NOTE* : Karena anda bertemu Kucinghacker(JOKER) hp anda terhack menjadi 25 dan uang anda hilang 50000", `./media/karakter/kucinghacker.jpg`)
resethp(sender)
confirmATM(sender, 50000)
} 
for (let musuhnya of musuhh)
if(musuh == musuhnya) { 
sendButton("SERANG LAGI!!", "dungeonn ilham1", "ANDA BERTEMU RAJA MONSTER INI, DAN ANDA BERHASIL MENGALAHKAN NYA MENGGUNAKAN ILHAM!\n\n" + `*HADIAH* : ${hadiahh4}\n*HP YANG TERKURAS* : ${hpterkuras}\n*HP SEKARANG* : ${hpnya}\n\n*NOTE* : jika hp kalian di bawah 20% otomatis anda akan di keluarkan di dungeon, maka jika hp kamu sudah di bawah 20 silahkan beli ramuan di ${prefix}buyramuan agar hp kamu pulih kembali`, `./media/karakter/ilham/${musuh}.jpg`)
pluskoin(sender, hadiahh4)
nothp(sender, hpterkuras)
}}
if (args[0] == "ijat1") { 
sendButton("SERANG SEKARANG!!", "dungeonn ijat2", "Heyyy Heyy raja iblis sudah di depan mata, Ayo serang sekarang", "./media/karakter/ijat/raja1.jpg")
}
if (args[0] == "ijat2") { 
sendButton("SERANG!!","dungeonn ijat3","Tchh Raja iblis Sangat kuat, ayo serang lagi!!", "./media/karakter/ijat/raja2.jpg")
}
if (args[0] == "ijat3") { 
sendButton("SERANG!!","dungeonn ijat4","Hooh serangan mu tidak buruk, ayo serang lagi!!", "./media/karakter/ijat/raja3.jpg")
}
if (args[0] == "ijat4") { 
sendButton("SERANG!!","dungeonn ijat5","Raja iblis semakin melemah!!, ayo serang lagi!!", "./media/karakter/ijat/raja4.jpg")
}
if (args[0] == "ijat5") { 
sendButton("SERANG!!","dungeonn ijat6", "ayo serang teruss!!", "./media/karakter/ijat/raja5.jpg")
}
if (args[0] == "ijat6") { 
sendButton("SERANG!!","dungeonn ijat7", "sedikit lagi ayo serang lagi!!", "./media/karakter/ijat/raja6.jpg")
}
if (args[0] == "ijat7") { 
sendButton("SERANG!!","dungeonn ijat8", "SERANGAN TERAKHIR!!", "./media/karakter/ijat/raja7.jpg")
}
if (args[0] == "ijat8") { 
sendButton("CLAIM HADIAH!!","dungeonn ijat9", "HEY HEYY HEYYY NOT BAD!! ANDA TELAH BERHASIL MEMBUNUH MUSUH TERAKHIR(RAJA IBLIS) DAN BERHASIL MENAMATKAN GAME INI!!, SILAHKAN CLAIM HADIAH MU", "./media/karakter/ijat/raja8.jpg")
}
if (args[0] == "ijat9") { 
sendButton("BACK","Y", "ANDA TELAH MENAMATKAN GAME MENDAPATKAN HADIAH UANG SEBESAR 1.000.000(1JT) SILAHKAN CEK DOMPET ANDA, UNTUK LIST PEMENANG SILAHKAN CEK DI " + `${prefix}listpemenang`, "./media/karakter/ijat/menang.jpg")
pluskoin(sender, 1000000)
tamat.push(`${sender.split("@")[0]}@s.whatsapp.net`)
fs.writeFileSync('./database/user/tamat.json', JSON.stringify(tamat))
}
break
case 'buykarakter':
// NOTE KLO MAU AMBIL FITUR MINIMAL ADD "RIMURUBOTZ" DI THX TO BOT KLAEN
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if(!q) return nayla.sendMessage(from, {image:{url:"./media/karakter/karakter.jpg"}, caption:"[ *LIST KARAKTER* ]\n" + menukarakter + "\n*NOTE* : Jika membeli karakter, maka karakter sebelum nya yang anda beli akan terhapus"},{quoted:nay1})
if ((args[0]) === 'zombie') {
karakter2("zombie", "[ *KARAKTER STORE* ]\n*NAMA* : ZOMBIE\n*HARGA* : 9500" + `\n*NOTE* : Pasif/skill karakter akan diperlihatkan ketika anda membeli karakter tersebut\n*MESS* : Apakah kamu ingin membeli karakter ini? uang kamu sekarang ${checkATMuser(sender)}`)}
if ((args[0]) === 'zombie1') {
karakter1(9500, "zombie", "SUKSES MEMBELI, SILAHKAN CEK KARAKTER KAMU " + `${prefix}mykarakter`)}
if ((args[0]) === 'alok') {
karakter2("alok", "[ *KARAKTER STORE* ]\n*NAMA* : ALOK\n*HARGA* : 25000" + `\n*NOTE* : Pasif/skill karakter akan diperlihatkan ketika anda membeli karakter tersebut\n*MESS* : Apakah kamu ingin membeli karakter ini? uang kamu sekarang ${checkATMuser(sender)}`)}
if ((args[0]) === 'alok1') {
karakter1(25000, "alok", "SUKSES MEMBELI, SILAHKAN CEK KARAKTER KAMU " + `${prefix}mykarakter`)}
if ((args[0]) === 'mark') {
karakter2("mark", "[ *KARAKTER STORE* ]\n*NAMA* : MARK\n*HARGA* : 50000" + `\n*NOTE* : Pasif/skill karakter akan diperlihatkan ketika anda membeli karakter tersebut\n*MESS* : Apakah kamu ingin membeli karakter ini? uang kamu sekarang ${checkATMuser(sender)}`)}
if ((args[0]) === 'mark1') {
karakter1(50000, "mark", "SUKSES MEMBELI, SILAHKAN CEK KARAKTER KAMU " + `${prefix}mykarakter`)}
if ((args[0]) === 'hacker') {
karakter2("hacker", "[ *KARAKTER STORE* ]\n*NAMA* : HACKER\n*HARGA* : 75000" + `\n*NOTE* : Pasif/skill karakter akan diperlihatkan ketika anda membeli karakter tersebut\n*MESS* : Apakah kamu ingin membeli karakter ini? uang kamu sekarang ${checkATMuser(sender)}`)}
if ((args[0]) === 'hacker1') {
karakter1(75000, "hacker", "SUKSES MEMBELI, SILAHKAN CEK KARAKTER KAMU " + `${prefix}mykarakter`)}
if ((args[0]) === 'ilham') {
karakter2("ilham", "[ *KARAKTER STORE* ]\n*NAMA* : ILHAM\n*HARGA* : 100000" + `\n*NOTE* : Pasif/skill karakter akan diperlihatkan ketika anda membeli karakter tersebut\n*MESS* : Apakah kamu ingin membeli karakter ini? uang kamu sekarang ${checkATMuser(sender)}`)}
if ((args[0]) === 'ilham1') {
karakter1(100000, "ilham", "SUKSES MEMBELI, SILAHKAN CEK KARAKTER KAMU " + `${prefix}mykarakter`)}
if ((args[0]) === 'ijat') {
karakter2("ijat", "[ *KARAKTER STORE* ]\n*NAMA* : IJAT\n*HARGA* : 150000" + `\n*NOTE* : Pasif/skill karakter akan diperlihatkan ketika anda membeli karakter tersebut\n*MESS* : Apakah kamu ingin membeli karakter ini? uang kamu sekarang ${checkATMuser(sender)}`)}
if ((args[0]) === 'ijat1') {
karakter1(150000, "ijat", "SUKSES MEMBELI, SILAHKAN CEK KARAKTER KAMU " + `${prefix}mykarakter`)}
break
case 'mykarakter':
// NOTE KLO MAU AMBIL FITUR MINIMAL ADD "RIMURUBOTZ" DI THX TO BOT KLAEN
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
for (let krk of karakter) {
if (krk.id === sender) {
if (krk.karakterr == "zombie") {captionnyaa = karakterskill.zombie()}
if (krk.karakterr == "alok") {captionnyaa = karakterskill.alok()}
if (krk.karakterr == "mark") {captionnyaa = karakterskill.mark()}
if (krk.karakterr == "hacker") {captionnyaa = karakterskill.hacker()}
if (krk.karakterr == "ilham") {captionnyaa = karakterskill.ilham()}
if (krk.karakterr == "ijat") {captionnyaa = karakterskill.ijat()}
if (krk.karakterr == "NaN") {captionnyaa = "ANDA BELUM MEMILIKI KARAKTER, SILAHKAN BELI KARAKTER DI " + `${prefix}buykarakter`}
nayla.sendMessage(from, {image:{url:"./media/karakter/" + krk.karakterr + ".jpg"}, caption:captionnyaa},{quoted:nay1})
}} 
break
case 'dompet': case 'uang': case 'atm': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
const kantong = checkATMuser(sender)
const dua2 = [
{buttonId: `${prefix}funsiuang`, buttonText: {displayText: 'FUNGSI UANG'}, type: 1}]
const satu2 = {
text: "UANG KAMU : " + kantong, buttons: dua2,headerType: 1}
nayla.sendMessage(from, satu2, {quoted:nay1})
break
case 'funsiuang':
reply("Fungsi uang untuk membeli karakter, officer, dan bermain game, dll")
break
 case 'cleardatabase': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if(!isOwner) return reply("ONLY OWNER")
if (!q) { const dua1 = [
{buttonId: `${prefix + cmd} yes`, buttonText: {displayText: 'YES'}, type: 1},
{buttonId: `${prefix + cmd} not`, buttonText: {displayText: 'NOT'}, type: 1}]
const satu1 = {
text: "Apakah anda yakin menghapus database??? ini akan menghapus keseluruhan(Semua) daftar, karakter, HP, uang, listpemenang, hadiah, boom, dll",footer: 'Loading... y/n?',buttons: dua1,headerType: 1}
nayla.sendMessage(from, satu1, {quoted:nay1})}
if ((args[0]) === 'yes') {
// UANG
uang.splice(uang)
fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
// BOOM
boom.splice(boom)
fs.writeFileSync('./database/user/boom.json', JSON.stringify(boom))
// HADIAH
hadiah.splice(hadiah)
fs.writeFileSync('./database/user/hadiah.json', JSON.stringify(hadiah))
// DAFTAR
_registered.splice(_registered)
fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
// KARAKTER
karakter.splice(karakter)
fs.writeFileSync('./database/user/karakter.json', JSON.stringify(karakter))
// HP
hp.splice(hp)
fs.writeFileSync('./database/user/hp.json', JSON.stringify(hp))
// PEMENEANG
tamat.splice(tamat)
fs.writeFileSync('./database/user/tamat.json', JSON.stringify(tamat))
//OFFICER
officer.splice(officer)
fs.writeFileSync('./database/bot/officer.json', JSON.stringify(officer))
//OFFICERUSER
officeruser.splice(officeruser)
fs.writeFileSync('./database/bot/user.json', JSON.stringify(officeruser))
//WAIFU
waifu.splice(waifu)
fs.writeFileSync('./database/bot/waifu.json', JSON.stringify(waifu))

waifu.splice(waifu)
fs.writeFileSync('./database/user/waifu.json', JSON.stringify(waifu))
reply("SUKSES MENGHAPUS SEMUA DATABASE")}
if ((args[0]) === 'not') {reply("BAIKLAH")}
break
case 'daftar':
if (isRegistered) return  reply("HEHEHE KAMU UDAH DAFTAR SEBELUMNYA")                 
if (!q) return sendButton("DAFTAR", "daftar yes", "INGIN TERDAFTAR DI DATABASE BOT? SILAHKAN TEKAN TOMBOL DAFTAR","./media/image/daftar1.jpg")
if ((args[0]) === "yes") {
_registered.push(`${sender.split("@")[0]}@s.whatsapp.net`)
fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
sendButton(pushname, "0", `[ *SUKSES TERDAFTAR* ]\n*NAMA* : ${pushname}\n*TIME* : ${time}\n*STATUS* : true\n\n[ *DIDAPATKAN* ]\n*HP* : 100\n*KARAKTER* : NOT\n*OFFICER* : NOT\n*UANG* : 10000`, "./media/image/daftar2.jpg")
karakterAdd(sender)
addATM(sender)
addOfficer(sender)
addHadiah(sender)
addWaifu(sender)
addhp(sender)}
if ((args[0]) === "not") {reply("OKELAH")}
break
case 'cekdaftar':
reply(dftar)
break
case 'tebakgambar': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesaikan game sebelum nya terlebih dahulu")
nyz115 = await fetchJson(`https://myselfff.herokuapp.com/docs/games/${command}`)
nyz116 = nyz115.list.soal
jawaban = nyz115.list.jawaban
nyz117 = await getBuffer(nyz116)
console.log(jawaban)
nayla.sendMessage(from, {image:nyz117, caption: "Tebak yaa, *NOTE* : Jawaban yang benar akan saya reply"}, { quoted: nay}).then(() => {
tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync("./game/tebakgambar.json", JSON.stringify(tebakgambar))
})
await sleep(30000)
if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
reply(`Waktu habis, jawaban : ` + jawaban)
delete tebakgambar[sender.split('@')[0]]
fs.writeFileSync("./game/tebakgambar.json", JSON.stringify(tebakgambar))
}
break 
case 'caklontong': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply("selesaikan game sebelum nya terlebih dahulu")
nyz115 = await fetchJson(`https://myselfff.herokuapp.com/docs/games/${command}`)
nyz116 = nyz115.list.soal
jawaban = nyz115.list.jawaban
console.log(`jawaban : ` + jawaban)
nayla.sendMessage(from,{text: "🍭GAMES🍡\n" + `=> *SOAL* ${nyz116}\n ` + "*NOTE* : Jawaban yang benar akan saya reply"},{quoted:nay}).then(() => {
caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync(`./game/caklontong.json`, JSON.stringify(caklontong))
})
await sleep(30000)
if (caklontong.hasOwnProperty(sender.split('@')[0])) {
reply(`waktu habis, jawaban : ` + jawaban)
delete caklontong[sender.split('@')[0]]
fs.writeFileSync(`./game/caklontong.json`, JSON.stringify(caklontong))
}
break           
case 'tebaklirik': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
if (tebaklirik.hasOwnProperty(sender.split('@')[0])) return reply("selesaikan game sebelum nya terlebih dahulu")
nyz115 = await fetchJson(`https://myselfff.herokuapp.com/docs/games/${command}`)
nyz116 = nyz115.list.soal
jawaban = nyz115.list.jawaban
console.log(`jawaban : ` + jawaban)
nayla.sendMessage(from,{text: "🍭GAMES🍡\n" + `=> *SOAL* ${nyz116}\n ` + "*NOTE* : Jawaban yang benar akan saya reply"},{quoted:nay}).then(() => {
tebaklirik[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync(`./game/tebaklirik.json`, JSON.stringify(tebaklirik))
})
await sleep(30000)
if (tebaklirik.hasOwnProperty(sender.split('@')[0])) {
reply(`waktu habis, jawaban : ` + jawaban)
delete tebaklirik[sender.split('@')[0]]
fs.writeFileSync(`./game/tebaklirik.json`, JSON.stringify(tebaklirik))
}
break
case 'tebakkimia': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
if (tebakkimia.hasOwnProperty(sender.split('@')[0])) return reply("selesaikan game sebelum nya terlebih dahulu")
nyz115 = await fetchJson(`https://myselfff.herokuapp.com/docs/games/${command}`)
nyz116 = nyz115.list.soal
jawaban = nyz115.list.jawaban
console.log(`jawaban : ` + jawaban)
nayla.sendMessage(from,{text: "🍭GAMES🍡\n" + `=> *SOAL* ${nyz116}\n ` + "*NOTE* : Jawaban yang benar akan saya reply"},{quoted:nay}).then(() => {
tebakkimia[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync(`./game/tebakkimia.json`, JSON.stringify(tebakkimia))
})
await sleep(30000)
if (tebakkimia.hasOwnProperty(sender.split('@')[0])) {
reply(`waktu habis, jawaban : ` + jawaban)
delete tebakkimia[sender.split('@')[0]]
fs.writeFileSync(`./game/tebakkimia.json`, JSON.stringify(tebakkimia))
}
break
case 'tebakjenaka': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) return reply("selesaikan game sebelum nya terlebih dahulu")
nyz115 = await fetchJson(`https://myselfff.herokuapp.com/docs/games/${command}`)
nyz116 = nyz115.list.soal
jawaban = nyz115.list.jawaban
console.log(`jawaban : ` + jawaban)
nayla.sendMessage(from,{text: "🍭GAMES🍡\n" + `=> *SOAL* ${nyz116}\n ` + "*NOTE* : Jawaban yang benar akan saya reply"},{quoted:nay}).then(() => {
tebakjenaka[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync(`./game/tebakjenaka.json`, JSON.stringify(tebakjenaka))
})
await sleep(30000)
if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) {
reply(`waktu habis, jawaban : ` + jawaban)
delete tebakjenaka[sender.split('@')[0]]
fs.writeFileSync(`./game/tebakjenaka.json`, JSON.stringify(tebakjenaka))
}
break
case 'tebakbendera': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
if (tebakbendera.hasOwnProperty(sender.split('@')[0])) return reply("selesaikan game sebelum nya terlebih dahulu")
nyz115 = await fetchJson(`https://myselfff.herokuapp.com/docs/games/${command}`)
nyz116 = nyz115.list.soal
jawaban = nyz115.list.jawaban
console.log(`jawaban : ` + jawaban)
nayla.sendMessage(from,{text: "🍭GAMES🍡\n" + `=> *SOAL* ${nyz116}\n ` + "*NOTE* : Jawaban yang benar akan saya reply"},{quoted:nay}).then(() => {
tebakbendera[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync(`./game/tebakbendera.json`, JSON.stringify(tebakbendera))
})
await sleep(30000)
if (tebakbendera.hasOwnProperty(sender.split('@')[0])) {
reply(`waktu habis, jawaban : ` + jawaban)
delete tebakbendera[sender.split('@')[0]]
fs.writeFileSync(`./game/tebakbendera.json`, JSON.stringify(tebakbendera))
}
break
case 'setbahasa': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!isOwner) return reply(respon.ownerbot(pushname));
if (!q) return nayla.sendMessage(from, { text : `listbahasa?\n${prefix}setbahasa id\n${prefix}setbahasa en`}, {quoted:nay1})
if ((args[0]) === 'id') {sukses("SUKSES")
bahasa = "id"
} else if ((args[0]) === 'en') {sukses("SUKSES")
bahasa = "en"
} else {
nayla.sendMessage(from, { text : `listbahasa?\n${prefix}setbahasa id\n${prefix}setbahasa en`}, {quoted:nay1})
}
case 'setprefix': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!isOwner) return reply(respon.ownerbot(pushname));
sukses("SUKSES")
prefix = args[0]
break
case 'promote': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!isGroup) return reply(respon.onlyGroup(pushname));
if (!isGroupAdmins) return reply(respon.onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(respon.botAdmin(pushname));
if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang yang ingin dipromosikan menjadi admin group');
const men = nay.message.extendedTextMessage.contextInfo.mentionedJid;
nayla.groupParticipantsUpdate(from, men,"promote");
break
case 'demote': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!isGroup) return reply(respon.onlyGroup(pushname));
if (!isGroupAdmins) return reply(respon.onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(respon.botAdmin(pushname));
if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang yang ingin di demote di group ini');
const mention = nay.message.extendedTextMessage.contextInfo.mentionedJid;
await nayla.groupParticipantsUpdate(from, mention,"demote");
break
case 'add': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
try {
if (!isGroup) return reply(respon.onlyGroup(pushname));
if (!isGroupAdmins) return reply(respon.onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(respon.botAdmin(pushname));
if (!q) return reply("Masukan nomor yang ingin ditambahkan di group\nex: !add 62881xxxxxxx")
nomor = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
await nayla.groupParticipantsUpdate(from, [nomor],"add")
} catch (e) {
reply('Maaf error')
}
break
case 'kick': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
try {
if (!isGroup) return reply(respon.onlyGroup(pushname));
if (!isGroupAdmins) return reply(respon.onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(respon.botAdmin(pushname));
if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang yang ingin dikeluarkan dari group ini')
const mention = nay.message.extendedTextMessage.contextInfo.mentionedJid
await nayla.groupParticipantsUpdate(from, mention,"remove")
} catch (e) {
reply('Maaf error')
}
break
case 'resetlink':
case 'revoke': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!isGroup) return reply(respon.onlyGroup(pushname));
if (!isGroupAdmins) return reply(respon.onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(respon.botAdmin(pushname));
await nayla.groupRevokeInvite(from)
break
case 'linkgroup': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!isGroup) return reply(respon.onlyGroup(pushname));
if (!isGroupAdmins) return reply(respon.onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(respon.botAdmin(pushname));
const code = await nayla.groupInviteCode(from)
reply("https://chat.whatsapp.com/" + code)
break
case 'setdesc': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!isGroup) return reply(respon.onlyGroup(pushname));
if (!isGroupAdmins) return reply(respon.onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(respon.botAdmin(pushname));
if (!q) return reply(respon.notText(prefix,cmd, pushname));
nayla.groupUpdateDescription(from, q)
break
case 'setname': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!isGroup) return reply(respon.onlyGroup(pushname));
if (!isGroupAdmins) return reply(respon.onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(respon.botAdmin(pushname));
if (!q) return reply(respon.notText(prefix,cmd, pushname));
nayla.groupUpdateSubject(from, q);
break
case 'owner': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
const vcard = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n' 
+ `FN:${namaowner}\n`
+ 'ORG:Ini saya;\n'
+ `TEL;type=CELL;type=VOICE;waid=${nomerowner}:+${nomerowner}\n`
+ 'END:VCARD';
nayla.sendMessage(from, { contacts: { contacts: [{ vcard }] }});
break
case 'donasi':
case 'donate': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
const donasii =`${donasi}\n• PULSA ${pulsa}\n• DANA ${dana}\n• GOPAY ${gopay}`
reply(donasii)
break
case 'allhelp':
case 'allmenu': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
const menu = `▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║│•°”˜˜”°•.¸☆ ★ ☆¸.•°”˜˜”°•.¸☆
┃│╔══╗╔═╗╔══╗╔══╗★ ★
║│║╔╗║║║║╚╗╔╝╠══║☆¸.•°*
┃│║╔╗║║║║─║║─║══╣★
║│╚══╝╚═╝─╚╝─╚══╝♡￥☆
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║│~ Heyy ${pushname} <3 
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║│${infoq}
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *MENU SIMPLE* ]
┃│✄ *${prefix}donasi*
║│✄ *${prefix}owner*
┃│✄ *${prefix}mygrub*
║│✄ *${prefix}listprem*
┃│✄ *${prefix}getprem*
║│✄ *${prefix}iklan3*
┃│✄ *${prefix}iklan2*
║│✄ *${prefix}iklan1*
┃│✄ *${prefix}scbot*
║│✄ *${prefix}chatowner*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *OWNER MENU* ]
┃│✄ *${prefix}setprefix*
║│✄ *${prefix}cleardatabase*
┃│✄ *${prefix}setbahasa*
║│✄ *${prefix}speed*
┃│✄ *${prefix}addprem*
║│✄ *${prefix}dellprem*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *GROUP MENU* ]
┃│✄ *${prefix}add*
║│✄ *${prefix}kick*
┃│✄ *${prefix}promote*
║│✄ *${prefix}demote*
┃│✄ *${prefix}resetlink*
║│✄ *${prefix}linkgroup*
┃│✄ *${prefix}setname*
║│✄ *${prefix}setdesc*
┃│✄ *${prefix}antilink*
║│✄ *${prefix}antitag*
┃│✄ *${prefix}antivirtex*
║│✄ *${prefix}hidetag*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *AUDIO MENU* ]
┃│✄ *${prefix}audio1*
║│✄ *${prefix}audio2*
┃│✄ *${prefix}audio3*
║│✄ *${prefix}audio4*
┃│✄ *${prefix}audio5*
║│✄ *${prefix}audio6*
┃│✄ *${prefix}audio7*
║│✄ *${prefix}audio8*
┃│✄ *${prefix}audio9*
║│✄ *${prefix}audio10*
┃│✄ *${prefix}audio11*
║│✄ *${prefix}audio12*
┃│✄ *${prefix}audio13*
║│✄ *${prefix}audio14*
┃│✄ *${prefix}audio15*
║│✄ *${prefix}audio16*
┃│✄ *${prefix}audio17*
║│✄ *${prefix}audio18*
┃│✄ *${prefix}audio19*
║│✄ *${prefix}audio20*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *WALLPAPER* ]
┃│✄ *${prefix}wallml*
┃│✄ *${prefix}wallpubg*
║│✄ *${prefix}wallcode*
┃│✄ *${prefix}wallrandom*
║│✄ *${prefix}wallneon*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *STICK-MENU* ]
┃│✄ *${prefix}tampar*
║│✄ *${prefix}tendang*
┃│✄ *${prefix}jijik*
║│✄ *${prefix}ketawa*
┃│✄ *${prefix}diam*
║│✄ *${prefix}kaget*
┃│✄ *${prefix}nangis*
║│✄ *${prefix}peluk*
┃│✄ *${prefix}pukul*
║│✄ *${prefix}marah*
┃│✄ *${prefix}takut*
║│✄ *${prefix}sedih*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
┃│[ *TAG-MENU* ]
┃│✄ *${prefix}pakgirl*
║│✄ *${prefix}nolep*
┃│✄ *${prefix}pakboy*
║│✄ *${prefix}jago*
┃│✄ *${prefix}halal*
║│✄ *${prefix}pintar*
┃│✄ *${prefix}bego*
║│✄ *${prefix}haram*
┃│✄ *${prefix}sadgirl*
║│✄ *${prefix}sadboy*
┃│✄ *${prefix}jelek*
║│✄ *${prefix}jahat*
┃│✄ *${prefix}hebat*
║│✄ *${prefix}baik*
┃│✄ *${prefix}cantik*
║│✄ *${prefix}wibu*
┃│✄ *${prefix}beban*
║│✄ *${prefix}ganteng*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *CEK-MENU* ]
┃│✄ *${prefix}pakgirlcek*
║│✄ *${prefix}nolepcek*
┃│✄ *${prefix}pakboycek*
║│✄ *${prefix}jagocek*
┃│✄ *${prefix}halalcek*
║│✄ *${prefix}pintarcek*
┃│✄ *${prefix}begocek*
║│✄ *${prefix}haramcek*
┃│✄ *${prefix}sadgirlcek*
║│✄ *${prefix}sadboycek*
┃│✄ *${prefix}jelekcek*
║│✄ *${prefix}jahatcek*
┃│✄ *${prefix}hebatcek*
║│✄ *${prefix}baikcek*
┃│✄ *${prefix}cantikcek*
║│✄ *${prefix}wibucek*
┃│✄ *${prefix}bebancek*
║│✄ *${prefix}gantengcek*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *TEXTPRO-MENU* ]
┃│✄ *${prefix}berry*
║│✄ *${prefix}transformer*
┃│✄ *${prefix}metal*
║│✄ *${prefix}peridot*
┃│✄ *${prefix}halloween*
║│✄ *${prefix}thunder*
┃│✄ *${prefix}toxic*
║│✄ *${prefix}sketch*
┃│✄ *${prefix}magma*
║│✄ *${prefix}purple*
┃│✄ *${prefix}circuit*
║│✄ *${prefix}cracked*
┃│✄ *${prefix}juice*
║│✄ *${prefix}blue*
┃│✄ *${prefix}metallic*
║│✄ *${prefix}impressive*
┃│✄ *${prefix}scfi*
║│✄ *${prefix}horror*
┃│✄ *${prefix}realistic*
║│✄ *${prefix}rainbow*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *HACK-MENU* ]
┃│✄ *${prefix}hackmatahari*
┃│✄ *${prefix}hackbulan*
║│✄ *${prefix}hackbapak*
┃│✄ *${prefix}hacksatelit*
║│✄ *${prefix}hacklautan*
┃│✄ *${prefix}hackfreefire*
║│✄ *${prefix}hackbts*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *RANDOM-MENU* ]
┃│✄ *${prefix}artinama*
┃│✄ *${prefix}artimimpi*
║│✄ *${prefix}resepmasakan*
┃│✄ *${prefix}katajago*
║│✄ *${prefix}besarkecil*
┃│✄ *${prefix}jumlahhuruf*
║│✄ *${prefix}jumlahangka*
┃│✄ *${prefix}infogempa* 
║│✄ *${prefix}balikangka*
┃│✄ *${prefix}wikipedia*
║│✄ *${prefix}balikhuruf*
┃│✄ *${prefix}bilangangka*
║│✄ *${prefix}holoh*
┃│✄ *${prefix}heleh*
║│✄ *${prefix}huluh*
┃│✄ *${prefix}hilih*
║│✄ *${prefix}halah*
┃│✄ *${prefix}kapital* 
║│✄ *${prefix}attp*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *SEARCH-MENU* ]
┃│✄ *${prefix}sfile*
┃│✄ *${prefix}rexdl*
║│✄ *${prefix}ytsearch*
┃│✄ *${prefix}cersex*
║│✄ *${prefix}thelazy*
┃│✄ *${prefix}shopee*
║│✄ *${prefix}amazon*
┃│✄ *${prefix}arena*
║│✄ *${prefix}grubwa*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *NEWS-MENU* ]
┃│✄ *${prefix}antara*
║│✄ *${prefix}okezone*
┃│✄ *${prefix}kompas*
║│✄ *${prefix}berita*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *INFO-MENU* ]
┃│✄ *${prefix}coronameninggal*
┃│✄ *${prefix}infohoax*
║│✄ *${prefix}jadwalbola*
┃│✄ *${prefix}jamdunia*
║│✄ *${prefix}jam*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *ISLAMI-MENU* ]
┃│✄ *${prefix}kisahnabi*
║│✄ *${prefix}asmaulhusna*
┃│✄ *${prefix}quran*
║│✄ *${prefix}hadist*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *NSFW-MENU* ]
┃│✄ *${prefix}yuri*
║│✄ *${prefix}thighs*
┃│✄ *${prefix}pussy*
║│✄ *${prefix}panties*
┃│✄ *${prefix}orgy*
║│✄ *${prefix}ass*
┃│✄ *${prefix}ahegao*
║│✄ *${prefix}bdsm*
┃│✄ *${prefix}blowjob*
║│✄ *${prefix}cuckold*
┃│✄ *${prefix}ero*
║│✄ *${prefix}cum*
┃│✄ *${prefix}femdom*
║│✄ *${prefix}foot*
┃│✄ *${prefix}gangbang*
║│✄ *${prefix}glasses*
┃│✄ *${prefix}jahy*
║│✄ *${prefix}masturbation*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *GAME-MENU* ]
┃│✄ *${prefix}tebakgambar*
║│✄ *${prefix}tebaklirik*
┃│✄ *${prefix}tebakkimia*
║│✄ *${prefix}tebakjenaka*
┃│✄ *${prefix}tebakbendera*
║│✄ *${prefix}caklontong*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *EMOTE-MENU* ]
┃│✄ *${prefix}emojilg*
║│✄ *${prefix}emojipedia*
┃│✄ *${prefix}emojimoji*
║│✄ *${prefix}emojijoy*
┃│✄ *${prefix}emojiskype*
║│✄ *${prefix}emojifecabook*
┃│✄ *${prefix}emojitwitter*
║│✄ *${prefix}emojiwhatsapp*
┃│✄ *${prefix}emojimicrosoft*
║│✄ *${prefix}emojisamsung*
┃│✄ *${prefix}emojigoogle*
║│✄ *${prefix}emojiapple*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *TRENDING* ]
┃│✄ *${prefix}trenbekasi*
┃│✄ *${prefix}trendepok*
║│✄ *${prefix}trenpekanbaru*
┃│✄ *${prefix}trensurabaya*
║│✄ *${prefix}trenmakassar*
┃│✄ *${prefix}trenbandung*
║│✄ *${prefix}trenjakarta*
┃│✄ *${prefix}trenmedan*
║│✄ *${prefix}trenpalembang*
┃│✄ *${prefix}trensemarang*
║│✄ *${prefix}trentangerang*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *KERANG AJAIB* ]
┃│✄ *${prefix}berapa*
┃│✄ *${prefix}siapa*
║│✄ *${prefix}kapan*
┃│✄ *${prefix}dimana*
║│✄ *${prefix}apakah*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *QUOTESS NEW* ]
┃│✄ *${prefix}quotesanime*
┃│✄ *${prefix}quotesbucin*
║│✄ *${prefix}quoteskehidupan*
┃│✄ *${prefix}quotesgalau*
║│✄ *${prefix}quotesrandom*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *DOWNLOAD* ]
┃│✄ *${prefix}ytmp4*
║│✄ *${prefix}ytmp3*
┃│✄ *${prefix}ytaudio*
║│✄ *${prefix}ytvideo*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *SEPAKBOLA* ]
┃│✄ *${prefix}rodri*
║│✄ *${prefix}vinicius*
┃│✄ *${prefix}robert*
║│✄ *${prefix}erling*
┃│✄ *${prefix}oliver*
║│✄ *${prefix}ricardo*
┃│✄ *${prefix}mbappe*
║│✄ *${prefix}rashford*
┃│✄ *${prefix}messi*
║│✄ *${prefix}ronaldo*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *ATM MENU* ]
┃│✄ *${prefix}dompet*
┃│✄ *${prefix}daftar*
║│✄ *${prefix}cekdaftar*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *GAME(1)-MENU* ]
┃│✄ *${prefix}mykarakter*
║│✄ *${prefix}buykarakter*
┃│✄ *${prefix}buyramuan*
║│✄ *${prefix}dungeon*
┃│✄ *${prefix}cekhp*
║│✄ *${prefix}listpemenang*
┃╞═[ *GAME(2)-MENU* ]
║│✄ *${prefix}tebakbom*
┃│✄ *${prefix}cekhadiah*
║│✄ *${prefix}jualhadiah*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *OFFICER* ]
┃│✄ *${prefix}buyofficer*
║│✄ *${prefix}myofficer*
┃│✄ *${prefix}mining*
║╞═[ *WAIFU* ]
┃│✄ *${prefix}buywaifu*
║│✄ *${prefix}cekwaifu*
┃│✄ *${prefix}doujinwaifu*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
┃│✄ *TERAPKAN* [ 5M ]
║│✄ Memakai masker
┃│✄ Mencuci tangan
║│✄ Menjaga jarak
┃│✄ Menjauhi kerumunan
║│✄ Membatasi mobilitas
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
╔━══━══━══━══━══━══━
┃╭──────────────────
║╞═[ *THX TO* ]
┃│✄ *RIMURUBOTZ*
║│✄ *LORD RYNZ*
┃│✄ *ADIWAJSHING*
║│✄ *MEGAWATI*
┃╰──────────────────
╚━══━══━══━══━══━══━
▬▭▬▭▬▭▬▭▬▭▬▭▬▭`
await sendMenu(from, menu, "Lightweight full-featured WhatsApp Web + Multi-Device API", await nayla.sendnew(from, {video: {url: "./media/video/menu.mp4", caption: menu}, gifPlayback: true}))
break
case 'menu': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
menuu = `Halo *${pushname}*\nBOT(BUILD-OPERATE-TRANSFER) adalah program komputer yang dijalankan di Whatsapp yang khusus dibuat untuk melakukan pekerjaan-pekerjaan otomatis, BOT Whatsapp dirancang sedemikian rupa sehingga dapat digunakan dengan nyaman, dan kemungkinan memiliki sedikit bug, Adanya fitur dari bot WhatsApp ini tentu akan membantu anda untuk bersenang senang, dll`
await sendMenuu(from, menuu, `full-featured WhatsApp Web + Multi-Device API`, await nayla.sendnew(from, {video: {url: "./media/video/menuu.mp4", caption: menuu}, gifPlayback: true}))
break
case 'desk': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
reply(`▬▭▬▭▬▭▬▭▬▭▬▭▬▭
✄ *PERATURAN*
✄ Bot ini tidak menyimpan media/foto yang anda kirimkan
✄ Gunakan bot ini sebaik mungkin
✄ Jangan spam fitur/command bot
✄ Bot ini hanya untuk hiburan semata, dan *tidak untuk dimakan*
✄ Bot ini sekedar bot, tidak dapet berbicara/melakukan hall yang berlebihan seperti manusia
▬▭▬▭▬▭▬▭▬▭▬▭▬▭
✄ *HUKUMAN*
✄ Owner berhak memberikan teguran hingga sanksi terhadap user yang melanggar peraturan di atas
✄ Melanggar peraturan di atas dapat mendapatkan sanksi seperti banned/block user
▬▭▬▭▬▭▬▭▬▭▬▭▬▭`)
break
case 'mygrub': case 'mygrup': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
reply("Join-ya!?\n" + linkgrub)
break
case 'wallneon': case 'wallrandom': case 'wallcode': case 'wallpubg': case 'wallml': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 	
try{
prosess("[❗] SEDANG DIPROSESS")						
nyz2 = await fetchJson(`https://myselfff.herokuapp.com/docs/wallpaper/${command}`) 
nyz3 = await getBuffer(nyz2.list.gambar)
nayla.sendMessage(from, {image : nyz3, caption:"SUKSES" }, {quoted:nay}) 						
} catch (e) {
errorr(e)
}
break
case 'audio1': case 'audio2': case 'audio3': case 'audio4': case 'audio5': case 'audio6': case 'audio7': case 'audio8': case 'audio9': case 'audio10':
case 'audio11': case 'audio12': case 'audio13': case 'audio14': case 'audio15': case 'audio16': case 'audio17': case 'audio18': case 'audio19': case 'audio20': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
try{
nayla.sendMessage(from,{ audio: { url: `media/audio/nyz-${command}.m4a`},ptt:true, mimetype: 'audio/mp4'}, {quoted:{key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {})},message: {"extendedTextMessage": {"text": `HY : ${pushname}\n❀ RUNTIME : ${kyun(runtime)}`, 'title':'2', 'jpegThumbnail': fs.readFileSync(`./media/image/audio.jpg`)}}}})
} catch (e) {
errorr("ERROR")
}
break
case 'tampar': case 'tendang': case 'jijik': case 'ketawa': case 'diam': case 'kaget': case 'nangis': case 'peluk': case 'pukul': case 'marah': case 'takut': case 'sedih': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
if (!isPrem) return reply(respon.onlyprem(pushname))
if (!isGroup) return reply(respon.onlyGroup(pushname));
try{
if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang nya kak')
const meention = nay.message.extendedTextMessage.contextInfo.mentionedJid
stickrndm = fs.readFileSync(`./media/sticker/${command}.webp`)
nayla.sendMessage(from, {sticker : stickrndm}, {quoted: { key: { fromMe: false, participant: `${meention}`, ...({}) }, message: { "extendedTextMessage": { "text": `😄`} } }}) 		 		   
} catch (e) {
errorr("ERROR")
}
break 
case 'ganteng': case 'cantik': case 'jelek': case 'bego': case 'pintar': case 'jago': case 'nolep': 
case 'beban': case 'baik': case 'jahat': case 'haram': case 'halal': case 'pakboy': case 'pakgirl': 
case 'wibu': case 'hebat': case 'sadboy': case 'sadgirl': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!isGroup) return reply(respon.onlyGroup(pushname));
try{
if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('tag orang nya kak')
const meention = nay.message.extendedTextMessage.contextInfo.mentionedJid
stickrndm = fs.readFileSync(`./media/sticker/panic.webp`)
nayla.sendMessage(from, {sticker : stickrndm}, {quoted: { key: { fromMe: false, participant: `${meention}`, ...({}) }, message: { "extendedTextMessage": { "text": `Uhh... gw yang ter${command} di sini....`} } }}) 		 		   
} catch (e) {
errorr("ERROR")
}
break
case 'pakgirlcek': case 'nolepcek': case 'pakboycek': case 'jagocek': case 'halalcek':
case 'pintarcek': case 'sadgirlcek': case 'haramcek': case 'begocek': case 'sadboycek': case 'cantikcek':
case 'jahatcek': case 'jelekcek': case 'hebatcek': case 'baikcek': case 'wibucek': case 'bebancek': case 'gantengcek': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
angka = ['1','2','3','4','5','6','7','8','9']
const randomnay1 = angka[Math.floor(Math.random() * (angka.length))]					
const randomnay2 = angka[Math.floor(Math.random() * (angka.length))]
N = `• *NAME* : ${pushname}\n`,
N += `• *COMMAND* : ${command}\n`,
N += `• *RATE* : *${randomnay1}${randomnay2}% :v*`
reply(N)
break
case 'ping': case 'speed': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!isOwner) return reply(respon.ownerbot(pushname));
const speed = require('performance-now')
let timestampi = speed();
let latensii = speed() - timestampi
spd = `=> *SPEED* : ${latensii.toFixed(4)}`
reply(spd)
break			
case 'addprem': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")	
if (!isGroup) return reply(respon.onlyGroup(pushname));
if (!isOwner) return reply(respon.ownerbot(pushname));
if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang nya kak')
const meention = nay.message.extendedTextMessage.contextInfo.mentionedJid
prem.push(meention)
fs.writeFileSync('./lib/prem.json', JSON.stringify(prem))
sukses("SUKSES")
break				
case 'dellprem': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!isGroup) return reply(respon.onlyGroup(pushname));
if (!isOwner) return reply(respon.ownerbot(pushname));
if (nay.message.extendedTextMessage === undefined || nay.message.extendedTextMessage === null) return reply('Tag orang nya kak')
const meentionn = nay.message.extendedTextMessage.contextInfo.mentionedJid
prem.splice(meentionn, 1)
fs.writeFileSync('./lib/prem.json', JSON.stringify(prem))
sukses("SUKSES")
break
case 'listprem': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
reply(prem)
break 
case 'getprem': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (isPrem) return reply("Anda telah menjadi user premium sebelumnya")
if (!q) return reply("Silahkan masukkan kode premium, untuk mendapatkan kode premium silahkan hubungi owner")
if ((args[0]) === kodeprem) {
prem.push(`${sender.split("@")[0]}@s.whatsapp.net`)
fs.writeFileSync('./lib/prem.json', JSON.stringify(prem))
sukses("SUKSES")
} else {
reply("kode yang anda gunakan salah, untuk mendapatkan kode premium silahkan hubungi owner")
}
break
case 'iklan': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
const buttons = [
{buttonId: `${prefix}iklan1`, buttonText: {displayText: 'IKLAN1'}, type: 1},
{buttonId: `${prefix}iklan2`, buttonText: {displayText: 'IKLAN2'}, type: 1},
{buttonId: `${prefix}iklan3`, buttonText: {displayText: 'IKLAN3'}, type: 1}
]
const p = {
text: `IKLAN BY ${namaowner}`,
footer: `Loading...`,
buttons: buttons,
headerType: 1
}
nayla.sendMessage(from, p, {quoted:nay1})
break
case 'chat':
case 'chatowner': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!q) return reply("Text nya mana")
nayla.sendMessage(`${nomerowner}@s.whatsapp.net`, {text: `• *NAME* : ${pushname}\n• *MESSAGE* : ${q}`}, {quoted:nay1})
sukses("SUKSES")
break
case 'iklan1': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
reply(iklan.iklan1())
break
case 'iklan2': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
reply(iklan.iklan2())
break
case 'iklan3': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
reply(iklan.iklan3())
break
case 'hackmatahari': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!isPrem) return reply(respon.onlyprem(pushname))
ingfo = `Sukses hack Matahari👍 ini dia info detail matahari saat ini\nn\n• *Suhu permukaan* : 9.999 K\n• *Massa* : 9,99999 kg\n• *Radius rata-rata* : 999.999 km\n• *Usia* : 9.999 miliar tahun\n• *Jarak ke Bumi* : 999,9 juta km\n• *Gravitasi* : 999 m/s²\n• *Bulan* : 9999 Florence, 99999 Orcus`
hacker(command, "matahari", "https://asset.kompas.com/crops/vbavZpYBxOAA83ocaYh-5_xPSf4=/98x0:698x400/750x500/data/photo/2017/08/02/4269061701.jpg", ingfo)
break
case 'hackbulan': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!isPrem) return reply(respon.onlyprem(pushname))
ingfo = `Sukses hack bulan saat ini\n\n• *Jarak ke Bumi* : 999,999 km\n• *Luas permukaan* : 9,999×999 km2 (9,999 Bumi)\n• *Apogee* : 999,999 km; (9,9999 AU)\n• *Bujur node menaik* : Mundur satu revolusi dalam 99,9 tahun\n• *Diameter sudut* : 9,99 sampai 99,9 menit busur\n• *Eksentrisitas* : 9,9999\n• *Gravitasi permukaan* : 9,999 m/s2 (9,9999 g)`
hacker(command, "bulan", "https://media.suara.com/pictures/653x366/2014/10/02/shutterstock_67681837-e1412258071910.jpg", ingfo)
break
case 'hackbapak': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!isPrem) return reply(respon.onlyprem(pushname))
ingfo = `Sukses hack bapak dalam keadaan tersenyum, selamat bapak ini sudah resmi menjadi milik anda, jika anda tidak ingin menerima bapak ini silahkan donasi kan saja bapak ini ke anak yang membutuhkan\n\n• Nama : Jamaluddin\n• tanggal lahir : 1990\n• Alamat : Bogor\n• Jenis Kelamin : pria\n• Agama : Gatau\n• Berat badan : 99kg\n• Tinggi Badan : 2km\n• Hobi : gay`
hacker(command, "bapak", "https://i.ibb.co/xS9DB0p/Bapak-Ganteng-on-Instagram-Selamat-pagi-sahabat-Bapak-nikmat-sehat-dan-nikmat-iman-adalah-rejeki-pal.jpg", ingfo)
break
case 'hacksatelit': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!isPrem) return reply(respon.onlyprem(pushname))
ingfo = `Sukses hack satelit!! sekarang satelit berada 99.999 km (99.999 mil) di atas ekuator Bumi dan tidak lagi mengikuti arah rotasi bumi.`
hacker(command, "satelit", "https://asset.kompas.com/crops/jjqenjpiePG-jrwkYny11L8CDmo=/0x0:1906x1271/750x500/data/photo/2021/06/03/60b8d58df2157.jpg", ingfo)
break
case 'hackbts': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!isPrem) return reply(respon.onlyprem(pushname))
ingfo = `Sukses hack bts!!\nHmm saya tidak tau mau berkata apa lagi...`
hacker(command, "bts", "https://cdn06.pramborsfm.com/storage/app/media/Prambors/Editorial/BTS-20210612062314.jpg", ingfo)
break
case 'hackfreefire': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!isPrem) return reply(respon.onlyprem(pushname))
ingfo = `Sukses hack freefire!! dan saya sudah mengubah info apk nya seperti di bawah ini\n\n• Tanggal rilis awal: ndak tau\n• Pengembang: ndak tau\n• Penerbit: anda\n• Mode: Permainan gajlss\n• Engine: ndak tau\n• Genre: echi, harem\n• Platform: ndak tau.`
hacker(command, "freefire", "https://asset.kompas.com/crops/FZOLNy5SigKjiRNh8q2cJ9Chjic=/151x0:1231x720/375x240/data/photo/2020/06/25/5ef405986c087.jpg", ingfo)
break
case 'hacklautan': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!isPrem) return reply(respon.onlyprem(pushname))
ingfo = `Sukses hack lautan!! sekarang lautan telah berubah warna😱😤🤯.`
hacker(command, "lautan", "https://asset-a.grid.id/crop/0x0:0x0/360x240/photo/2018/11/06/4089587690.jpg", ingfo)
break
case 'rainbow': case 'scfi': case 'blue': case 'juice': case 'purple': case 'toxic': case 'peridot': case 'metal': 
case 'realistic': case 'impressive': case 'cracked': case 'magma': case 'thunder': case 'berry': case 'transformer': 
case 'horror': case 'metallic': case 'circuit': case 'sketch': case 'halloween': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!q) return reply("text nya mana")		
prosess("[❗] SEDANG DIPROSES")
nyz5 = await fetchJson(`https://myselfff.herokuapp.com/docs/textpro/${command}?text=${q}`) 
nyz4 = await getBuffer(nyz5.result)
nayla.sendMessage(from, {image:nyz4, caption: "SUKSES"}, {quoted:nay}) 		
break	
 case 'artinama': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!q) return reply("Textnya mana")
nyz6 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/artinama?query=${q}`)
nyz7 = `[ *ARTI NAMA* ]\n`,
nyz7 += `=> *ARTINAMA* : ${nyz6.result.list}`
reply(nyz7)	
break
case 'artimimpi': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!q) return reply("Textnya mana")
nyz8 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/artimimpi?query=${q}`)
nyz31 = `[ *ARTI MIMPI* ]\n`,
nyz31 += `=> *ARTINAMA* : ${nyz8.result.list}`
reply(nyz31)	
break
case 'resepmasakan': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!q) return reply("Textnya mana")
nyz9 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/resepmasakan?query=${q}`)
nyz32 = `[ *RESEP MASAKAN* ]\n`,
nyz32 += `=> *NAMA* : ${nyz9.list.nama}\n`,
nyz32 += `=> *CARA* : ${nyz9.list.cara}`
reply(nyz32)	
break
case 'katajago': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!q) return reply("Textnya mana")
nyz10 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/katajago?query=${q}`)
nyz33 = `[ *KATA JAGO* ]\n`,
nyz33 += `=> *RESULT* : ${nyz10.result.list}`
reply(nyz33)	
break 
case 'besarkecil': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")	
if (!q) return reply("Textnya mana")
nyz11 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/besarkecil?query=${q}`)
nyz34 = `[ *BESAR KECIL* ]\n`,
nyz34 += `=> *RESULT* : ${nyz11.result.list}`
reply(nyz34)	
break	  
case 'jumlahhuruf': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")	
if (!q) return reply("Textnya mana")
nyz12 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/jumlahhuruf?query=${q}`)
nyz35 = `[ *JUMLAH HURUF* ]\n`,
nyz35 += `=> *RESULT* : ${nyz12.result.list}`
reply(nyz35)	
break
case 'jumlahangka': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")		
if (!q) return reply("angka mana")
nyz13 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/jumlahangka?query=${q}`)
nyz36 = `[ *JUMLAH ANGKA* ]\n`,
nyz36 += `=> *RESULT* : ${nyz13.result.list}`
reply(nyz36)
break
case 'infogempa': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")		
nyz14 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/infogempa`)
nyz37 = `[ *INFO GEMPA* ]\n`,
nyz37 += `=> *WAKTU* : ${nyz14.result.waktu}\n`,
nyz37 += `=> *KEDALAMAN* : ${nyz14.result.kedalaman}\n`,
nyz37 += `=> *KOORDINAT* : ${nyz14.result.koordinat}\n`,
nyz37 += `=> *LOKASI* : ${nyz14.result.lokasi}\n`,
nyz37 += `=> *TSUNAMI* : ${nyz14.result.tsunami}`
reply(nyz37)
break	    	
case 'kapital': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")	
if (!q) return reply("Textnya mana")
nyz15 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/kapital?query=${q}`)
nyz38 = `[ *KAPITAL* ]\n`,
nyz38 += `=> *RESULT* : ${nyz15.result.list}`
reply(nyz38)
break	
case 'halah': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")	
if (!q) return reply("Textnya mana")
nyz16 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/halah?query=${q}`)
nyz39 = `[ *HALAH* ]\n`,
nyz39 += `=> *RESULT* : ${nyz16.result.list}`
reply(nyz39)
break    	
case 'hilih': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")	
if (!q) return reply("Textnya mana")
nyz17 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/hilih?query=${q}`)
nyz40 = `[ *HILIH* ]\n`,
nyz40 += `=> *RESULT* : ${nyz17.result.list}`
reply(nyz40)
break    	
case 'huluh': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")	
if (!q) return reply("Textnya mana")
nyz18 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/huluh?query=${q}`)
nyz41 = `[ *HULUH* ]\n`,
nyz41 += `=> *RESULT* : ${nyz18.result.list}`
reply(nyz41)
break    	
case 'heleh': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")	
if (!q) return reply("Textnya mana")
nyz19 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/heleh?query=${q}`)
nyz42 = `[ *HELEH* ]\n`,
nyz42 += `=> *RESULT* : ${nyz19.result.list}`
reply(nyz42)
break    	
case 'holoh': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")	
if (!q) return reply("Textnya mana")
nyz20 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/holoh?query=${q}`)
nyz43 = `[ *HOLOH* ]\n`,
nyz43 += `=> *RESULT* : ${nyz20.result.list}`
reply(nyz43)
break  
case 'bilangangka': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")		
if (!q) return reply("angka mana")
nyz21 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/bilangangka?query=${q}`)
nyz44 = `[ *BILANG ANGKA* ]\n`,
nyz44 += `=> *RESULT* : ${nyz21.result.list}`
reply(nyz44)
break 
case 'balikhuruf': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")	
if (!q) return reply("Textnya mana")
nyz23 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/balikhuruf?query=${q}`)
nyz46 = `[ *BALIK HURUF* ]\n`,
nyz46 += `=> *RESULT* : ${nyz23.result.list}`
reply(nyz46)
break	
case 'wikipedia': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")	
if (!q) return reply("Textnya mana")
nyz24 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/wikipedia?query=${q}`)
nyz47 = `[ *WIKIPEDIA* ]\n`,
nyz47 += `=> *RESULT* : ${nyz24.result.list}`
reply(nyz47)
break 
case 'balikangka': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!q) return reply("angka mana")
nyz25 = await fetchJson(`https://myselfff.herokuapp.com/docs/random/balikangka?query=${q}`)
nyz48 = `[ *BALIK ANGKA* ]\n`,
nyz48 += `=> *RESULT* : ${nyz25.result.list}`
reply(nyz48)
break	
case 'zoro': case 'luffy': case 'sanji': case 'ussop': case 'nami': case 'copper': case 'naruto': 
case 'minato': case 'sasuke': case 'sakura': case 'boruto': case 'sarada': case 'mitsuki':
case 'orochimaru': case 'tsunade': case 'kakashi': case 'killua': case 'gon': case 'rimuru': 
case 'sagiri': case 'natsu': case 'tanjirou': case 'nezuko': case 'senku': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 			   
prosess("[❗] SEDANG DIPROSES")	
const judul = command
hx.pinterest(judul)
.then(result => {
angka = ['1','2','3','4','5','6','7','8','9']
const randomnay1 = angka[Math.floor(Math.random() * (angka.length))]					
const buttons = [{buttonId: `${prefix + command}`, buttonText: {displayText: 'NEXT'}, type: 1}]
const buttonMessage = {image: {url: result[randomnay1]},caption: "NIH",footerText: 'Loading...',buttons: buttons,headerType: 4}
nayla.sendMessage(from, buttonMessage, {quoted:nay})})
break 
case 'pinterest': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
prosess("[❗] SEDANG DIPROSES")
hx.pinterest(q)
.then(result => {
angkaa = ['1','2','3','4','5','6','7','8','9']
const randomnay2 = angkaa[Math.floor(Math.random() * (angkaa.length))]					
const buttons01 = [{buttonId: `${prefix + command} ${q}`, buttonText: {displayText: 'NEXT'}, type: 1}]
const buttonMessage01 = {image: {url: result[randomnay2]},caption: "NIH",footerText: 'Loading...',buttons: buttons01,headerType: 4}
nayla.sendMessage(from, buttonMessage01, {quoted:nay})})
break 
case 'attp': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!q) return reply("Textnya mana kak")
nyz200 = await getBuffer(`https://myselfff.herokuapp.com/docs/random/attp?query=${q}`)
nayla.sendMessage(from, {sticker:nyz200}, {quoted:nay1})
break	
case 'grubwa': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")  	
if (!q) return reply("Textnya mana kak")
nyz49 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/grubwa?query=${q}`)
nyz50 = `[ *GRUB WA* ]\n`,
nyz50 += `=> *NAMA* : ${nyz49.result.judul}\n`,
nyz50 += `=> *LINK* : ${nyz49.result.link}\n`
reply(nyz50)
break
case 'arena': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
if (!q) return reply("Textnya mana kak")
nyz51 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/arena?query=${q}`)
nyz53 = nyz51.result
nyz52 = `[ *ARENA* ]\n`,
nyz52 += `=> *SPEK* : ${nyz53.spek}\n`,
nyz52 += `=> *TYPE* : ${nyz53.type}\n`,
nyz52 += `=> *SIZE* : ${nyz53.size}\n`,
nyz52 += `=> *RESOLUSI* : ${nyz53.resolusi}\n`,
nyz52 += `=> *OS* : ${nyz53.os}\n`,
nyz52 += `=> *CPU* : ${nyz53.cpu}\n`,
nyz52 += `=> *INTERNAL* : ${nyz53.internal}\n`,
nyz52 += `=> *CAMERA* : ${nyz53.camera}\n`,
nyz52 += `=> *BATTERAI* : ${nyz53.batterai}\n`
reply(nyz52)
break
case 'amazon': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
if (!q) return reply("Textnya mana kak")
nyz54 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/amazon?query=${q}`)
nyz55 = nyz54.result
nyz56 = `[ *AMAZON* ]\n`,
nyz56 += `=> *ITEM* : ${nyz55.item}\n`,
nyz56 += `=> *REVIEW* : ${nyz55.review}\n`,
nyz56 += `=> *RATING* : ${nyz55.rating}\n`,
nyz56 += `=> *PRICE* : ${nyz55.price}\n`,
nyz56 += `=> *DISKON* : ${nyz55.diskon}\n`,
nyz56 += `=> *URL* : ${nyz55.url}\n`,
nyz56 += `=> *SPONSOR* : ${nyz55.sponsor}\n`,
nyz56 += `=> *BEST* : ${nyz55.best}\n`,
nyz56 += `=> *AMAZON* : ${nyz55.amazon}\n`
reply(nyz56)
break
case 'shopee': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
if (!q) return reply("Textnya mana kak")
nyz57 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/shopee?query=${q}`)
nyz58 = nyz57.result
nyz59 = `[ *SHOPEE* ]\n`,
nyz59 += `=> *JUDUL* : ${nyz58.judul}\n`,
nyz59 += `=> *HARGA* : ${nyz58.harga}\n`,
nyz59 += `=> *MERK* : ${nyz58.merk}\n`,
nyz59 += `=> *STOCK* : ${nyz58.stock}\n`,
nyz59 += `=> *LIKE* : ${nyz58.like}\n`,
nyz59 += `=> *VIEWS* : ${nyz58.views}\n`,
nyz59 += `=> *TERJUAL* : ${nyz58.terjual}\n`
reply(nyz59)
break
case 'thelazy': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
if (!q) return reply("Textnya mana kak")
nyz70 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/thelazy?query=${q}`)
nyz71 = nyz70.result
nyz72 = `[ *THELAZY* ]\n`,
nyz72 += `=> *TITLE* : ${nyz71.title}\n`,
nyz72 += `=> *URL* : ${nyz71.url}\n`,
nyz72 += `=> *CATEGORY* : ${nyz71.category}\n`,
nyz72 += `=> *AUTHOR* : ${nyz71.author}\n`,
nyz72 += `=> *POST* : ${nyz71.post_date}\n`,
nyz72 += `=> *COMMENTS* : ${nyz71.comments}\n`
reply(nyz72)
break
case 'cersex': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
if (!q) return reply("Textnya mana kak")
nyz73 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/cersex?query=${q}`)
nyz74 = nyz73.result
nyz75 = `[ *CERSEX* ]\n`,
nyz75 += `=> *TITLE* : ${nyz74.title}\n`,
nyz75 += `=> *URL* : ${nyz74.url}\n`,
nyz75 += `=> *CATEGORY* : ${nyz74.category}\n`,
nyz75 += `=> *POST* : ${nyz74.post}\n`
reply(nyz75)
break
case 'ytsearch': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
if (!q) return reply("Textnya mana kak")
nyz76 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/ytsearch?query=${q}`)
nyz77 = nyz76.result
nyz78 = `[ *YTSEARCH* ]\n`,
nyz78 += `=> *TITLE* : ${nyz77.title}\n`,
nyz78 += `=> *ID* : ${nyz77.id}\n`,
nyz78 += `=> *TYPE* : ${nyz77.type}\n`,
nyz78 += `=> *VIEWS* : ${nyz77.views}\n`,
nyz78 += `=> *URL* : ${nyz77.url}\n`,
nyz78 += `=> *DESC* : ${nyz77.desc}\n`
reply(nyz78)
break
case 'rexdl': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
if (!q) return reply("Textnya mana kak")
nyz79 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/rexdl?query=${q}`)
nyz80 = nyz79.result
nyz81 = `[ *REXDL* ]\n`,
nyz81 += `=> *TITLE* : ${nyz80.title}\n`,
nyz81 += `=> *URL* : ${nyz80.url}\n`, 
nyz81 += `=> *ON* : ${nyz80.on}\n`,
nyz81 += `=> *DESC* : ${nyz80.desc}\n` 
reply(nyz81)
break 
case 'sfile': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!q) return reply("Textnya mana kak")
nyz85 = await fetchJson(`https://myselfff.herokuapp.com/docs/search/sfile?query=${q}`)
nyz86 = nyz85.result
nyz87 = `[ *SFILE* ]\n`,
nyz87 += `=> *TITLE* : ${nyz86.title}\n`,
nyz87 += `=> *SIZE* : ${nyz86.size}\n`,
nyz87 += `=> *URL* : ${nyz86.url}\n`
reply(nyz87)
break
case 'berita': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
nyz88 = await fetchJson(`https://myselfff.herokuapp.com/docs/news/berita`)
nyz89 = nyz88.result
nyz90 = `[ *BERITA* ]\n`,
nyz90 += `=> *TITLE* : ${nyz89.title}\n`,
nyz90 += `=> *URL* : ${nyz89.url}\n`
reply(nyz90)
break
case 'kompas': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
nyz91 = await fetchJson(`https://myselfff.herokuapp.com/docs/news/kompas`)
nyz92 = nyz91.result
nyz93 = `[ *KOMPAS* ]\n`,
nyz93 += `=> *TITLE* : ${nyz92.title}\n`,
nyz93 += `=> *URL* : ${nyz92.url}\n`
reply(nyz93)
break
case 'okezone': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
nyz94 = await fetchJson(`https://myselfff.herokuapp.com/docs/news/okezone`)
nyz95 = nyz94.result
nyz96 = `[ *OKEZONE* ]\n`,
nyz96 += `=> *TITLE* : ${nyz95.title}\n`,
nyz96 += `=> *URL* : ${nyz95.url}\n`
reply(nyz96)
break
case 'antara': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
nyz97 = await fetchJson(`https://myselfff.herokuapp.com/docs/news/antara`)
nyz98 = nyz97.result
nyz99 = `[ *ANTARA* ]\n`,
nyz99 += `=> *TITLE* : ${nyz98.title}\n`,
nyz99 += `=> *URL* : ${nyz98.url}\n`
reply(nyz99)
break
case 'jam': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
nyz100 = await fetchJson(`https://myselfff.herokuapp.com/docs/information/jam`)
nyz101 = nyz100.result
nyz102 = `[ *JAM* ]\n`,
nyz102 += `=> *WIB* : ${nyz101.wib}\n`,
nyz102 += `=> *WITA* : ${nyz101.wita}\n`,
nyz102 += `=> *WIT* : ${nyz101.wit}\n`
reply(nyz102)
break
case 'jamdunia': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
nyz103 = await fetchJson(`https://myselfff.herokuapp.com/docs/information/jamdunia`)
nyz104 = nyz103.result
nyz105 = `[ *JAM DUNIA* ]\n`,
nyz105 += `=> *WITA* : ${nyz104.wita}\n`,
nyz105 += `=> *WIT* : ${nyz104.wit}\n`,
nyz105 += `=> *WIB* : ${nyz104.wib}\n`,
nyz105 += `=> *MATAHARI* : ${nyz104.matahari}\n`,
nyz105 += `=> *TANGGAL* : ${nyz104.tanggal}\n`,
nyz105 += `=> *DETAIL* : ${nyz104.detail}\n`
reply(nyz105)
break
case 'jadwalbola': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
nyz106 = await fetchJson(`https://myselfff.herokuapp.com/docs/information/jadwalbola`)
nyz107 = nyz106.result
nyz108 = `[ *JADWAL BOLA* ]\n`,
nyz108 += `=> *WAKTU* : ${nyz107.waktu}\n`,
nyz108 += `=> *KICKOFF* : ${nyz107.kickoff}\n`,
nyz108 += `=> *CHANNEL* : ${nyz107.channel}\n`
reply(nyz108)
break
case 'infohoax': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
nyz109 = await fetchJson(`https://myselfff.herokuapp.com/docs/information/infohoax`)
nyz110 = nyz109.result
nyz111 = `[ *INFO HOAX* ]\n`,
nyz111 += `=> *TITLE* : ${nyz110.title}\n`,
nyz111 += `=> *URL* : ${nyz110.URL}\n`,
nyz111 += `=> *TANGGAL* : ${nyz110.tanggal}\n`,
nyz111 += `=> *DESC* : ${nyz110.desc}\n`
reply(nyz111)
break 
case 'coronameninggal': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
nyz112 = await fetchJson(`https://myselfff.herokuapp.com/docs/information/coronameninggal`)
nyz113 = `=> *MENINGGAL* : ${nyz112.result.meninggal}`
reply(nyz113)
break	
case 'hadist': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
nyz117 = await fetchJson(`https://myselfff.herokuapp.com/docs/islamic/hadist`)
nyz118 = `[ *HADIST* ]\n`,
nyz118 += `=> *NAME* : ${nyz117.list.name}\n`,
nyz118 += `=> *ID* : ${nyz117.list.id}\n`,
nyz118 += `=> *AVAILABLE* : ${nyz117.list.available}\n`,
nyz118 += `=> *NUMBER* : ${nyz117.list.number}\n`,
nyz118 += `=> *ARAB* : ${nyz117.list.arab}\n`
reply(nyz118)
break
case 'quran': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
nyz119 = await fetchJson(`https://myselfff.herokuapp.com/docs/islamic/quran`)
nyz120 = `[ *QURAN* ]\n`,
nyz120 += `=> *QURAN* : ${nyz119.list.quran}\n`,
nyz120 += `=> *SURAH* : ${nyz119.list.surah}\n`,
nyz120 += `=> *JUZ* : ${nyz119.list.juz}\n`,
nyz120 += `=> *ARAB* : ${nyz119.list.arab}\n`,
nyz120 += `=> *SHORT* : ${nyz119.list.id_short}\n`,
nyz120 += `=> *LONG* : ${nyz119.list.id_long}\n`
reply(nyz120)
break
case 'asmaulhusna': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
nyz121 = await fetchJson(`https://myselfff.herokuapp.com/docs/islamic/asmaulhusna`)
nyz122 = `[ *ASMAULHUSNA* ]\n`,
nyz122 += `=> *NUMBER* : ${nyz121.list.number}\n`,
nyz122 += `=> *LATIN* : ${nyz121.list.latin}\n`,
nyz122 += `=> *ARAB* : ${nyz121.list.arab}\n`,
nyz122 += `=> *ID* : ${nyz121.list.id}\n`,
nyz122 += `=> *EN* : ${nyz121.list.en}\n`
reply(nyz122)
break
case 'kisahnabi': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
nyz125 = await fetchJson(`https://myselfff.herokuapp.com/docs/islamic/kisahnabi`)
nyz124 = `[ *KISAHNABI* ]\n`,
nyz124 += `=> *NAME* : ${nyz125.list.name}\n`,
nyz124 += `=> *KELAHIRAN* : ${nyz125.list.kelahiran}\n`,
nyz124 += `=> *WAFAT USIA* : ${nyz125.list.wafat_usia}\n`,
nyz124 += `=> *SINGGAH* : ${nyz125.list.singgah}\n`,
nyz124 += `=> *KISAH* : ${nyz125.list.kisah}\n`
reply(nyz124)
break
case 'masturbation': case 'jahy': case 'hentai': case 'glasses': case 'gangbang': case 'foot': 
case 'femdom': case 'cum': case 'ero': case 'cuckold': case 'blowjob': case 'bdsm': 
case 'ahegao': case 'ass': case 'orgy': case 'panties': case 'pussy': case 'thighs': case 'yuri': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")	 			
//try{
//reply("FITUR INI DINONAKTIFKAN SAAT BULAN RAMADHAN")	    
nyz125 = await fetchJson(`https://myselfff.herokuapp.com/docs/nsfw/${command}`)
//nyz126 = await getBuffer(nyz125.result)
//nayla.sendMessage(from, {image:nyz126},{quoted:nay})
//} catch (e) {error("ERROR")}	
reply(nyz125.result)
break  
case 'scbot': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
reply("https://youtube.com/channel/UCeQaKIQQhDNHMOq_odQh5Sw")
break
case 's':
case 'sticker':
case 'stiker':
case 'sgif':
case 'stickergif':
case 'stikergif': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
try {
prosess("[❗] SEDANG DIPROSES")	    
if (isMedia || isQuotedImage) {
var stream = await downloadContentFromMessage(nay.message.imageMessage || nay.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
var buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
fs.writeFileSync('./media/res_buffer.jpg', buffer)
const image = './media/res_buffer.jpg'
await ffmpeg(image)
.input(image)
.on('start', function (start) {
// console.log(colors.green.bold(`${start}`))
})
.on('error', function (error) {
reply("error")
 console.log(`${error}`)
})
.on('end', function () {
//console.log(colors.yellow('Selesai convert'))
nayla.sendMessage(from, { sticker: {url: './media/mysticker.webp'}, mimetype: 'image/webp' })
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save('./media/mysticker.webp')
} else if (isMedia || isQuotedVideo) {
var stream = await downloadContentFromMessage(nay.message.videoMessage || nay.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
var buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
fs.writeFileSync('./media/res_buffer.mp4', buffer)
const video = './media/res_buffer.mp4'
await ffmpeg(video)
.input(video)
.on('start', function (start) {
// console.log(colors.green.bold(`${start}`))
})
.on('error', function (error) {
reply("error")
 console.log(`${error}`)
})
.on('end', function () {
//console.log(colors.yellow('Selesai convert'))
nayla.sendMessage(from, { sticker: {url: './media/mysticker2.webp' }, mimetype: 'image/webp' })
})
.addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
.toFormat('webp')
.save('./media/mysticker2.webp')
} else {
reply(`Kirim foto/video dengan caption ${prefix}sticker`)
}
} catch (e) {
console.log(e)
error("ERROR")
}
break
case 'emojiapple': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!q) return reply("Masukkan emoji, maksimal 1 emoji, contoh?" + ` ${prefix + command} 😀`)
prosess("[❗] SEDANG DIPROSES")
emote(q, "0")
break
case 'emojigoogle': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!q) return reply("Masukkan emoji, maksimal 1 emoji, contoh?" + ` ${prefix + command} 😀`)
prosess("[❗] SEDANG DIPROSES")
emote(q, "1")
break
case 'emojisamsung': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!q) return reply("Masukkan emoji, maksimal 1 emoji, contoh?" + ` ${prefix + command} 😀`)
prosess("[❗] SEDANG DIPROSES")
emote(q, "2")
break
case 'emojimicrosoft': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!q) return reply("Masukkan emoji, maksimal 1 emoji, contoh?" + ` ${prefix + command} 😀`)
prosess("[❗] SEDANG DIPROSES")
emote(q, "3")
break
case 'emojiwhatsapp': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!q) return reply("Masukkan emoji, maksimal 1 emoji, contoh?" + ` ${prefix + command} 😀`)
prosess("[❗] SEDANG DIPROSES")
emote(q, "4")
break
case 'emojitwitter': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!q) return reply("Masukkan emoji, maksimal 1 emoji, contoh?" + ` ${prefix + command} 😀`)
prosess("[❗] SEDANG DIPROSES")
emote(q, "5")
break
case 'emojifecabook': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!q) return reply("Masukkan emoji, maksimal 1 emoji, contoh?" + ` ${prefix + command} 😀`)
prosess("[❗] SEDANG DIPROSES")
emote(q, "6")
break
case 'emojiskype': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!q) return reply("Masukkan emoji, maksimal 1 emoji, contoh?" + ` ${prefix + command} 😀`)
prosess("[❗] SEDANG DIPROSES")
emote(q, "7")
break
case 'emojijoy': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!q) return reply("Masukkan emoji, maksimal 1 emoji, contoh?" + ` ${prefix + command} 😀`)
prosess("[❗] SEDANG DIPROSES")
emote(q, "8")
break
case 'emojimoji': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!q) return reply("Masukkan emoji, maksimal 1 emoji, contoh?" + ` ${prefix + command} 😀`)
prosess("[❗] SEDANG DIPROSES")
emote(q, "9")
case 'emojipedia': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!q) return reply("Masukkan emoji, maksimal 1 emoji, contoh?" + ` ${prefix + command} 😀`)
prosess("[❗] SEDANG DIPROSES")
emote(q, "10")
break
case 'emojilg': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!q) return reply("Masukkan emoji, maksimal 1 emoji, contoh?" + ` ${prefix + command} 😀`)
prosess("[❗] SEDANG DIPROSES")
emote(q, "11")
break
case 'trenbekasi': case 'trendepok': case 'trenpekanbaru': case 'trensurabaya': case 'trenmakassar': case 'trenbandung':
 case 'trenjakarta': case 'trenmedan': case 'trenpalembang': case 'trensemarang': case 'trentangerang': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG") 
ny1 = await fetchJson(`https://myselfff.herokuapp.com/docs/trending/${command1}`)
ny2 = `• *NAMA* : ${ny1.result.title}\n`
ny2 += `• *URL* : ${ny1.result.desc}\n`
ny2 += `• *VOLUME* : ${ny1.result.volume}\n`
ny2 += `• *CONTENT* : ${ny1.result.content}\n`
ny2 += `• *QUERY* : ${ny1.result.query}\n`
reply(ny2)
break 
case 'hidetag': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!isGroup) return reply(respon.onlyGroup(pushname));
if (!isGroupAdmins) return reply(respon.onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(respon.botAdmin(pushname));
if (!q) return reply("TEXT NYA MANA")
const id = uwong.map(v => v.id)
nayla.sendMessage(from, { text: `${q}`, mentions: id })
break
case 'antilink': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!isGroup) return reply(respon.onlyGroup(pushname));
if (!isGroupAdmins) return reply(respon.onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(respon.botAdmin(pushname));
const buttons12 = [
{buttonId: `${prefix}antilink off`, buttonText: {displayText: 'OFF'}, type: 1},
{buttonId: `${prefix}antilink on`, buttonText: {displayText: 'ON'}, type: 1}]
const pp = {
text: `ANTILINK ONLINE/OFLINE`,
footer: `Loading...`,
buttons: buttons12,
headerType: 1
}
if (!q) return nayla.sendMessage(from, pp, {quoted:nay1})
if ((args[0]) === 'on') {
antilink.push(from)
fs.writeFileSync('./lib/antilink.json', JSON.stringify(antilink))
reply("SUKSES : ANTILINK ON")
} else if ((args[0]) === 'off') {
antilink.splice(from, 1)
fs.writeFileSync('./lib/antilink.json', JSON.stringify(antilink))
reply("SUKSES : ANTILINK OFF")
} else {
nayla.sendMessage(from, pp, {quoted:nay1})
}
break 	
case 'antitag': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!isGroup) return reply(respon.onlyGroup(pushname));
if (!isGroupAdmins) return reply(respon.onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(respon.botAdmin(pushname));
const buttons132 = [
{buttonId: `${prefix}antitag off`, buttonText: {displayText: 'OFF'}, type: 1},
{buttonId: `${prefix}antitag on`, buttonText: {displayText: 'ON'}, type: 1}]
const pp1 = {
text: `ANTITAG ONLINE/OFLINE`,
footer: `Loading...`,
buttons: buttons132,
headerType: 1
}
if (!q) return nayla.sendMessage(from, pp1, {quoted:nay1})
if ((args[0]) === 'on') {
antitag.push(from)
fs.writeFileSync('./lib/antitag.json', JSON.stringify(antitag))
reply("SUKSES : ANTITAG ON")
} else if ((args[0]) === 'off') {
antitag.splice(from, 1)
fs.writeFileSync('./lib/antitag.json', JSON.stringify(antitag))
reply("SUKSES : ANTITAG OFF")
} else {
nayla.sendMessage(from, pp1, {quoted:nay1})
}
break 	
case 'antivirtex': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!isGroup) return reply(respon.onlyGroup(pushname));
if (!isGroupAdmins) return reply(respon.onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(respon.botAdmin(pushname));
const buttons123 = [
{buttonId: `${prefix}antivirtex off`, buttonText: {displayText: 'OFF'}, type: 1},
{buttonId: `${prefix}antivirtex on`, buttonText: {displayText: 'ON'}, type: 1}]
const pp12 = {
text: `ANTIVIRTEX ONLINE/OFLINE`,
footer: `Loading...`,
buttons: buttons123,
headerType: 1
}
if (!q) return nayla.sendMessage(from, pp12, {quoted:nay1})
if ((args[0]) === 'on') {
antivirtex.push(from)
fs.writeFileSync('./lib/antivirtex.json', JSON.stringify(antivirtex))
reply("SUKSES : ANTIVIRTEX ON")
} else if ((args[0]) === 'off') {
antivirtex.splice(from, 1)
fs.writeFileSync('./lib/antivirtex.json', JSON.stringify(antivirtex))
reply("SUKSES : ANTIVIRTEX OFF")
} else {
nayla.sendMessage(from, pp12, {quoted:nay1})
}
break 
case 'quotesanime': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
prosess("[❗] SEDANG DIPROSESS")			
var Quotes = require('anime-quotes-api');
var quote = new Quotes();
var get_quotes = await quote.quotes();
nyz1 = "QUOTES ANIME\n"
nyz1 += `=> *STATUS* : ${get_quotes[0].success}\n`
nyz1 += `=> *NAMA* : ${get_quotes[0].title}\n`
nyz1 += `=> *QUOTES* : ${get_quotes[0].quote}\n`
nyz1 += `=> *TAG* : ${get_quotes[0].tags}`
nextt(command, "NEXT", "https://i.ibb.co/3BYC0dh/20220427-115709.jpg", nyz1)
break
case 'quotesbucin': case 'quoteskehidupan': case 'quotesgalau': case 'quotesrandom': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
prosess("[❗] SEDANG DIPROSESS")			
const quoteAPI = require('quote-indo');
(async () => {
const query = body.slice(7).trim().split(/ +/).shift().toLowerCase()
const quote = await quoteAPI.Quotes(query);
nextt(command, "NEXT", "https://i.ibb.co/3BYC0dh/20220427-115709.jpg", quote)
})()
break
case 'berapa': case 'siapa': case 'kapan': case 'dimana': case 'apakah': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
if (!q) return reply("MASUKKAN TEXT")
berapa1 = ["1","2","3","4","6","6","7","8","9"][Math.floor(Math.random() * (["1","2","3","4","6","6","7","8","9"].length))]
berapa2 = ["1","2","3","4","6","6","7","8","9"][Math.floor(Math.random() * (["1","2","3","4","6","6","7","8","9"].length))]
siapa1 = ["asep","Udin","Jamal","Wahyu","Putri","Jokowi","Mamak mu","Bapak mu","Ga ada","Nenek mu","Pacarmu","Megawaty","Tetangga mu"][Math.floor(Math.random() * (["asep","Udin","Jamal","Wahyu","Putri","Jokowi","Mamak mu","Bapak mu","Ga ada","Nenek mu","Pacarmu","Megawaty","Tetangga mu"].length))]
kapan1 = ["Kemaren","Besok","Lusa","Ga bakal","1 tahun lagi","2 tahun lagi","3 tahun lagi","1 bulan lagi","2 bulan lagi","3 bulan lagi","minggu depan"][Math.floor(Math.random() * (["Kemaren","Besok","Lusa","Ga bakal","1 tahun lagi","2 tahun lagi","3 tahun lagi","1 bulan lagi","2 bulan lagi","3 bulan lagi","minggu depan"].length))]
dimana1 = ["Di hatimu","jakarta","Makassar","lampung","kampung sebelah","Rumah mantan mu","Negara sebelah","Neraka","Surga","bogor","Kalimantan","papua","konoha","kuburan"][Math.floor(Math.random() * (["Di hatimu","jakarta","Makassar","lampung","kampung sebelah","Rumah mantan mu","Negara sebelah","Neraka","Surga","bogor","Kalimantan","papua","konoha","kuburan"].length))]
apakah1 = ["Iya","Ngak","Ndak tau","Mungkin"][Math.floor(Math.random() * (["Iya","Ngak","Ndak tau","Mungkin"].length))]
if (command == "berapa") {nayla.sendMessage(from, {sticker:{url:"./media/sticker/kerang.webp"}},{quoted: { key: { fromMe: false, participant: `${sender.split("@")[0]}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `> *JAWABAN* : ${berapa1 + berapa2}\n` + `> *BERAPA* : ${q}`} } }})}
if (command == "siapa") {nayla.sendMessage(from, {sticker:{url:"./media/sticker/kerang.webp"}},{quoted: { key: { fromMe: false, participant: `${sender.split("@")[0]}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `> *JAWABAN* : ${siapa1}\n` + `> *SIAPA* : ${q}`} } }})}
if (command == "kapan") {nayla.sendMessage(from, {sticker:{url:"./media/sticker/kerang.webp"}},{quoted: { key: { fromMe: false, participant: `${sender.split("@")[0]}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `> *JAWABAN* : ${kapan1}\n` + `> *KAPAN* : ${q}`} } }})}
if (command == "dimana") {nayla.sendMessage(from, {sticker:{url:"./media/sticker/kerang.webp"}},{quoted: { key: { fromMe: false, participant: `${sender.split("@")[0]}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `> *JAWABAN* : ${dimana1}\n` + `> *DIMANA* : ${q}`} } }})}
if (command == "apakah") {nayla.sendMessage(from, {sticker:{url:"./media/sticker/kerang.webp"}},{quoted: { key: { fromMe: false, participant: `${sender.split("@")[0]}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `> *JAWABAN* : ${apakah1}\n` + `> *APAKAH* : ${q}`} } }})}
break
case 'ytmp3': case 'ytaudio':
case 'ytmp4': case 'ytvideo':
reply("MAAF FITUR DOWNLOADER SEDANG DIPERBAIKI")
break
case 'ronaldo': case 'messi': case 'rashford': case 'mbappe': case 'ricardo': case 'oliver': case 'erling': case 'robert': case 'vinicius': case 'rodri': 
if (!isRegistered) return reply("ANDA BELUM TERDAFTAR DI DATABASE BOT, SILAHKAN KETIK " + `${prefix}daftar ` + "UNTUK BERGABUNG")
prosess("[❗] SEDANG DIPROSES")
ronaldo1 = `Cristiano Ronaldo dos Santos Aveiro GOIH ComM adalah seorang pemain sepak bola profesional asal Portugal yang bermain sebagai penyerang untuk klub Liga Inggris, Manchester United dan juga kapten untuk tim nasional Portugal. Wikipedia\nKelahiran: 5 Februari 1985 (usia 37 tahun), Hospital Dr. Nélio Mendonça, Funchal, Portugal\nTinggi: 1,87 m\nKebangsaan: Portugis\nGaji: 26,52 juta GBP (2022)\nPartner: Georgina Rodríguez (2017–)\nAnak: Cristiano Ronaldo Jr., Mateo Ronaldo, Alana Martina dos Santos Aveiro, lainnya\nNomor punggung: 7 (Juventus F.C. / Penyerang)`
messi1 = `Lionel Andrés Messi juga dikenal sebagai Leo Messi, adalah seorang pemain sepak bola profesional asal Argentina yang bermain sebagai penyerang untuk klub Ligue 1 Paris Saint-Germain dan merupakan kapten tim nasional Argentina. Wikipedia\nKelahiran: 24 Juni 1987 (usia 34 tahun), Rosario, Argentina\nTinggi: 1,69 m\nGaji: 41 juta USD (2022)\nPasangan: Antonella Roccuzzo (m. 2017)\nTim saat ini: Paris Saint-Germain F.C. (#30 / Penyerang), lainnya\nAnak: Mateo Messi Roccuzzo, Thiago Messi, Ciro Messi Roccuzzo`
rashford1 = `Marcus RasforMBE adalah seorang pemain sepak bola profesional untuk Manchester United dan tim nasional Inggris. asdadt mencetak dua gol pada pertandingan debutnya bersama tim senior menghadapi Midtjylland di UEFA Europa League. Dia juga mencetak gol melawan Arsenal saat debut di Premier League. Wikipedia\nKelahiran: 31 Oktober 1997 (usia 24 tahun), Manchester, Britania Raya\nTinggi: 1,8 m\nBerat: 70 kg\nGaji: 10,4 juta GBP (2022)\nTim saat ini: Manchester United F.C. (#10 / Penyerang), lainnya\nOrang tua: Robert Rashford, Melanie Rashford\nSaudara kandung: Dwaine Maynard, Chantelle Rashford, Dane Rashford, Tamara Rashford`
mbappe1 = `Kylian Mbappé Lottin adalah seorang pemain sepak bola profesional Prancis yang bermain sebagai penyerang untuk Paris Saint-Germain dan tim nasional Prancis. Wikipedia\nKelahiran: 20 Desember 1998 (usia 23 tahun), Arondisemen XIXe, Paris, Perancis\nTinggi: 1,78 m\nKebangsaan: Prancis\nBerat: 73 kg\nGaji: 22 juta EUR (2022)\nTim saat ini: Paris Saint-Germain F.C. (#7 / Penyerang), lainnya\nOrang tua: Fayza Lamari, Wilfried Mbappé`
ricardo1 = `Ricardo Izecson dos Santos Leite, lebih dikenal dengan nama Kaká atau Ricardo Kakà, adalah seorang pemain sepak bola asal Brasil yang kini membela klub Orlando City SC. Kaká memulai karier sepak bolanya pada usia delapan tahun. Wikipedia\nKelahiran: 22 April 1982 (usia 40 tahun), Gama, Distrik Federal, Brasil\nAkhir karier: 2017\nTinggi: 1,86 m\nNomor punggung: 22 (A.C. Milan / Penyerang), 8 (Real Madrid C.F. / Gelandang), lainnya\nPasangan: Carolina Dias (m. 2019), Caroline Celico (m. 2005–2015)\nAnak: Luca Celico Leite, Isabella Celico Leite, Esther Dias Leite`
oliver1 = `Oliver Bierhoff merupakan mantan pemain sepak bola berkebangsaan Jerman. Dia pernah membela klub utamanya seperti Bayer Uerdingen, Hamburger SV, Borussia Mönchengladbach, Austria Salzburg, Ascoli Calcio, Udinese Calcio, AC Milan, AS Monaco, dan Chievo Verona. Di timnas Jerman, dia bermain 70 kali dan mencetak 37 gol. Wikipedia\nKelahiran: 1 Mei 1968 (usia 53 tahun), Karlsruhe, Jerman\nTinggi: 1,91 m\nPasangan: Klara Szalantzy (m. 2001)\nNomor punggung: 20 (AS Monaco FC / Penyerang)\nTanggal bergabung: 2002 (A.C. ChievoVerona), 2001 (AS Monaco FC), 1998 (A.C. Milan), lainnya\nOrang tua: Rolf Bierhoff, Silvie Bierhoff\nSaudara kandung: Nicole Bierhoff`
erling1 = `Erling Braut Haaland adalah pemain sepak bola profesional Norwegia yang bermain sebagai striker untuk klub Jerman Borussia Dortmund dan tim nasional Norwegia. Haaland memulai kariernya di klub kota asalnya Bryne FK pada 2016, dan pindah ke Molde FK tahun berikutnya selama dua tahun. Wikipedia\nKelahiran: 21 Juli 2000 (usia 21 tahun), Leeds, Britania Raya\nKebangsaan: Norwegia\nTinggi: 1,94 m\nBerat: 88 kg\nTim saat ini: Borussia Dortmund (#9 / Penyerang), lainnya\nTanggal bergabung: 2020 (Borussia Dortmund), 2019 (FC Red Bull Salzburg), 2017 (Molde FK), lainnya\nOrang tua: Alf-Inge Haaland, Gry Marita Braut`
robert1 = `Robert Lewandowski adalah pemain sepak bola Polandia yang pernah bermain sebagai penyerang pada klub Bundesliga Jerman, Borrusia Dortmund dan merupakan kapten tim nasional Polandia. Dan sekarang bermain sebagai penyerang pada klub FC Bayern München. Wikipedia\nKelahiran: 21 Agustus 1988 (usia 33 tahun), Warsawa, Polandia\nKebangsaan: Polandia\nTinggi: 1,85 m\nGaji: 23 juta EUR (2022)\nPasangan: Anna Stachurska (m. 2013)\nTim saat ini: Tim nasional sepak bola Polandia (#9 / Penyerang), lainnya\nAnak: Klara Lewandowska, Laura Lewandowska`
vinicius1 = `Vinícius José Paixão de Oliveira Júnior, biasa dikenal sebagai Vinícius Júnior atau Vini Jr., adalah seorang pemain sepak bola profesional asal Brasil yang bermain sebagai pemain sayap untuk klub Spanyol Real Madrid dan tim nasional Brasil. Wikipedia\nKelahiran: 12 Juli 2000 (usia 21 tahun), São Gonçalo, Rio de Janeiro, Brasil\nTinggi: 1,76 m\nKebangsaan: Brasil\nOrang tua: Vinícius José Paixão de Oliveira\nTim saat ini: Tim nasional sepak bola Brasil (#18 / Penyerang),`
rodri1 = `Rodrigo Hernández Cascante, lebih dikenal sebagai Rodri atau Rodrigo, adalah seorang pemain sepak bola profesional asal Spanyol yang bermain sebagai gelandang bertahan untuk klub Liga Utama Inggris, Manchester City dan tim nasional Spanyol. Wikipedia\nKelahiran: 22 Juni 1996 (usia 25 tahun), Madrid, Spanyol\nTinggi: 1,91 m\nNama lengkap: Rodrigo Hernández Cascante\nTahun: Tim\nTim saat ini: Manchester City F.C. (#16 / Gelandang), lainnya\nTanggal bergabung: 2019 (Manchester City F.C.), 2018 (Club Atlético de Madrid), lainnya\nRodrigo Hernández Cascante (lahir 22 Juni 1996)`
rodri2 = "https://i.pinimg.com/736x/cc/29/12/cc2912b72df482d38930f8f292baac6f.jpg"
vinicius2 = "https://i.pinimg.com/736x/ed/f3/7f/edf37fb76de79b506e33a9fa39d71e06.jpg"
robert2 = "https://i.pinimg.com/736x/d9/6e/98/d96e9874db1f939db82eeb8042f13260.jpg"
erling2 = "https://i.pinimg.com/736x/4d/d5/24/4dd524724bfa32fe659529e8d6a43276.jpg"
oliver2 = "https://i.pinimg.com/736x/65/d1/ef/65d1ef2d81577bec971ce05136fb6725.jpg"
ricardo2 = "https://i.pinimg.com/736x/7a/f2/a1/7af2a1fdbbbabac474d7e698eade87b8.jpg"
mbappe2 = "https://i.pinimg.com/736x/4e/2f/46/4e2f46636f6f975baaa74ea2ae13274e.jpg"
rashford2 = "https://i.pinimg.com/736x/8d/b7/c2/8db7c2e136416d8d4ee906410ee036c5.jpg"
ronaldo2 = "https://i.pinimg.com/736x/6d/a3/fa/6da3fac08a99a4d9c7137d83a17c581b.jpg"
messi2 = "https://i.pinimg.com/736x/7c/94/cc/7c94ccde6ccb51fab9200da12b4ea180.jpg"
if (command == "ronaldo") return nayla.sendMessage(from, {image:{url: ronaldo2 }, caption:ronaldo1})  
if (command == "rodri") return nayla.sendMessage(from, {image:{url: rodri2 }, caption:rodri1})  
if (command == "vinicius") return nayla.sendMessage(from, {image:{url: vinicius2 }, caption:vinicius1})  
if (command == "robert") return nayla.sendMessage(from, {image:{url: robert2 }, caption:robert1})  
if (command == "erling") return nayla.sendMessage(from, {image:{url: erling2 }, caption:erling1})  
if (command == "oliver") return nayla.sendMessage(from, {image:{url: oliver2 }, caption:oliver1})  
if (command == "ricardo") return nayla.sendMessage(from, {image:{url: ricardo2 }, caption:ricardo1})  
if (command == "mbappe") return nayla.sendMessage(from, {image:{url: mbappe2 }, caption:mbappe1})  
if (command == "rashford") return nayla.sendMessage(from, {image:{url: rashford2 }, caption:rashford1})  
if (command == "messi") return nayla.sendMessage(from, {image:{url: messi2 }, caption:messi1}) 
break
default: 
Object.keys(officeruser).forEach((i) => {
if (budy.includes(`@${officeruser[i].id.split('@')[0]}`)){
const menti0on = nay.message.extendedTextMessage.contextInfo.mentionedJid
if (officeruser[i].id == menti0on) {
nayla.sendMessage(from, {sticker: {url:`./media/sticker/${officeruser[i].officer}.webp`}}, {quoted: { key: { fromMe: false, participant: sender, ...({}) }, message: { "extendedTextMessage": { "text": `STOP TAG TAG [ 🤬 ]`} } }})
}}})

if (budy.includes("@")){
if (!isAntitag) return
nayla.sendMessage(from, {sticker : anti}, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `STOP TAG TAG [ 🤬 ]`} } }}) 	
}            
if (budy.includes("https://")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`ADMIN😎💪`)
var Kick = `${sender.split("@")[0]}@s.whatsapp.net` 
setTimeout( () => {
nayla.groupParticipantsUpdate(from, [Kick],"remove")
}, 1000)
setTimeout( () => {
nayla.sendMessage(from, {sticker : anti}, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `ANTILINK [ ON ]`} } }}) 	
}, 0)
}
if (txt.length > 1500){
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return reply(`ADMIN😎💪`)
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
nayla.groupParticipantsUpdate(from, [kic],"remove")
}, 0)
}
}
} catch (e) {
console.log(`${e}`) 
}
}