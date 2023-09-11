let WAMessageStubType = (await import(global.baileys)).default
export async function before(m, { conn, participants}) {
if (!m.messageStubType || !m.isGroup) return
let usuario = `@${m.sender.split`@`[0]}`
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let users = participants.map(u => conn.decodeJid(u.id))
if (m.messageStubType == 21) {
await this.sendMessage(m.chat, { text: `${usuario} trocou o nome do grupo para: *${m.messageStubParameters[0]}*`, mentions: [m.sender]/*, mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id)*/ }, { quoted: m.fkontak }) 
} else if (m.messageStubType == 22) {
await this.sendMessage(m.chat, { text: `${usuario} trocou a foto do grupo.`, mentions: [m.sender] }, { quoted: m.fkontak }) 
} else if (m.messageStubType == 24) {
await this.sendMessage(m.chat, { text: `${usuario} trocou a descrição do grupo para:\n\n${m.messageStubParameters[0]}`, mentions: [m.sender] }, { quoted: m.fkontak })
} else if (m.messageStubType == 25) {
await this.sendMessage(m.chat, { text: `agora *${m.messageStubParameters[0] == 'on' ? 'apenas administradores' : 'todos'}* podem editar as informações do grupo.`, mentions: [m.sender] }, { quoted: m.fkontak })
} else if (m.messageStubType == 26) {
await this.sendMessage(m.chat, { text: `o grupo agora está *${m.messageStubParameters[0] == 'on' ? 'fechado. 🔒*' : 'aberto*. 🔓'}\n ${m.messageStubParameters[0] == 'on' ? 'somente os administradores podem enviar mensagens' : 'todos podem enviar mensagens'} no grupo.`, mentions: [m.sender] }, { quoted: m.fkontak })
} else if (m.messageStubType == 29) {
await this.sendMessage(m.chat, { text: `@${m.messageStubParameters[0].split`@`[0]} virou administrador do grupo! :D\n\nação realizada por: ${usuario}`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`]/*, mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id)*/ }, { quoted: m.fkontak })
} else if (m.messageStubType == 30) {
await this.sendMessage(m.chat, { text: `@${m.messageStubParameters[0].split`@`[0]} não é mais administrador do grupo. :(\n\nação realizada por: ${usuario}`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`]/*, mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id)*/ }, { quoted: m.fkontak })
} else if (m.messageStubType == 72) {
await this.sendMessage(m.chat, { text: `${usuario} alterou a duração das mensagens temporárias para: *@${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: m.fkontak })
} else if (m.messageStubType == 123) {
await this.sendMessage(m.chat, { text: `${usuario} *desativou* as mensagens temporárias.`, mentions: [m.sender] }, { quoted: m.fkontak })
} else {
console.log({messageStubType: m.messageStubType,
messageStubParameters: m.messageStubParameters,
type: WAMessageStubType[m.messageStubType], 
})}}
