const { create, Client } = require('@open-wa/wa-automate');
const request = require("request");
const { JSDOM } = require("jsdom");
const { stripIndents } = require("common-tags");

const sessions = {};

async function createSession(client, message) {
  if (!sessions[message.from]) {
    sessions[message.from] = {
      id: message.from,
      type: -1,
      lastMessage: message.body,
      forceGame: {
        answer: "",
        lastTry: "",
        points: 0,
        display: [],
        confirmation: [],
        incorrect: [],
        displayText: null,
      },
    };
    console.log(`Add session: ${message.from} message:${message.body}`);
  }
  return sessions[message.from];
}

async function removeSession(user) {
  if (sessions[user.id]) {
    delete sessions[user.id];
    console.log(`removed session id:${user.id}`);
  }
}

function retira_acentos(palavra) {
  const com_acento =
    "áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ";
  const sem_acento =
    "aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC";
  let nova = "";
  for (let i = 0; i < palavra.length; i++) {
    if (com_acento.includes(palavra[i])) {
      nova += sem_acento.charAt(com_acento.indexOf(palavra[i]));
    } else {
      nova += palavra[i];
    }
  }
  return nova;
}

async function initForca(value, client, message, user) {
  try {
    request(
      `https://www.palabrasaleatorias.com/palavras-aleatorias.php?fs=1&fs2=${value}&Submit=Nova+palavra`,
      async (err, res) => {
        if (err) {
          return console.log(err);
        }
        const dom = new JSDOM(res.body);
        const pageWord = dom.window.document.querySelector("table div")
          .innerHTML;
        const word = await retira_acentos(
          pageWord.toLowerCase().replace(/ /g, "-")
        );
        user.forceGame.answer = await word.replace("\n", "");
        user.forceGame.display = await new Array(word.length - 1).fill(" __ ");
        await checkPoints(user, client, message);
      }
    );
  } catch (err) {
    console.log(
      message.from,
      `erro: \`${err.message}\`. Tente novamente mais tarde!`
    );
  }
}

async function checkPoints(user, client, message) {
  // Restante do código da função checkPoints
}

module.exports = (client) => {
  client.onMessage(async (message) => {
    console.log("IsGroup:" + message.isGroupMsg + " Id:" + message.from);
    if (message.isGroupMsg) {
      return;
    }
    const user = await createSession(client, message);

    user.lastMessage = message.body;
    console.log(user);
    if (user.type === -1) {
      if (message.body.toLowerCase() == "iniciar forca") {
        await client.sendText(
          message.from,
          "Responda com *NUMERO* a categoria que você deseja jogar:\n 1️⃣ - Palavras Aleatórias\n 2️⃣ - Alimentos\n 3️⃣ - Animais\n 4️⃣ - Cores\n 5️⃣ - Corpo Humano\n 6️⃣ - Profissões"
        );
        user.type = 0;
        return;
      } else {
        try {
          await removeSession(user);
        } catch (e) {
          //
        }
        await client.sendText(
          message.from,
          "Desculpe, algo de errado aconteceu comigo, por favor digite *iniciar forca* para iniciar um novo jogo."
        );
      }
    }
    if (user.type === 0) {
      console.log("Receive:" + message.body);
      let selectedValue = -1;
      switch (message.body) {
        case "1":
          selectedValue = 0;
          break;
        case "2":
          selectedValue = 2;
          break;
        case "3":
          selectedValue = 3;
          break;
        case "4":
          selectedValue = 4;
          break;
        case "5":
          selectedValue = 5;
          break;
        case "6":
          selectedValue = 12;
          break;
        default:
          console.log("Invalid option.");
          break;
      }
      if (selectedValue == -1) {
        return;
      }
      await initForca(selectedValue, client, message, user);
      user.type = 1;
      return;
    } else if (user.type == 1) {
      const choice = message.body.toLowerCase();
      const word = user.forceGame.answer;
      user.forceGame.lastTry = choice;
      if (choice === "end") {
        return;
      }
      console.log(
       choice equals word: ${choice == word} choice:${choice} ${ choice.length } word:${word}
);
if (choice.length > 1 && choice == word) {
user.forceGame.guessed = true;
await checkPoints(user, client, message);
return;
} else if (word.includes(choice)) {
user.forceGame.displayText = true;
for (let i = 0; i < word.length; i++) {
if (word[i] !== choice) {
continue;
}
user.forceGame.confirmation.push(word[i]);
user.forceGame.display[i] = word[i];
}
await checkPoints(user, client, message);
return;
} else {
user.forceGame.displayText = false;
if (choice.length === 1) {
user.forceGame.incorrect.push(choice);
}
user.forceGame.points++;
await checkPoints(user, client, message);
return;
}
}
});
};
