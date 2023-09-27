let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*mensagem:* ${pesan}`
let teks = `_${wm} • marcando todos do grupo._\n\n${oi}\n\n`
for (let mem of participants) {
teks += `@${mem.id.split('@')[0]} • `}
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )  
}
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
