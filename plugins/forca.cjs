const sulla = require("sulla");
const request = require("request");
const { JSDOM } = require("jsdom");
const { stripIndents } = require("common-tags");

sulla
  .create("session-marketing", undefined, {
    headless: true,
    devtools: false,
    useChrome: true,
    debug: false,
    qr: false,
  })
  .then((client) => start(client));

const sessions = [];

function getUserById(id) {
  return sessions.find((x) => x.id == id);
}

async function createSession(message) {
  return await new Promise((resolve) => {
    let user = getUserById(message.from);
    if (!user) {
      user = {
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
      sessions.push(user);
      console.log(`Add session: ${message.from} message:${message.body}`);
    }
    resolve(user);
  });
}

async function removeSession(user) {
  const userIndex = sessions.indexOf(user);
  if (userIndex != -1) {
    sessions.splice(userIndex, 1);
    console.log(`removed session id:${user.id}`);
  }
}

/* function checkSession(client, user, type) {
    setTimeout(() => {
        if (user.type == type) {
            type == -1;
            client.sendText(user.id, "VOCÊ VOLTOU PARA O INICIO");
        }
    }, 60000);
} */
function retira_acentos(palavra) {
  com_acento = "áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ";
  sem_acento = "aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC";
  nova = "";
  for (i = 0; i < palavra.length; i++) {
    if (com_acento.search(palavra.substr(i, 1)) >= 0) {
      nova += sem_acento.substr(com_acento.search(palavra.substr(i, 1)), 1);
    } else {
      nova += palavra.substr(i, 1);
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
        // console.log(`${word}`);
        user.forceGame.display = await new Array(word.length - 1).fill(" __ ");
        // console.log(user.forceGame.display);
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
  let displayText = user.forceGame.displayText;
  let points = user.forceGame.points;
  const display = user.forceGame.display;
  const incorrect = user.forceGame.incorrect;
  const word = user.forceGame.answer;
  const confirmation = user.forceGame.confirmation;
  if (
    (word.length !== confirmation.length && points < 6) ||
    !user.forceGame.guessed
  ) {
    await client.sendText(
      message.from,
      stripIndents`
        ${
          displayText === null
            ? "Lá vamos nós!"
            : displayText
            ? "Bom trabalho!! ✅"
            : "Nope! ⛔️"
        }
        \`${display.join(" ")}\`.
        A palavra possui ${display.length} letras.
        faltam ${display.length - confirmation.length} letras.
        Tentativas *incorretas*:
         ${incorrect.join(", ") || "Nenhuma"}

        Qual letra você escolhe?
        \`\`\`
        ___________
        |     |
        |     ${points > 0 ? "O" : ""}
        |    ${points > 2 ? "—" : " "}${points > 1 ? "|" : ""}${
        points > 3 ? "—" : ""
      }
        |    ${points > 4 ? "/" : ""} ${points > 5 ? "\\" : ""}
        |
        ============
        \`\`\``
    );
  }
  if (
    word.length === user.forceGame.confirmation.length ||
    user.forceGame.guessed
  ) {
    await client.sendText(
      message.from,
      `você *VENCEU*, a palavra era *${word}*! 🥳🥳`
    );
    await removeSession(user);
    return;
  } else if (points >= 6) {
    await client.sendText(message.from, `que pena, a palavra era *${word}*...`);
    await removeSession(user);
    return;
  }
}

async function start(client) {
  client.onMessage(async (message) => {
    console.log("IsGroup:" + message.isGroupMsg + " Id:" + message.from);
    if (message.isGroupMsg) {
      return;
    }
    const user = await createSession(message);

    user.lastMessage = message.body;
    console.log(user);
    if (user.type === -1) {
      //perguntas do nivel 1 ou seja iniciar o jogo e regras
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
          "Desculpe, algo de errado aconteceu comigo, porfavor digite *iniciar forca* para iniciar um novo jogo."
        );
      }
    }
    if (user.type === 0) {
      //perguntas do nivel 2 responder alternativas
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
      // console.log(selectedValue);
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
        `choice equals word: ${choice == word} choice:${choice} ${
          choice.length
        } word:${word}`
      );
      if (choice.length > 1 && choice == word) {
        user.forceGame.guessed = true;
        await checkPoints(user, client, message);
        return;
      } else if (word.includes(choice)) {
        user.forceGame.displayText = true;
        for (let i = 0; i < word.length; i++) {
          if (word[i] !== choice) {
            continue; // eslint-disable-line max-depth
          }
          //Qnd tinha 2 letras na mesma frase, só detectava 1
          // if (!user.forceGame.confirmation.includes(word[i])) {
          user.forceGame.confirmation.push(word[i]);
          user.forceGame.display[i] = word[i];
          // }
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
}
