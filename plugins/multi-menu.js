import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch' 
let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
try{
const { levelling } = '../lib/levelling.js'
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)

let d = new Date(new Date + 3600000)
let locale = 'pt'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money } = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),

exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,

level, limit, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
  
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let user = global.db.data.users[m.sender]
//user.registered = false

let pp = gataVidMenu.getRandom()
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let fsizedoc = '1'.repeat(10)
let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: wm, body: '👋 ' + username, mediaUrl: ig, description: 'Hola', previewType: 'PHOTO', thumbnail: await(await fetch(gataMenu.getRandom())).buffer(), sourceUrl: redesMenu.getRandom() }}}


if (command == 'audioefectomenu'){ //audio
let menuA = `🎧 ${lenguajeGB['smsConfi2']()} *${username}*`.trim()
let menuB = `╭┄〔 *${wm}* 〕┄⊱
┊დ *${week}, ${date}*
┊დ *${lenguajeGB['smsBotonM4']()} » ${Object.keys(global.db.data.users).length}* 
┊
┊დ *${lenguajeGB['smsBotonM5']()} »* ${role}
┊დ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊დ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '✅' : '❌'}
╰┄┄┄┄〔 *𓃠 ${vs}* 〕┄┄┄┄⊱

⠇ ${lenguajeGB['smsTex2']()} 🧰
• _${usedPrefix}bass_
• _${usedPrefix}blown_
• _${usedPrefix}deep_
• _${usedPrefix}earrape_
• _${usedPrefix}fast_
• _${usedPrefix}fat_
• _${usedPrefix}nightcore_
• _${usedPrefix}reverse_
• _${usedPrefix}robot_
• _${usedPrefix}slow_
• _${usedPrefix}smooth_
• _${usedPrefix}tupai_
`.trim()
await conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)

  
} if (command == 'buscarmenu'){ //buscador
let menuA = `🎈 ${lenguajeGB['smsConfi2']()} *${username}*`.trim()
let menuB = `╭┄〔 *${wm}* 〕┄⊱
┊დ *${week}, ${date}*
┊დ *${lenguajeGB['smsBotonM4']()} » ${Object.keys(global.db.data.users).length}* 
┊
┊დ *${lenguajeGB['smsBotonM5']()} »* ${role}
┊დ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊დ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '✅' : '❌'}
╰┄┄┄┄〔 *𓃠 ${vs}* 〕┄┄┄┄⊱
⠇ ${lenguajeGB['smsTex1']()} 🔍
• _${usedPrefix}animeinfo *texto*_
• _${usedPrefix}mangainfo *texto*_
• _${usedPrefix}google *texto*_
• _${usedPrefix}letra | lirik *texto*_
• _${usedPrefix}ytsearch | yts *texto*_
• _${usedPrefix}wiki | wikipedia *texto*_
`.trim()

await conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)

  
} if (command == 'convertidormenu'){ //convertidor
let menuA = `📍 ${lenguajeGB['smsConfi2']()} *${username}*`.trim()
let menuB = `╭┄〔 *${wm}* 〕┄⊱
┊დ *${week}, ${date}*
┊დ *${lenguajeGB['smsBotonM4']()} » ${Object.keys(global.db.data.users).length}* 
┊
┊დ *${lenguajeGB['smsBotonM5']()} »* ${role}
┊დ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊დ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '✅' : '❌'}
╰┄┄┄┄〔 *𓃠 ${vs}* 〕┄┄┄┄⊱
⠇ ${lenguajeGB['smsTex8']()} 🛰️
• _${usedPrefix}toimg | img | jpg *sticker*_
• _${usedPrefix}tomp3 | mp3 *video o nota de voz*_
• _${usedPrefix}tovn | vn *video o audio*_
• _${usedPrefix}tovideo *audio*_
• _${usedPrefix}tourl *video, imagen*_
• _${usedPrefix}toenlace  *video, imagen o audio*_
• _${usedPrefix}tts es *texto*_
`.trim()
await conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)  

  
} if (command == 'menudownloads'){ //descargas
let menu = `*comandos de downloads*

• ${usedPrefix}yta + link
_baixa algum vídeo do youtube e o converte em áudio._

• ${usedPrefix}ytv + link
_baixa algum vídeo do youtube._

• ${usedPrefix}tt + link
_baixa algum conteúdo do twitter._

• ${usedPrefix}music + nome da música
_baixa alguma música através da plataforma do spotify._

• ${usedPrefix}fb + link
_baixa algum conteúdo do facebook._

• ${usedPrefix}ig + link
_baixa algum conteúdo do instagram._

• ${usedPrefix}igstory + usuário
_baixa os stories de algum usuário do instagram._

• ${usedPrefix}tiktok + link
_baixa algum conteúdo do tiktok._
`.trim()
await conn.reply(m.chat, menu, m)
}

  if (command == 'brincadeiras'){ //fun
let menu = `*comandos fun*

• ${usedPrefix}ttt + nome da sala
_abrir uma sala para jogar jogo da velha_
`.trim()
await conn.reply(m.chat, menu, m)
}

  if (command == 'menuadm'){ //grupo
let menu = `*comandos de grupo*

• ${usedPrefix}add + número
• ${usedPrefix}ban | kick + @tag ou responder mensagem
• ${usedPrefix}group + open | close
• ${usedPrefix}promote + @tag
• ${usedPrefix}demote + @tag
• ${usedPrefix}banchat
• ${usedPrefix}unbanchat
• ${usedPrefix}banuser + @tag
• ${usedPrefix}unbanuser + @tag
• ${usedPrefix}admins + texto
• ${usedPrefix}tagall + texto
• ${usedPrefix}hidetag + texto
• ${usedPrefix}infogroup
• ${usedPrefix}grouptime + tempo
• ${usedPrefix}warn + @tag
• ${usedPrefix}delwarn + @tag
• ${usedPrefix}startvoto + texto
• ${usedPrefix}upvote
• ${usedPrefix}devote
• ${usedPrefix}vervotos
• ${usedPrefix}delvoto | deletevoto
• ${usedPrefix}link
• ${usedPrefix}newnombre + texto
• ${usedPrefix}newdesc + texto
• ${usedPrefix}setwelcome + texto
• ${usedPrefix}setbye + texto
• ${usedPrefix}resetlink
• ${usedPrefix}on
• ${usedPrefix}off
`.trim()
await conn.reply(m.chat, menu, m)
}

  if (command == 'herramientasmenu'){ //herramientas
let menuA = `🔩 ${lenguajeGB['smsConfi2']()} *${username}*`.trim()
let menuB = `╭┄〔 *${wm}* 〕┄⊱
┊დ *${week}, ${date}*
┊დ *${lenguajeGB['smsBotonM4']()} » ${Object.keys(global.db.data.users).length}* 
┊
┊დ *${lenguajeGB['smsBotonM5']()} »* ${role}
┊დ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊დ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '✅' : '❌'}
╰┄┄┄┄〔 *𓃠 ${vs}* 〕┄┄┄┄⊱
⠇ ${lenguajeGB['smsTex12']()} 🛠️
• _${usedPrefix}afk *motivo*_
• _${usedPrefix}acortar *url*_
• _${usedPrefix}calc *operacion math*_
• _${usedPrefix}del *respondre a mensaje del Bot*_
• _${usedPrefix}qrcode *texto*_
• _${usedPrefix}readmore *texto1|texto2*_
• _${usedPrefix}spamwa *numero|texto|cantidad*_
• _${usedPrefix}styletext *texto*_
• _${usedPrefix}traducir *texto*_
• _${usedPrefix}morse codificar *texto*_
• _${usedPrefix}morse decodificar *morse*_
• _${usedPrefix}encuesta | poll *Motivo*_
• _${usedPrefix}horario_
`.trim()
await conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)

 
} if (command == 'infomenu'){ //info
let menuA = `🌟 ${lenguajeGB['smsConfi2']()} *${username}*`.trim()
let menuB = `╭┄〔 *${wm}* 〕┄⊱
┊დ *${week}, ${date}*
┊დ *${lenguajeGB['smsBotonM4']()} » ${Object.keys(global.db.data.users).length}* 
┊
┊დ *${lenguajeGB['smsBotonM5']()} »* ${role}
┊დ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊დ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '✅' : '❌'}
╰┄┄┄┄〔 *𓃠 ${vs}* 〕┄┄┄┄⊱
⠇ ${lenguajeGB['smsTex13']()} 💫
• _${usedPrefix}cuentasgatabot | cuentasgb_
• _${usedPrefix}gruposgb | grupos | groupgb_
• _${usedPrefix}donar | donate_
• _${usedPrefix}listagrupos | grouplist_
• _${usedPrefix}estado | heygata | status_
• _${usedPrefix}infogata | infobot_
• _${usedPrefix}instalarbot | installbot_
• _${usedPrefix}creadora | owner_
• _${usedPrefix}velocidad | ping_
• _${usedPrefix}serbot | jadibot_
• _${usedPrefix}bots | listjadibots_
• _${usedPrefix}detener | stop_
• _${usedPrefix}reporte *texto*_
∘ _términos y condiciones_
∘ _Bot_ 
`.trim()
await conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)

  
} if (command == 'makermenu'){ //maker
let menuA = `✨ ${lenguajeGB['smsConfi2']()} *${username}*`.trim()
let menuB = `╭┄〔 *${wm}* 〕┄⊱
┊დ *${week}, ${date}*
┊დ *${lenguajeGB['smsBotonM4']()} » ${Object.keys(global.db.data.users).length}* 
┊
┊დ *${lenguajeGB['smsBotonM5']()} »* ${role}
┊დ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊დ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '✅' : '❌'}
╰┄┄┄┄〔 *𓃠 ${vs}* 〕┄┄┄┄⊱
⠇ ${lenguajeGB['smsTex14']()} ⛺
• _${usedPrefix}logos *efecto texto*_
• _${usedPrefix}simpcard *@tag*_
• _${usedPrefix}hornycard *@tag*_
• _${usedPrefix}lolice *@tag*_
• _${usedPrefix}ytcomment *texto*_
• _${usedPrefix}itssostupid_
• _${usedPrefix}pixelar_
• _${usedPrefix}blur_
`.trim()
await conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)

  
} if (command == 'menulogos2'){ //marker
let menuA = `⛲ ${lenguajeGB['smsConfi2']()} *${username}*`.trim()
let menuB = `╭┄〔 *${wm}* 〕┄⊱
┊დ *${week}, ${date}*
┊დ *${lenguajeGB['smsBotonM4']()} » ${Object.keys(global.db.data.users).length}* 
┊
┊დ *${lenguajeGB['smsBotonM5']()} »* ${role}
┊დ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊დ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '✅' : '❌'}
╰┄┄┄┄〔 *𓃠 ${vs}* 〕┄┄┄┄⊱
⠇ ${lenguajeGB['smsTex15']()} 🌅
∘ ${usedPrefix}logocorazon *Texto*
∘ ${usedPrefix}3dtext *Texto*
∘ ${usedPrefix}angels *Texto*
∘ ${usedPrefix}batshalloween *Texto*
∘ ${usedPrefix}bear2 *Texto*
∘ ${usedPrefix}boom *Texto*
∘ ${usedPrefix}graffiticartoon *Texto*
∘ ${usedPrefix}girlgamer *Texto*
∘ ${usedPrefix}firework *Texto*
∘ ${usedPrefix}gold *Texto*
∘ ${usedPrefix}handlove *Texto*
∘ ${usedPrefix}heartcup *Texto*
∘ ${usedPrefix}heartflashlight *Texto*
∘ ${usedPrefix}birthdaycake *Texto*
∘ ${usedPrefix}birthdaycake2 *Texto*
∘ ${usedPrefix}birthdaycake3 *Texto*
∘ ${usedPrefix}facebooksilverplay *Texto*
∘ ${usedPrefix}facebooksilverplay2 *Texto*
∘ ${usedPrefix}neonsantin *Texto*
∘ ${usedPrefix}womenday *Texto*
∘ ${usedPrefix}summerysand *Texto*
∘ ${usedPrefix}wetglass *Texto*
∘ ${usedPrefix}mylove *Texto*
∘ ${usedPrefix}pikachu *Texto*
∘ ${usedPrefix}logochristmas *Texto*
∘ ${usedPrefix}cardchristmas *Texto*
∘ ${usedPrefix}flowercard *Texto*
`.trim()
await conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)

  
} if (command == 'menudono'){ //propietario(a)
let menu = `*comandos de owner*

• _${usedPrefix}join *enlace*_
• _${usedPrefix}unete *enlace*_
• _${usedPrefix}dardiamantes *cantidad*_
• _${usedPrefix}darxp *cantidad*_
• _${usedPrefix}dargatacoins *cantidad*_
• _${usedPrefix}addprem | userpremium *@tag* *cantidad*_
• _${usedPrefix}addprem2 | userpremium2 *@tag* *cantidad*_
• _${usedPrefix}addprem3 | userpremium3 *@tag* *cantidad*_
• _${usedPrefix}addprem4 | userpremium4 *@tag* *cantidad*_
• _${usedPrefix}idioma | language *código*_
• _${usedPrefix}cajafuerte_
• _${usedPrefix}comunicar | broadcastall | bc *texto*_
• _${usedPrefix}broadcastchats | bcc *texto*_
• _${usedPrefix}comunicarpv *texto*_
• _${usedPrefix}broadcastgc *texto*_
• _${usedPrefix}comunicargrupos *texto*_
• _${usedPrefix}borrartmp | cleartmp_
• _${usedPrefix}delexp *@tag*_
• _${usedPrefix}delgatacoins *@tag*_
• _${usedPrefix}deldiamantes *@tag*_
• _${usedPrefix}reiniciar | restart_
• _${usedPrefix}ctualizar | update_
• _${usedPrefix}addprem | +prem *@tag*_
• _${usedPrefix}delprem | -prem *@tag*_
• _${usedPrefix}listapremium | listprem_
• _${usedPrefix}añadirdiamantes *@tag cantidad*_
• _${usedPrefix}añadirxp *@tag cantidad*_
• _${usedPrefix}añadirgatacoins *@tag cantidad*_
`.trim()
await conn.reply(m.chat, menu, m)
} 

if (command == 'randommenu'){ //randomm
let menuA = `⛩️ ${lenguajeGB['smsConfi2']()} *${username}*`.trim()
let menuB = `╭┄〔 *${wm}* 〕┄⊱
┊დ *${week}, ${date}*
┊დ *${lenguajeGB['smsBotonM4']()} » ${Object.keys(global.db.data.users).length}* 
┊
┊დ *${lenguajeGB['smsBotonM5']()} »* ${role}
┊დ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊დ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '✅' : '❌'}
╰┄┄┄┄〔 *𓃠 ${vs}* 〕┄┄┄┄⊱
⠇ ${lenguajeGB['smsTex23']()} 🧩
• _${usedPrefix}chica_
• _${usedPrefix}chico_
• _${usedPrefix}cristianoronaldo_
• _${usedPrefix}messi_
• _${usedPrefix}meme_
• _${usedPrefix}meme2_
• _${usedPrefix}itzy_
• _${usedPrefix}blackpink_
• _${usedPrefix}kpop *blackpink : exo : bts*_
• _${usedPrefix}lolivid_
• _${usedPrefix}loli_
• _${usedPrefix}navidad_
• _${usedPrefix}ppcouple_
• _${usedPrefix}neko_
• _${usedPrefix}waifu_
• _${usedPrefix}akira_
• _${usedPrefix}akiyama_
• _${usedPrefix}anna_
• _${usedPrefix}asuna_
• _${usedPrefix}ayuzawa_
• _${usedPrefix}boruto_
• _${usedPrefix}chiho_
• _${usedPrefix}chitoge_
• _${usedPrefix}deidara_
• _${usedPrefix}erza_
• _${usedPrefix}elaina_
• _${usedPrefix}eba_
• _${usedPrefix}emilia_
• _${usedPrefix}hestia_
• _${usedPrefix}hinata_
• _${usedPrefix}inori_
• _${usedPrefix}isuzu_
• _${usedPrefix}itachi_
• _${usedPrefix}itori_
• _${usedPrefix}kaga_
• _${usedPrefix}kagura_
• _${usedPrefix}kaori_
• _${usedPrefix}keneki_
• _${usedPrefix}kotori_
• _${usedPrefix}kurumi_
• _${usedPrefix}madara_
• _${usedPrefix}mikasa_
• _${usedPrefix}miku_
• _${usedPrefix}minato_
• _${usedPrefix}naruto_
• _${usedPrefix}nezuko_
• _${usedPrefix}sagiri_
• _${usedPrefix}sasuke_
• _${usedPrefix}sakura_
• _${usedPrefix}cosplay_
`.trim()
await conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)

  
} if (command == 'rpgmenu'){ //rpg
let menuA = `🪅 ${lenguajeGB['smsConfi2']()} *${username}*`.trim()
let menuB = `╭┄〔 *${wm}* 〕┄⊱
┊დ *${week}, ${date}*
┊დ *${lenguajeGB['smsBotonM4']()} » ${Object.keys(global.db.data.users).length}* 
┊
┊დ *${lenguajeGB['smsBotonM5']()} »* ${role}
┊დ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊დ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '✅' : '❌'}
╰┄┄┄┄〔 *𓃠 ${vs}* 〕┄┄┄┄⊱
⠇ ${lenguajeGB['smsTex21']()} ⚗️
• _${usedPrefix}botemporal *enlace* *cantidad*_
• _${usedPrefix}addbot *enlace* *cantidad*_
• _${usedPrefix}pase premium_
• _${usedPrefix}pass premium_
• _${usedPrefix}listapremium | listprem_
• _${usedPrefix}transfer *tipo cantidad @tag*_
• _${usedPrefix}dar *tipo cantidad @tag*_
• _${usedPrefix}enviar *tipo cantidad @tag*_
• _${usedPrefix}balance_
• _${usedPrefix}cartera | wallet_
• _${usedPrefix}experiencia | exp_
• _${usedPrefix}top | lb | leaderboard_
• _${usedPrefix}nivel | level | lvl_
• _${usedPrefix}rol | rango_
• _${usedPrefix}inventario | inventory_
• _${usedPrefix}listaparejas | listship_
• _${usedPrefix}mipareja | mylove_
• _${usedPrefix}pareja | couple *@tag*_
• _${usedPrefix}aceptar | accept *@tag*_
• _${usedPrefix}rechazar | decline *@tag*_
• _${usedPrefix}terminar | finish *@tag*_
• _${usedPrefix}aventura | adventure_
• _${usedPrefix}caza | cazar | hunt_
• _${usedPrefix}pescar | fishing_
• _${usedPrefix}animales_
• _${usedPrefix}alimentos_
• _${usedPrefix}curar | heal_
• _${usedPrefix}buy_
• _${usedPrefix}sell_
• _${usedPrefix}verificar | registrar_
• _${usedPrefix}perfil | profile_
• _${usedPrefix}myns_
• _${usedPrefix}unreg *numero de serie*_
• _${usedPrefix}minardiamantes | minargemas_
• _${usedPrefix}minargatacoins | minarcoins_
• _${usedPrefix}minarexperiencia | minarexp_
• _${usedPrefix}minar *:* minar2 *:* minar3_
• _${usedPrefix}reclamar | regalo | claim_
• _${usedPrefix}cadahora | hourly_
• _${usedPrefix}cadasemana | semanal | weekly_
• _${usedPrefix}cadames | mes | monthly_
• _${usedPrefix}cofre | abrircofre | coffer_
• _${usedPrefix}trabajar | work_
`.trim()
await conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)


} if (command == 'menustickers'){ //sticker
let menu = `*comandos de stickers*

• ${usedPrefix}sticker | ${usedPrefix}s
_envie esse comando com uma imagem/vídeo ou dê reply para criar um sticker._

• ${usedPrefix}emojimix *😃+😅*
_irá misturar dois emojis e gerar um sticker._

• ${usedPrefix}semoji 🤔
_use esse comando para criar um sticker de algum emoji_

• _${usedPrefix}wm *autor|nomedopacote*_
_use esse comando dando reply em algum sticker para você configurar o nome do pack e autor da figurinha._

• _${usedPrefix}toimg_
_dê reply utilizando esse comando em algum sticker para transforma-lo em uma imagem._`.trim()
await conn.reply(m.chat, menu, m)
} 
} catch (e) {
await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}
}
handler.help = ['infomenu'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = ['audioefectomenu', 'buscarmenu', 'convertidormenu', 'menudownloads', 'brincadeiras', 'menuadm',
'herramientasmenu', 'infomenu', 'makermenu', 'menulogos2', 'menudono', 'randommenu', 'rpgmenu', 'menustickers'] 
//handler.register = true
handler.exp = 50
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
