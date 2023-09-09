import fetch from 'node-fetch'
import Spotify from "spotifydl-x"
import fs from 'fs'
let handler = async(m, { conn, usedPrefix, command, text }) => {
let frep = { contextInfo: { externalAdReply: {title: wm, body: author, sourceUrl: redesMenu.getRandom(), thumbnail: await(await fetch(gataMenu.getRandom())).buffer() }}}
if (!text) return await conn.reply(m.chat, `${lenguajeGB.smsMalused2()} -> _${usedPrefix + command} a tua mesa cura_`, m)
try {
let resDL = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkeysapi}&query=${text}`)
let jsonDL = await resDL.json()
let linkDL = jsonDL.result[0].link
let spty = await spotifydl(linkDL)
const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`}
let randomName = getRandom(".mp3")
const filePath = `./tmp/${randomName}`
fs.writeFileSync(filePath, spty.audio)
let spotifyi = `✨ *TÍTULO:*
_${spty.data.name}_

🗣️ *ARTISTA:*
» _${spty.data.artists}_

🌐 *LINK DO SPOTIFY*:
» _${linkDL}_

🎶 *Enviando música...*
${wm}`
await conn.sendFile(m.chat, spty.data.cover_url, 'error.jpg', spotifyi, m)
await conn.sendMessage(m.chat, { audio: fs.readFileSync(`./tmp/${randomName}`), fileName: `${spty.data.name}.mp3`, mimetype: "audio/mp4", }, { quoted: m })    
} catch (e) {
await conn.reply(m.chat, `${lenguajeGB['smsMalError3']()}#report ${usedPrefix + command}\n\n${wm}`, m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
handler.limit = false
}}
handler.command = /^(spotify|music|song)$/i
handler.limit = 1
handler.level = 0
export default handler

const credentials = { clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3', clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009' }
const spotify = new Spotify.default(credentials)
async function spotifydl(url) {
const res = await spotify.getTrack(url).catch(() => {
return { error: 'O download falhou.' }})
return { data: res, audio: await spotify.downloadTrack(url) }}
