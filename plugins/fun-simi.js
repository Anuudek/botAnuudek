import translate from '@vitalets/google-translate-api'
import fetch from "node-fetch"
let handler = async (m, { text, command, args, usedPrefix }) => {
if (!text) throw `utilização incorreta do comando. escreva algo para falar comigo, por exemplo:\n_${usedPrefix + command} olá, bot_`
  try {
  await conn.sendPresenceUpdate('composing', m.chat)
  let api = await fetch("https://api.simsimi.net/v2/?text=" + text + "&lc=pt")
  let resSimi = await api.json()
  m.reply(resSimi.success)      
/* conn.sendHydrated(m.chat, `${resSimi.success}`, `𝘼𝙄 | ${wm}`, null, null, null, null, null, [
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m)*/
  } catch {
  try {
  if (text.includes('Olá')) text = text.replace('Olá', 'Hello')
  if (text.includes('olá')) text = text.replace('olá', 'hello')
  if (text.includes('OLÁ')) text = text.replace('OLÁ', 'HELLO')    
  let reis = await fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=" + text)
  let resu = await reis.json()  
  let nama = m.pushName || '1'
  let api = await fetch("http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=" + nama + "&msg=" + resu[0][0][0])
  let res = await api.json()
  let reis2 = await fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=pt&dt=t&q=" + res.cnt)
  let resu2 = await reis2.json()
  m.reply(resu2[0][0][0])      
  } catch {  
  let reisss = await fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=id&dt=t&q=" + text)
  let resuuu = await reisss.json()      
  let res222 = await fetch(`https://violetics.pw/api/utility/simsimi?apikey=beta&text=${resuuu[0][0][0]}`)  
  let json222 = await res222.json()
  let resulttt = json222.result
  let lolll = await translate(`${resulttt}`, { to: 'pt', autoCorrect: true })
  m.reply(lolll.text)      
  }}
}
handler.help = ['simsimi']
handler.tags = ['General']
handler.command = ['bot'] 
export default handler
