let sessions = {};

let handler = async (m, { conn, args, usedPrefix }) => {
  let user = sessions[m.sender];

  if (!user) {
    user = {
      inGame: false,
      category: '',
      word: '',
      displayWord: [],
      attempts: 6,
      incorrectGuesses: [],
    };
    sessions[m.sender] = user;
  }

  if (new Date() - user.lastmining < 10000) {
    return await conn.reply(m.chat, `Espere um tempinho para usar o comando novamente...`, m);
  }

  try {
    if (!user.inGame) {
      if (args.length < 1) {
        return conn.reply(m.chat, `Uso incorreto! Use ${usedPrefix}forca categoria`, m);
      }

      let category = args[0].toLowerCase(); // Categoria do jogo

      if (category !== 'categoria1' && category !== 'categoria2') {
        return conn.reply(m.chat, `Categoria inválida! Use 'categoria1' ou 'categoria2'.`, m);
      }

      let wordList = getCategoryWords(category); // Obtenha a lista de palavras para a categoria

      if (!wordList || wordList.length === 0) {
        return conn.reply(m.chat, `Nenhuma palavra encontrada para a categoria '${category}'.`, m);
      }

      user.inGame = true;
      user.category = category;
      user.word = getRandomWord(wordList); // Obtenha uma palavra aleatória da lista
      user.displayWord = createDisplayWord(user.word); // Crie a representação inicial da palavra a ser adivinhada
      user.incorrectGuesses = [];
      user.attempts = 6;

      // Inicie o jogo enviando a primeira mensagem
      await sendGameState(conn, m.chat, user.displayWord, user.attempts, user.incorrectGuesses);
    } else {
      // O usuário já está em um jogo, implemente a lógica de jogo aqui
      if (m.text.length === 1 && m.text.match(/[a-z]/i)) {
        let guess = m.text.toLowerCase();

        if (user.word.includes(guess) && !user.displayWord.includes(guess)) {
          // Adivinhou uma letra correta
          for (let i = 0; i < user.word.length; i++) {
            if (user.word[i] === guess) {
              user.displayWord[i] = guess;
            }
          }

          if (!user.displayWord.includes('_')) {
            await conn.reply(m.chat, `Parabéns, você adivinhou a palavra: '${user.word}'!`, m);
            endGame(m.sender);
          } else {
            await sendGameState(conn, m.chat, user.displayWord, user.attempts, user.incorrectGuesses);
          }
        } else if (!user.incorrectGuesses.includes(guess)) {
          // Adivinhou uma letra incorreta
          user.incorrectGuesses.push(guess);
          user.attempts--;

          if (user.attempts === 0) {
            await conn.reply(m.chat, `Você perdeu! A palavra era: '${user.word}'.`, m);
            endGame(m.sender);
          } else {
            await sendGameState(conn, m.chat, user.displayWord, user.attempts, user.incorrectGuesses);
          }
        }
      } else if (m.text.toLowerCase() === 'desistir') {
        await conn.reply(m.chat, `Você desistiu! A palavra era: '${user.word}'.`, m);
        endGame(m.sender);
      }
    }
  } catch (e) {
    console.error(e);
  } finally {
    user.lastmining = new Date();
  }
};

handler.help = ['forca categoria'];
handler.tags = ['jogo', 'diversão'];
handler.command = ['forca'];

export default handler;

function getCategoryWords(category) {
  // Lógica para obter a lista de palavras da categoria
  // Substitua isto pela lógica real de obter palavras da categoria
  if (category === 'categoria1') {
    return ['palavra1', 'palavra2', 'palavra3']; // Exemplo de lista de palavras para 'categoria1'
  } else if (category === 'categoria2') {
    return ['apple', 'banana', 'cherry']; // Exemplo de lista de palavras para 'categoria2'
  }
}

function getRandomWord(wordList) {
  // Lógica para selecionar uma palavra aleatória da lista
  // Substitua isto pela lógica real de seleção de palavra aleatória
  let index = Math.floor(Math.random() * wordList.length);
  return wordList[index];
}

function createDisplayWord(word) {
  // Crie uma representação inicial da palavra a ser adivinhada
  let displayWord = [];
  for (let i = 0; i < word.length; i++) {
    displayWord.push('_');
  }
  return displayWord;
}

async function sendGameState(conn, chatId, displayWord, attempts, incorrectGuesses) {
  // Envie o estado atual do jogo
  let gameState = `Palavra: ${displayWord.join(' ')}\n`;
  gameState += `Tentativas restantes: ${attempts}\n`;
  gameState += `Tentativas incorretas: ${incorrectGuesses.join(', ')}\n`;
  await conn.reply(chatId, gameState, null, { quoted: null });
}

function endGame(userId) {
  // Encerre o jogo e redefina os dados do usuário
  delete sessions[userId];
}
