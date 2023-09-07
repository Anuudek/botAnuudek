import TicTacToe from '../lib/tictactoe.js' 
let handler = async (m, { conn, usedPrefix, command, text }) => {
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
}*/

conn.game = conn.game ? conn.game : {}
if (Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw `${lenguajeGB['smsAvisoAG']()}alguém já está jogando nessa sala. para sair de alguma sala digite _out_.\nvocê também pode excluir alguma sala utilizando o comando _${usedPrefix}delttt_`
if (!text) throw `${lenguajeGB['smsAvisoFG']()}você deve adicionar um nome na sala, como por exemplo:\n_${usedPrefix + command} sala jogar1_`
let room = Object.values(conn.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true)) 
if (room) {
await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()}alguém entrou na sala *${text}*!\nvocês já podem jogar. :D`, m)
await conn.reply(m.chat, `${lenguajeGB['smsAvisoRG']()}⭕️ *clássico jogo da velha* ❌\n\ncomo se joga?\n_em sua vez, responda com algum número representando a posição que você deseja colocar a sua peça. (1,2,3,4,5,6,7,8,9)_`, m)

room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❎',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]})
let str = `🕹️ jogo da velha
🫂 jogadores
*┈┈┈┈┈┈┈┈┈*
❎ = @${room.game.playerX.split('@')[0]}
⭕ = @${room.game.playerO.split('@')[0]}
*┈┈┈┈┈┈┈┈┈*
     ${arr.slice(0, 3).join('')}
     ${arr.slice(3, 6).join('')}
     ${arr.slice(6).join('')}
*┈┈┈┈┈┈┈┈┈*
agora é a vez de: 
@${room.game.currentTurn.split('@')[0]}
`.trim()

if (room.x !== room.o) await conn.sendMessage(room.x, { text: str, mentions: this.parseMention(str)}, { quoted: m })
await conn.sendMessage(room.o, { text: str, mentions: conn.parseMention(str)}, { quoted: m })
        
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING' }
        
if (text) room.name = text     
let imgplay = `https://img.freepik.com/vector-premium/juego-tres-raya-icono-contorno-lineal-neon_7280-2422.jpg`
conn.sendMessage(m.chat, { image: { url: imgplay }, caption: `🕹️ jogo da velha

🫸 esperando o segundo jogador entrar para iniciar o jogo. para entrar utilize o comando:
_${usedPrefix + command} ${text}_

para sair de alguma sala utilize o comando _${usedPrefix}delttt_` }, { mentions: conn.parseMention(text), quoted: m })
conn.game[room.id] = room
}}
handler.command = /^(tictactoe|ttc|ttt|xo)$/i
export default handler
