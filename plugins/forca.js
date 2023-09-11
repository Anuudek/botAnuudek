import * as sulla from "sulla";
import request from "request";
import { JSDOM } from "jsdom";
import { stripIndents } from "common-tags";

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
    const res = await fetch(
      `https://www.palabrasaleatorias.com/palavras-aleatorias.php?fs=1&fs2=${value}&Submit=Nova+palavra`
    );
    const html = await res.text();
    const dom = new JSDOM(html);
    const pageWord = dom.window.document.querySelector("table div").innerHTML;
    const word = await retira_acentos(pageWord.toLowerCase().replace(/ /g, "-"));
    user.forceGame.answer = await word.replace("\n", "");
    user.forceGame.display = await new Array(word.length - 1).fill(" __ ");
    await checkPoints(user, client, message);
  } catch (err) {
    console.log(message.from, `erro: \`${err.message}\`. Tente novamente mais tarde!`);
  }
}

// Continue adaptando o restante do código da mesma maneira, substituindo o uso de `require` por importações de módulos.

sulla
  .create("session-marketing", undefined, {
    headless: true,
    devtools: false,
    useChrome: true,
    debug: false,
    qr: false,
  })
  .then((client) => start(client));

async function checkPoints(user, client, message) {
  // Restante do código da função checkPoints
}

async function start(client) {
  // Restante do código da função start
}
