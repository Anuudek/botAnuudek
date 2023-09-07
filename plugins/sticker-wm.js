import { addExif } from '../lib/sticker.js'

let handler = async (m, { conn, text }) => {
	if (!m.quoted) throw 'uso incorreto do comando. dê reply em algum sticker que você quer renomar com o nome do pacote e nome. exemplo de uso:\n_.wm memes|carlos_'
	let stiker = false
	
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) throw 'uso incorreto do comando. dê reply em algum sticker que você quer renomar com o nome do pacote e nome. exemplo de uso:\n_.wm memes|carlos_'
let img = await m.quoted.download()
if (!img) throw 'uso incorreto do comando. dê reply em algum sticker que você quer renomar com o nome do pacote e nome. exemplo de uso:\n_.wm memes|carlos_'
stiker = await addExif(img, packname || '', author || '')
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: `h`, mediaType: 2, sourceUrl: nn, thumbnail: imagen1}}}, { quoted: m })
else throw 'uso incorreto do comando. dê reply em algum sticker que você quer renomar com o nome do pacote e nome. exemplo de uso:\n_.wm memes|carlos_'
}}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^wm$/i
export default handler