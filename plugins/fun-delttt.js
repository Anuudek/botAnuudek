let MessageType = (await import(global.baileys)).default
let handler = async (m, { conn, usedPrefix, command }) => {
/*const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}  */

let room = Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (room == undefined) return await conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}você não está em nenhuma partida de jogo da velha.\n\n💫 𝙄𝙉𝙄𝘾𝙄𝘼𝙍 𝙋𝘼𝙍𝙏𝙄𝘿𝘼: (${usedPrefix}ttt sala nomedasala)`, m)
delete conn.game[room.id]

await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()}a sala de jogo da velha foi excluída.`, m)}
handler.command = /^(delttt|deltt|delxo|deltictactoe)$/i
handler.fail = null
export default handler
