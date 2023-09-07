let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `${lenguajeGB['smsAvisoMG']()}coloque o @ do usuário para baixar os stories. por exemplo:\n_${usedPrefix + command} carlosdmoreira_`
await m.reply(global.wait)    
const res = await fetch(`https://api.lolhuman.xyz/api/igstory/${args[0]}?apikey=${lolkeysapi}`)
var anu = await res.json()
var anuku = anu.result
if (anuku == '') return m.reply(`${lenguajeGB['smsAvisoFG']()}esse usuário é inválido ou não tem stories.`)  
for (var i of anuku) {
let res = await axios.head(i)
let mime = res.headers['content-type']
if (/image/.test(mime)) await conn.sendFile(m.chat, i, 'error.jpg', null, m).catch(() => { return m.reply(`${lenguajeGB['smsAvisoFG']()}esse usuário é inválido ou não tem stories.`)})
if (/video/.test(mime)) await conn.sendFile(m.chat, i, 'error.mp4', null, m).catch(() => { return m.reply(`${lenguajeGB['smsAvisoFG']()}esse usuário é inválido ou não tem stories.`)})
}}
handler.help = ['igstory <username>']
handler.tags = ['downloader']
handler.command = ['igstory']
handler.limit = 3
handler.exp = 87
export default handler
