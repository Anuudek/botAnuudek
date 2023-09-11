let hangman_word;
let hangman;

const handler = async (m, { conn }) => {
  // Matriz de palavras da forca
  const words = [
    "banana",
    "computador",
    "elefante",
    "programação",
    // Adicione mais palavras aqui
  ];

  if (!hangman) {
    conn.reply(m.chat, 'Um novo jogo da forca foi iniciado! Envie uma letra para adivinhar a palavra.', m);
    hangman_word = pickRandom(words);
    hangman = Array.from(hangman_word);
    for (let i = 0; i < hangman.length; i++) {
      if (hangman[i] !== ' ') hangman[i] = '_';
    }
  } else {
    const letter = m.text.toLowerCase();
    if (!letter) return conn.reply(m.chat, 'Por favor, envie uma letra para adivinhar a palavra.', m);
    if (letter.length !== 1 || !letter.match(/[a-z]/)) {
      return conn.reply(m.chat, 'Por favor, envie uma única letra válida.', m);
    }
    if (hangman.includes(letter) || hangman.includes(letter.toUpperCase())) {
      return conn.reply(m.chat, `A letra "${letter}" já foi escolhida anteriormente. Tente outra.`, m);
    }
    if (hangman_word.includes(letter) || hangman_word.includes(letter.toUpperCase())) {
      conn.reply(m.chat, `Boa escolha! A letra "${letter}" está na palavra.`, m);
      for (let i = 0; i < hangman_word.length; i++) {
        if (hangman_word[i] === letter || hangman_word[i] === letter.toUpperCase()) {
          hangman[i] = hangman_word[i];
        }
      }
      if (!hangman.includes('_')) {
        conn.reply(m.chat, `Parabéns! Você adivinhou a palavra: *${hangman_word}*.`, m);
        hangman = null;
      }
    } else {
      conn.reply(m.chat, `A letra "${letter}" não está na palavra. Tente novamente.`, m);
    }
  }
  conn.sendFile(m.chat, global.fs.readFileSync('../media/forca/' + hangman.length + '.jpg'), 'forca.jpg', 'Digite uma letra para adivinhar a palavra!\n' + hangman.join(' '), m);
};

handler.command = /^hangman$/i;

export default handler;

// Função para escolher uma palavra aleatória
function pickRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}
