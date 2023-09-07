let handler = async (m, { usedPrefix }) => {
try {
delete global.chatgpt.data.users[m.sender]  
m.reply(`[❗] o histórico de mensagens entre você e o chatgpt foi excluído com sucesso.`)    
} catch (error1) {   
console.log(error1)
throw `erro no comando, tente novamente.`   
}} 
handler.command = ['delchatgpt']
export default handler
