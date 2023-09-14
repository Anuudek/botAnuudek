import { spawn } from 'child_process';

let handler = async (m, { conn, isROwner, text }) => {
    if (isROwner) {
        const gitPull = spawn('sudo', ['git', 'pull'], { shell: true });

        gitPull.stdout.on('data', (data) => {
            const output = data.toString();
            conn.reply(m.chat, output, m);
        });

        gitPull.stderr.on('data', (data) => {
            const error = data.toString();
            conn.reply(m.chat, error, m);
        });

        gitPull.on('exit', (code) => {
            if (code === 0) {
                conn.reply(m.chat, 'Git pull executado com sucesso!', m);
                process.send('reset');
            } else {
                conn.reply(m.chat, `Erro ao executar git pull (código ${code})`, m);
            }
        });
    } else {
        throw 'Apenas o dono do bot pode executar este comando.';
    }
}

handler.help = ['gitpull'];
handler.tags = ['owner'];
handler.command = ['gitpull'];
handler.rowner = true;

export default handler;
