import fs from 'fs/promises';
import path from 'path';

let hangman_words;
let hangman;
let category;
let hint;

const handler = async (m, { conn }) => {
  if (!hangman) {
    conn.reply(m.chat, 'Escolha uma categoria para começar o jogo da forca:\n' + getCategoryList(), m);
    return;
  }
  const letter = m.text.toLowerCase();
  if (!letter) return conn.reply(m.chat, 'Por favor, envie uma letra para adivinhar a palavra.', m);
  if (letter.length !== 1 || !letter.match(/[a-z]/)) {
    return conn.reply(m.chat, 'Por favor, envie uma única letra válida.', m);
  }
  if (hangman.includes(letter) || hangman.includes(letter.toUpperCase())) {
    return conn.reply(m.chat, `A letra "${letter}" já foi escolhida anteriormente. Tente outra.`, m);
  }
  if (hangman_words.plvr.includes(letter) || hangman_words.plvr.includes(letter.toUpperCase())) {
    conn.reply(m.chat, `Boa escolha! A letra "${letter}" está na palavra.`, m);
    for (let i = 0; i < hangman_words.plvr.length; i++) {
      if (hangman_words.plvr[i] === letter || hangman_words.plvr[i] === letter.toUpperCase()) {
        hangman[i] = hangman_words.plvr[i];
      }
    }
    if (!hangman.includes('_')) {
      conn.reply(m.chat, `Parabéns! Você adivinhou a palavra: *${hangman_words.plvr}*.`, m);
      hangman = null;
    }
  } else {
    conn.reply(m.chat, `A letra "${letter}" não está na palavra. Tente novamente.`, m);
  }
  // Envie a categoria, a dica e o progresso da palavra
  conn.reply(m.chat, `Categoria: *${category}*\nDica: ${hint}\n\n${hangman.join(' ')}`, m);
};

handler.command = /^hangman$/i;

export default handler;

// Função para escolher uma categoria aleatória e iniciar o jogo
function startGame() {
  hangman_words = loadHangmanWords();
  const hangman_entry = pickRandom(hangman_words);
  hangman = Array.from(hangman_entry.plvr);
  for (let i = 0; i < hangman.length; i++) {
    if (hangman[i] !== ' ') hangman[i] = '_';
  }
  category = hangman_entry.tema;
  hint = hangman_entry.dica;
}

// Função para carregar as palavras da forca a partir do arquivo JSON
async function loadHangmanWords() {
  const filePath = path.join(__dirname, 'hangman_words.json'); // Caminho para o arquivo JSON
  const jsonData = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(jsonData);
}

// Função para escolher uma palavra aleatória
function⬤
