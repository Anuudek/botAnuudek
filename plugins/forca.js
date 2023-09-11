// Importe quaisquer módulos ou bibliotecas necessárias
let MessageType = (await import(global.baileys)).default
let hangmanGames = {}

function randomWord() {
  // Coloque aqui uma lógica para gerar uma palavra aleatória para o jogo da forca
  // Por exemplo, você pode ter uma lista de palavras predefinidas e selecionar uma delas aleatoriamente
  const words = ["programação", "computador", "javascript", "desenvolvimento", "openai"]
  return words[Math.floor(Math.random() * words.length)]
}

function displayWord(word, guessedLetters) {
  // Crie uma função para exibir a palavra oculta com letras adivinhadas
  return word.replace(/\w/g, letter => (guessedLetters.includes(letter) ? letter : "_"))
}

function startGame(chatId) {
  const wordToGuess = randomWord()
  hangmanGames[chatId] = {
    wordToGuess,
    guessedLetters: [],
    attempts: 6, // Número de tentativas permitidas
  }
  return `Começou um novo jogo da forca! Adivinhe a palavra:\n${displayWord(wordToGuess, [])}`
}

function guessLetter(chatId, letter) {
  const game = hangmanGames[chatId]
  if (!game) return "Não há jogo em andamento. Use o comando /startforca para começar um jogo."
  if (game.wordToGuess.includes(letter)) {
    game.guessedLetters.push(letter)
    const displayed = displayWord(game.wordToGuess, game.guessedLetters)
    if (displayed === game.wordToGuess) {
      // O jogador ganhou
      delete hangmanGames[chatId]
      return `Parabéns! Você adivinhou a palavra: ${game.wordToGuess}`
    }
    return `Ótimo! A palavra até agora: ${displayed}`
  } else {
    game.attempts--
    if (game.attempts === 0) {
      // O jogador perdeu
      delete hangmanGames[chatId]
      return `Game over! A palavra era: ${game.wordToGuess}`
    }
    return `Letra errada. Você tem ${game.attempts} tentativas restantes. A palavra: ${displayWord(game.wordToGuess, game.guessedLetters)}`
  }
}

function endGame(chatId) {
  if (hangmanGames[chatId]) {
    delete hangmanGames[chatId]
    return "Jogo da forca encerrado."
  }
  return "Não há jogo em andamento."
}

// Defina o seu handler para o jogo da forca
let handler = async (m, { conn, usedPrefix, command, text }) => {
  let chatId = m.chat
  if (text === "startforca") {
    return conn.sendMessage(chatId, startGame(chatId), MessageType.text)
  } else if (text === "endforca") {
    return conn.sendMessage(chatId, endGame(chatId), MessageType.text)
  } else if (text.length === 1) {
    return conn.sendMessage(chatId, guessLetter(chatId, text), MessageType.text)
  } else {
    return conn.sendMessage(chatId, "Comando inválido. Use " + usedPrefix + command + " startforca para começar um novo jogo.", MessageType.text)
  }
}

handler.command = /^(forca|hangman)$/i

export default handler
