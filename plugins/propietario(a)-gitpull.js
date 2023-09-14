import { spawn } from 'child_process';

let handler = async (m, { conn, isROwner, text }) => {
  if (!isROwner) throw 'Somente o proprietário pode executar este comando';

  const { key } = await conn.sendMessage(m.chat, { text: '🚀 atualizando o bot...', quoted: m });
  await delay(1000);

  // Execute o comando para atualizar o repositório Git
  const gitPullProcess = spawn('git', ['pull'], { stdio: 'inherit' });

  gitPullProcess.on('exit', async (code) => {
    if (code === 0) {
      // O código 0 indica que o comando Git pull foi bem-sucedido
      await conn.sendMessage(m.chat, { text: '✅ atualização concluída! reiniciando o bot em 1 segundo...', edit: key });
      setTimeout(() => {
        process.send('reset'); // Reinicie o bot após um atraso de 2 segundos
      }, 1000);
    } else {
      // Qualquer outro código indica um erro no comando Git pull
      await conn.sendMessage(m.chat, { text: '❌ ocorreu um erro durante a atualização do bot.', edit: key });
    }
  });
};

handler.help = ['gitpull'];
handler.tags = ['owner'];
handler.command = ['gitpull'];
handler.rowner = true;

export default handler;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
