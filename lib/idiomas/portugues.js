const lenguaje = () => { return 'pt' } //português 

//AVISOS DE MENSAJE
const smsAvisoRG = () => { return `resultado - ` } 
const smsAvisoAG = () => { return `aviso - ` }
const smsAvisoIIG = () => { return `informação - ` }
const smsAvisoFG = () => { return `erro - ` }
const smsAvisoMG = () => { return `ação mal usada - ` }
const smsAvisoEEG = () => { return `logs - ` }
const smsAvisoEG = () => { return `sucesso - ` }

//PARÁMETROS EN COMANDOS
const smsRowner = () => { return `apenas algum owner pode utilizar este comando.` }//NUMERO DE BOT
const smsOwner = () => { return `apenas algum owner pode utilizar este comando.` }//OWNER
const smsMods = () => { return `apenas moderadores podem utilizar este comando.` }//MODERADORES
const smsPremium = () => { return `apenas usuários com premium pode utilizar este comando.` }//USUARIOS PREMIUM
const smsGroup = () => { return `este comando utiliza-se somente em grupos.` }//PARA GRUPOS
const smsPrivate = () => { return `este comando utiliza-se apenas em meu privado.` }//AL PRIVADO
const smsAdmin = () => { return `apenas administradores podem utilizar este comando.` }//ADMINS
const smsBotAdmin = () => { return `preciso ser administrador desse grupo para este comando ser executado.` }//BOT CON ADMIN
const smsUnreg = () => { return `você precisa ser registrado para utilizar este comando. para se registrar use .verify` }//VERIFICAR
const smsRestrict = () => { return `esse comando foi restrito/bloqueado por algum owner.` }//RESTRINGIR COMANDO

//MENU LISTA
const smsTime = () => { return `tempo atual`}
const smsUptime = () => { return `funcionando durante`}
const smsVersion = () => { return `versão de ${global.packname}`}
const smsTotalUsers = () => { return `total de usuários`}
const smsMode = () => { return `o bot está em modo`}
const smsModePublic = () => { return `público`}
const smsModePrivate = () => { return `privado`}
const smsBanChats = () => { return `chat(s) banido(s)`}
const smsBanUsers = () => { return `usuário(s) banido(s)`}
const smsPareja = () => { return `namoro`}
const smsResultPareja = () => { return `não tem namoro`}
const smsSaludo = () => { return `👋 olá, boas vindas!`}
const smsDia = () => { return `🌇⛅ bom dia`}
const smsTarde = () => { return `🏙️🌤️ boa tarde`}
const smsTarde2 = () => { return `🌆🌥️ boa tarde`}
const smsNoche = () => { return `🌃💫 boa noite`}
const smsListaMenu = () => { return `⊹ lista do menu`}
const smsLista1 = () => { return `🌟 informação do botAnuudek`}
const smsLista2 = () => { return `💖 criador`}
const smsLista3 = () => { return `🎁 doar`}
const smsLista4 = () => { return `🚀 velocidade`}
const smsLista5 = () => { return `💡 informação do menu`}
const smsLista6 = () => { return `🌀 menu completo`}
const smsLista7 = () => { return `🐈 instalar botAnuudek`}
const smsLista8 = () => { return `🍄 ser um bot`}
const smsLista9 = () => { return `📄 termos, condições e privacidade`}
const smsLista10 = () => { return `🌟 aventura`}
const smsLista11 = () => { return `🏆 ranking`}
const smsLista12 = () => { return `🏅 usuários premium`}
const smsLista13 = () => { return `🎟️ ser premium`}
const smsLista14 = () => { return `🛣️ quests diárias`}
const smsLista15 = () => { return `⚗️ menu rpg`}
const smsLista16 = () => { return `🏪 compras e vendas`}
const smsLista17 = () => { return `🎒 inventário`}
const smsLista18 = () => { return `🌟 multiídia`}
const smsLista19 = () => { return `📲 menu de downloads`}
const smsLista20 = () => { return `🔍 menu de buscas`}
const smsLista21 = () => { return `🛰️ menu de conversão`}
const smsLista22 = () => { return `🧰 menu de modificação de áudio`}
const smsLista22_1 = () => { return `🔩 menu de ferramentas`}
const smsLista23 = () => { return `🌟 diversão`}
const smsLista24 = () => { return `🎡 jogos dinâmicos`}
const smsLista25 = () => { return `🔊 menu de áudios`}
const smsLista26 = () => { return `🎈 menu de stickers e filtros`}
const smsLista27 = () => { return `✨ menu de efeitos e logos`}
const smsLista28 = () => { return `🌅 menu de logos 2`}
const smsLista29 = () => { return `⛩️ memes aleatórios e animes`}
const smsLista30 = () => { return `🔞 menu de comandos +18`}
const smsLista31 = () => { return `🌟 ajustes`}
const smsLista32 = () => { return `🔰 menu para grupos`}
const smsLista33 = () => { return `📑 listas disponíveis`}
const smsLista34 = () => { return `⚙️ centro de configurações`}
const smsLista35 = () => { return `💎 menu para owners`}

//main.js
const smsWelcome = () => { return `*olá, @user! você foi adicionado ao grupo @subject. boas vindas!`}
const smsBye = () => { return '@user saiu do grupo.'}
const smsSpromote = () => { return '@user agora é um administrador do grupo.'}
const smsSdemote = () => { return '*@user não é mais um administrador do grupo'}
const smsSdesc = () => { return 'a descrição do grupo foi alterada para:\n\n@desc'}
const smsSsubject = () => { return 'o nome do grupo foi alterado para:\n\n@subject'}
const smsSicon = () => { return 'a foto do grupo foi trocada.*'}
const smsSrevoke = () => { return 'o link de convite do grupo foi trocado, o link é:\n\n*@revoke*'}
const smsConexion = () => { return `\n𓃠 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ 🟢 CONEXÃO ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠\n│\n│★ CONEXÃO COM O WHATSAPP COM SUCESSO :D\n│\n ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✦ ✅ ✦┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 𓃠`} 
const smsCargando = () => { return `carregando...\n`} 
const smsCodigoQR = () => { return `\n✅ ESCANEIE O QR CODE - EXPIRARÁ EM 45 SEGUNDOS`}
const smsConexionOFF = () => { return `\n⚠️ SEM CONEXÃO, REMOVA A PASTA ${global.authFile} E ESCANEIE O QR CODE`}
const smsConexioncerrar = () => { return `\n⚠️ CONEXÃO ENCERRADA, RECONECTANDO...`}
const smsConexionperdida = () => { return `\n⚠️ CONEXÃO COM O SERVIDOR PERDIDA, RECONECTANDO...`}
const smsConexionreem = () => { return `\n⚠️ CONEXIÓN REEMPLAZADA, SE HA ABIERTO OTRA NUEVA SESION, POR FAVOR, CIERRA LA SESIÓN ACTUAL PRIMERO.`}
const smsConexionreinicio = () => { return `\n⚠️ NECESSÁRIO REINICIAR, REINICIANDO...`}
const smsConexiontiem = () => { return `\n⚠️ TEMPO DE CONEXÃO ESGOTADO, RECONECTANDO...`}
const smsConexiondescon = () => { return `\n⚠️ RAZÃO DE DESCONEXÃO DESCONHECIDA: ${reason || ''}: ${connection || ''}`}
const smsClearTmp = () => { return `\n╭» 🟢 MULTIMÍDIA 🟢\n│☁ ARQUIVOS DA PASTA TMP REMOVIDOS\n╰―――――――――――――――――――✤`} 
const smspurgeSession = () => { return `\n╭» 🔵 ${global.authFile} 🔵\n│☁ SESSÕES NÃO NECESSÁRIAS FORAM REMOVIDAS\n╰―――――――――――――――――――✤`} 
const smspurgeOldFiles = () => { return `\n╭» 🟠 ARCHIVOS 🟠\n│☁ ARQUIVOS RESIDUAIS EXCLUÍDOS\n╰―――――――――――――――――――✤`} 
const smspurgeSessionSB1 = () => { return `\n╭» 🟡 GataJadiBot 🟡\n│☁ NADA PARA EXCLUIR \n╰―――――――――――――――――――✤`} 
const smspurgeSessionSB2 = () => { return `\n╭» ⚪ GataJadiBot ⚪\n│☁ ARQUIVOS NÃO ESSENCIAIS EXCLUÍDOS\n╰―――――――――――――――――――✤`} 
const smspurgeSessionSB3 = () => { return `\n╭» 🔴 GataJadiBot 🔴\n│☁ HOUVE UM ERRO\n╰―――――――――――――――――――✤\n`} 
const smspurgeOldFiles1 = () => { return `\n╭» 🟣 ARQUIVO 🟣\n│☁`} 
const smspurgeOldFiles2 = () => { return `EXCLUÍDO COM SUCESSO\n╰―――――――――――――――――――✤`} 
const smspurgeOldFiles3 = () => { return `\n╭» 🔴 ARQUIVO 🔴\n│☁`} 
const smspurgeOldFiles4 = () => { return `FALHA AO EXCLUIR\n╰―――――――――――――――――――✤\n`}

//_allantilink.js
const smsTextoYT = () => { return '😻 botAnuudek '} 
const smsApagar = () => { return '❌ desativar'} 
const smsEncender = () => { return '✅ ativar'} 
const smsEnlaceTik = () => { return `foi detectado um link proibido do TikTok neste grupo - eliminado.`}
const smsEnlaceYt = () => { return `foi detectado um link proibido do YouTube neste grupo - eliminado.`}
const smsEnlaceTel = () => { return `foi detectado um link proibido do Telegram neste grupo - eliminado.`}
const smsEnlaceFb = () => { return `foi detectado um link proibido do Facebook neste grupo - eliminado.`}
const smsEnlaceIg = () => { return `foi detectado um link proibido do Instagram neste grupo - eliminado.`}
const smsEnlaceTw = () => { return `foi detectado um link proibido do Twitter neste grupo - eliminado.`}
const smsAllAdmin = () => { return `preciso ser administrador do grupo para eliminar os links proibidos.`}
const smsSoloOwner = () => { return `somente algum owner pode ativar essa função utilizando _.on restrict_`}

//handler.js
const smsCont1 = () => { return `*🔴 o comando não está funcionando*`}
const smsCont2 = () => { return `*⚠️ plugin:*`}
const smsCont3 = () => { return `*⚠️ usuário:*`}
const smsCont4 = () => { return `*⚠️ commando:*`}
const smsCont5 = () => { return `*⚠️ erro:*`}
const smsCont6 = () => { return `*❗ reporte este erro utilizando o comando _.reporte_ que será enviado para algum owner.*`}
const smsCont7 = () => { return `${global.lenguajeGB['smsAvisoAG']()}você não tem diamantes💎! para comprar na tenda utilize o comando`}
const smsCont8 = () => { return ` *diamante(s) usado(s)* 💎`}
const smsCont9 = () => { return `${global.lenguajeGB['smsAvisoAG']()}você precisa estar no nível ➡️`}
const smsCont10 = () => { return `para usar este comando. seu nível atual: ➡️`}
const smsCont11 = () => { return `atualizar com o comando`}
const smsCont12 = () => { return `um grande grupo!`}
const smsCont13 = () => { return `alguém está participando! 🥳`}
const smsCont14 = () => { return `alguém saiu! 🧐`}
const smsCont15 = () => { return `olá`}
const smsCont16 = () => { return `as vídeos-chamadas 📲`}
const smsCont17 = () => { return `as chamadas 📞`}
const smsCont18 = () => { return `não estão autorizados e por motivos de segurança você será bloqueado.\n\nse você ligou acidentalmente, entre em contato com algum owner do botAnuudek!`}
const smsCont19 = () => { return `anti-apagar mensagens`}
const smsCont20 = () => { return `*┃✤ nome:*`}
const smsCont21 = () => { return `*┃✤ enviando a mensagem excluída...*`}

//_anti-internacional.js
const smsInt1 = () => { return `esse número`}
const smsInt2 = () => { return `não está permitido em participar deste grupo!`}

//_antilink.js
const smsAdwa = () => { return `${global.lenguajeGB['smsAvisoEG']()}como você é administrador do grupo, não será eliminado(a).`}
const smsEnlaceWat = () => { return `${lenguajeGB['smsAvisoAG']()}foi detectado um link proibido do WhatsApp neste grupo - eliminado.`}

//_antilink2.js
const smsEnlaceWatt = () => { return `${lenguajeGB['smsAvisoAG']()}foi detectado um link proibido que contenha https:// neste grupo - eliminado.`}

//_antispam.js
const smsNoSpam = () => { return `não faça spam! 🤨\n\nvocê foi bloqueado de usar o ${global.packname} por ${60000 / 1000 - 59} minutos.`}

//_antispam_.js
const smsNoSpam2 = () => { return `foi desbanido depois de ${60000 / 1000 - 59} minutos. não faça mais spam!`}

//Texto
const smsConMenu = () => { return `☘️ 𝗠 𝗘 𝗡 𝗨`} //🟡 NO CAMBIAR 

//Error
const smsMalError = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`OCURRIÓ UN ERROR INESPERADO.\`\`\``}
const smsMalError2 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`SURGIÓ UN INCONVENIENTE. INTENTE DE NUEVO.\`\`\``}
const smsMalError3 = () => { return `${lenguajeGB['smsAvisoFG']()}\`\`\`ALGO SALIÓ MAL, REPORTE ESTE COMANDO USANDO:\`\`\`\n`}

//_antitoxic.js
const smsToxic1 = () => { return `não diga essa palavra! 🤬 dizer essa palavra`}
const smsToxic2 = () => { return `está proibído. não seja tóxico(a)!`}
const smsToxic3 = () => { return `⚠️ advertência - `}
const smsToxic4 = () => { return `😭 sinto muito`} //🟡 NO CAMBIAR 
const smsToxic5 = () => { return `☢️ desativar antitoxic`} //🟡 NO CAMBIAR 
const smsToxic6 = () => { return `você foi advertido diversas vezes!`}
const smsToxic7 = () => { return `você ultrapassou os 4 avisos e agora será eliminado. 🟡`}

//Tienda
const eExp = () => { return '⚡ Experiência' } 
const eDiamante = () => { return '💎 Diamante' } 
const eDiamantePlus = () => { return '💎+ Diamante+' }
const eToken = () => { return '🪙 Token' } 
const eEsmeralda = () => { return '💚 Esmeralda' } 
const eJoya = () => { return '♦️ Jóia' }
const eMagia = () => { return '🌀 Magia' } 
const eOro = () => { return '👑 Ouro' } 
const eGataCoins = () => { return '🐱 AnuudekCoins' }
const eGataTickers = () => { return '🎫 Anuudek Tickers' } 
const eEnergia = () => { return '✨ Energia' }
const ePocion = () => { return '🥤 Poção' }
const eAgua = () => { return '💧 Água' }
const eBasura = () => { return '🗑 Lixo' }
const eMadera = () => { return '🪵 Madeira' }
const eRoca = () => { return '🪨 Rocha' }
const ePiedra = () => { return '🥌 Pedra' }
const eCuerda = () => { return '🕸️ Corda' }
const eHierro = () => { return '⛓️ Ferro' }
const eCarbon = () => { return '⚱️ Carvão' }
const eBotella = () => { return '🍶 Garrafa' }
const eLata = () => { return '🥫 Lata' }
const eCarton = () => { return '🪧 Cartão' } 
const eEletric = () => { return '💡 Eletricidade' }
const eBarraOro = () => { return '〽️ Barra de ouro' }
const eOroComun = () => { return '🧭 Ouro Comum' }
const eZorroG = () => { return '🦊🌫️ Raposa grande' }
const eBasuraG = () => { return '🗑🌫️ Super lixo' }
const eLoboG = () => { return '🐺🌫️ Super lobo' }
const eMaderaG = () => { return '🛷🌫️ Super Madeira' }
const eEspada = () => { return '⚔️ Espada' }
const eCarnada = () => { return '🪱 Isca' }
const eBillete = () => { return '💵 Notas' }
const ePinata = () => { return '🪅 Piñata' }
const eGancho = () => { return '🪝 Ganchi' }
const eCanaPescar = () => { return '🎣 Vara de pescar' } 
const eCComun = () => { return '📦 Caixa comum' }
const ePComun = () => { return '🥡 Caixa pouco comum' }
const eCMistica = () => { return '🗳️ Caixa mística' }
const eCMascota = () => { return '📫 Caixa para animais de estimação' }
const eCJardineria = () => { return '💐 Caixa de jardinagem' }
const eClegendaria = () => { return '🎁 Caixa Lendária' } 
const eUva = () => { return '🍇 Uva' }
const eManzana = () => { return '🍎 Maçã' }
const eNaranja = () => { return '🍊 Laranja' }
const eMango = () => { return '🥭 Manga' }
const ePlatano = () => { return '🍌 Banana' } 
const eSUva = () => { return '🌾🍇 Sementes de uva' }
const eSManzana = () => { return '🌾🍎 Sementes de maçã' }
const eSNaranja = () => { return '🌾🍊 Sementes de laranja' }
const eSMango = () => { return '🌾🥭 Sementes de manga' }
const eSPlatano = () => { return '🌾🍌 Sementes de banana' } 
const eCentauro = () => { return '🐐 Centauro' }
const eAve = () => { return '🦅 Pássaro' }
const eGato = () => { return '🐈 Gato' }
const eDragon = () => { return '🐉 Dragão' }
const eZorro = () => { return '🦊 Raposa' }
const eCaballo = () => { return '🐎 Cavalo' }
const eFenix = () => { return '🕊️ Fénix' }
const eLobo = () => { return '🐺 Lobo' }
const ePerro = () => { return '🐶 Cachorro' } 
const eAMascots = () => { return '🍖 Alimento para animais de estimação' }
const eCCentauro = () => { return '🐐🥩 Comida de centauro' }
const eCAve = () => { return '🦅🥩 Comida de pássaro' }
const eCMagica = () => { return '🌀🥩 Comida mágica' }
const eCDragon = () => { return '🐉🥩 Comida de dragão' }
const eACaballo = () => { return '🐎🥩 Alimentos para cavalo' }
const eCFenix = () => { return '🕊️🥩 Comida de fénix' } 
//config-on y off.js
const smsWel1 = () => { return `🎉 BOAS VINDAS`}
const smsWel2 = () => { return `Mensagem de boas-vindas para novos membros em grupos`}
const smsDete1 = () => { return `🔔 AVISOS`}
const smsDete2 = () => { return `avisos de ações dentro do grupo`}
const smsANivel1 = () => { return `🆙 NÍVEL AUTOMÁTICO`}
const smsANivel2 = () => { return `Aumente o nível de todos automaticamente; (Aplica recompensas por subir de nível)`}
const smsRestri1 = () => { return `⛔ RESTRINGIR`}
const smsRestri2 = () => { return `Habilite a função para adicionar ou remover pessoas em grupos`}
const smsLlamar1 = () => { return `🚫 ANTI-CHAMADAS`}
const smsLlamar2 = () => { return `Bloquear pessoas que fazem chamadas`}
const smsAntiSp1 = () => { return `🚯 ANTI-SPAM`}
const smsAntiSp2 = () => { return `Proibir o uso de comandos quando alguém fizer algum tipo de spam`}
const smsModP1 = () => { return `🌐 MODO PÚBLICO`}
const smsModP2 = () => { return `Habilite o recurso para que todos possam usar o botAnuudek`}
const smsModAd1 = () => { return `🛂 MODO ADMIN`}
const smsModAd2 = () => { return `Somente administradores poderão usar o botAnuudek em grupos`}
const smsLect1 = () => { return `✅ LEITURA AUTOMÁTICA`}
const smsLect2 = () => { return `Deixe mensagens ou bate-papos como lidos`}
const smsTempo1 = () => { return `🐈 BOT TEMPORÁRIO`}
const smsTempo2 = () => { return `Função que permite permanência temporária em grupos`}
const smsStik1 = () => { return `🎠 STICKERS`}
const smsStik2 = () => { return `Habilite o envio automático de stickers para todos`}
const smsStickA1 = () => { return `🪄 STICKERS AUTOMÁTICOS`}
const smsStickA2 = () => { return `Os vídeos, gifs, imagens, links (jpg ou jpeg) enviados se tornarão adesivos automaticamente`}
const smsReacc1 = () => { return `🤡 REAÇÃO `}
const smsReacc2 = () => { return `Habilite o envio automático de reações às mensagens`}
const smsAudi1 = () => { return `🔊 ÁUDIOS`}
const smsAudi2 = () => { return `Habilite o envio automático de áudios para todos`}
const smsModHor1 = () => { return `🔞 MODO HORNY`}
const smsModHor2 = () => { return `Mostrar conteúdo adulto em bate-papos`}
const smsAntitoc1 = () => { return `☢️ ANTI TÓXICOS`}
const smsAntitoc2 = () => { return `Envie avisos para aqueles que insultam`}
const smsModOb1 = () => { return `👀 MODO OBSERVAR`}
const smsModOb2 = () => { return `Permitir que imagens, gifs e vídeos sejam vistos por todos`}
const smsAntiEli1 = () => { return `🗑️ ANTI-EXCLUIR`}
const smsAntiEli2 = () => { return `Qualquer mensagem excluída será encaminhada para o chat ou grupo`}
const smsAntiInt1 = () => { return `🌏 ANTI INTERNACIONAL`}
const smsAntiInt2 = () => { return `Elimine números internacionais considerados falsos`}
const smsAntiE1 = () => { return `🔗 ANTI-LINKS`}
const smsAntiE2 = () => { return `Remover pessoas que enviam links de grupos do WhatsApp`}
const smsAntiEE1 = () => { return `🔗 ANTI-LINKS 2`}
const smsAntiEE2 = () => { return `Remover pessoas que enviam links que contenham https`}
const smsAntiTT1 = () => { return `🔗 ANTI-TIKTOK`}
const smsAntiTT2 = () => { return `Remover pessoas que enviam links do TikTok`}
const smsAntiYT1 = () => { return `🔗 ANTI-YOUTUBE`}
const smsAntiYT2 = () => { return `Remover pessoas que enviam links do YouTube`}
const smsAntiTEL1 = () => { return `🔗 ANTI-TELEGRAM`}
const smsAntiTEL2 = () => { return `Remover pessoas que enviam links do Telegram`}
const smsAntiFB1 = () => { return `🔗 ANTI-FACEBOOK`}
const smsAntiFB2 = () => { return `Remover pessoas que enviam links do Facebook`}
const smsAntiIG1 = () => { return `🔗 ANTI-INSTAGRAM`}
const smsAntiIG2 = () => { return `Remover pessoas que enviam links do Instagram`}
const smsAntiTW1 = () => { return `🔗 ANTI TWITTER `}
const smsAntiTW2 = () => { return `Remover pessoas que enviam links do Twitter`}
const smsSOLOP1 = () => { return `⚜️ APENAS PRIVADO`}
const smsSOLOP2 = () => { return `Ativar o uso do bot apenas em bate-papos privados`}
const smsSOLOG1 = () => { return `⚜️ SOLO GRUPOS`}
const smsSOLOG2 = () => { return `Ativar o uso do bot apenas em grupos`}
const smsConfi1 = () => { return `CONFIGURAÇÕES`}
const smsConfi2 = () => { return `*Olá!*`}
const smsConfi3 = () => { return `*Selecione uma opção da lista*`}
const smsConfi4 = () => { return `*Para começar a configurar*`}
const smsConfi5 = () => { return `● *Avisos de configuração:*`}
const smsConfi6 = () => { return `✅ ⇢ *Função ativada*`}
const smsConfi7 = () => { return `❌ ⇢ *Função desligada*`}
const smsConfi8 = () => { return `⚠️ ⇢ *Este bate-papo não é um grupo*`}
const smsConfi9 = () => { return `*Recomendação: Para visualizar a configuração*\n*completa, use este menu em algum grupo*\n`}
const smsConfi10 = () => { return `*~ CENTRO DE CONFIGURAÇÃO*`}
const smsParaAdmins = () => { return `PARA ADMINISTRADORES: GRUPOS`}
const smsParaAdYOw = () => { return `PARA ADMINISTRADORES: CHATS`}
const smsParaOw = () => { return `PARA OWNERS: CHATS`}
const smsNoGg = () => { return ` | ⚠️`}
const smsMens1 = () => { return `COMANDO`} 
const smsMens2 = () => { return `NO MOMENTO`} 
const smsMens3 = () => { return `NESTE`} 
const smsMens4 = () => { return `BOT`} 
const smsMens5 = () => { return `CHAT`} 

//Error2
const smsMensError1 = () => { return `❕ COMANDO DE RELATÓRIO`} 
const smsMensError2 = () => { return `o seguinte comando está falhando`} 

//_antiviewonce.js
const smsAntiView = () => { return `revelando foto de visualização única... 😎`} 

//_autolevelup.js
const smsAutoLv1 = () => { return `🎖️ novo nível`} 
const smsAutoLv2 = () => { return `nível anterior:`} 
const smsAutoLv3 = () => { return `nível atual:`} 
const smsAutoLv4 = () => { return `elo:`} 
const smsAutoLv5 = () => { return `data:`} 
const smsAutoLv6 = () => { return `alcançou um novo nível!`} 
const smsAutoLv7 = () => { return `recompensa pelo seu novo nível 🥳`} 

//_autosticker.js
const smsAutoStik = () => { return `${lenguajeGB['smsAvisoFG']()} o vídeo não deve durar mais de 7 segundos.`} 

//_expired.js
const smsBottem1 = () => { return `saindo do grupo! caso queira usar novamente o botAnuudek, use o comando _.bottemporal_.`} 
const smsBottem2 = () => { return `*💕 ASSISTÊNCIA AO USUÁRIO*\n*_${global.ig}_*\n`} 
const smsBottem3 = () => { return `até mais! 💖`} 

//_premium.js
const smsPremI = () => { return `🎟️ o seu premium expirou! \n*para obter novamente o premium, utilize o comando _.pase premium_.`} 

//afk-_afk.js
const smsAfkM1 = () => { return `não está mais afk.`}
const smsAfkM2 = () => { return `*motivo do afk:* `}
const smsAfkM3 = () => { return `⏳ tempo em que ficou afk: `}
const smsAfkM4 = () => { return `não marque este usuário, ele se encontra afk.\n`}
const smsAfkM5 = () => { return `*motivo do afk:* `} 
const smsAfkM6 = () => { return `*motivo do afk:* não especificou o motivo da inatividade.`} 
const smsAfkTime = () => { return [['dia(s)'], ['hora(s)'], ['minuto(s)'], ['segundo(s)']] }
const smsAfkResultTime = smsAfkTime()

//afk-afk.js
const smsAfkQ1 = (usedPrefix, command) => { return `${lenguajeGB['smsAvisoMG']()}*escreva o motivo de sua inatividade (afk). por exemplo:\n\n_${usedPrefix + command}_ irei realizar uma tarefa_.`} 
const smsAfkQ2 = () => { return `${lenguajeGB['smsAvisoMG']()}precisa de pelo menos 10 caractéres para colocar o motivo da inatividade.`} 
const smsAfkM1A = () => { return `não mencione ou marque`} 
const smsAfkM1B = () => { return `entrou em modo afk (inatividade).\n\n*motivo do afk:*`} 

//anonymous_chat.js
const smsChatAn1 = () => { return `${lenguajeGB['smsAvisoFG']()}não está em um chat anônimo!`} 
const smsChatAn2 = () => { return `*para iniciar um chat anônimo use o comando _.start_\n`} 
const smsChatAn3 = () => { return `⚡ INICIAR CHAT ANÔNIMO`} 
const smsChatAn4 = () => { return `${lenguajeGB['smsAvisoRG']()}🪐 saiu do chat anônimo.`} 
const smsChatAn5 = () => { return `${lenguajeGB['smsAvisoAG']()}o outro usuário saiu do chat anônimo.`}  
const smsChatAn6 = () => { return `caso queira ir para outro chat anônimo, use novamente o comando _.start_.`} 
const smsChatAn7 = () => { return `${lenguajeGB['smsAvisoAG']()}você ainda está em um chat anônimo ou esperando alguém entrar.`} 
const smsChatAn8 = () => { return `caso queira ir para outro chat anônimo, use novamente o comando _.start_.\n`} 
const smsChatAn9 = () => { return `🍁 SAIR DO CHAT ANÔNIMO`} 
const smsChatAn10 = () => { return `${lenguajeGB['smsAvisoEG']()}✨ podem conversar`} 
const smsChatAn11 = () => { return `alguém entrou no chat anônimo!`} 
const smsChatAn12 = () => { return `❇️ outro usuário`} 
const smsChatAn13 = () => { return `${lenguajeGB['smsAvisoRG']()}🐈 aguardando alguém entrar no chat anônimo. tenha paciência, por favor.`} 

//Botones de Menú 
const smsBotonM1 = () => { return `⚡ menu inicial`} 
const smsBotonM2 = () => { return `💫 menu completo`} 
const smsBotonM3 = () => { return `🎒 inventário`} 
const smsBotonM4 = () => { return `usuários`}
const smsBotonM5 = () => { return `elo`}
const smsBotonM6 = () => { return `nível`}
const smsBotonM7 = () => { return `premium`}
const smsTex1 = () => { return '*menu de buscar*'}
const smsTex2 = () => { return '*modificador de áudio*'}
const smsTex3 = () => { return '*MENÚ +18*'}
const smsTex4 = () => { return '*conteúdo dinâmico*'}
const smsTex5 = () => { return '*buscas e downloads*'}
const smsTex6 = () => { return '*MENU +18 PREMIUM*'}
const smsTex7 = () => { return '⠇ imagens +18 de qualidade e variedade\n⠇ vídeos +18 somente para você\n⠇ stickers +18 disponíveis'}
const smsTex8 = () => { return '*menu de conversão*'}
const smsTex9 = () => { return '*menu de downloads*'}
const smsTex10 = () => { return '*menu de jogos dinâmicos*'}
const smsTex11 = () => { return '*menu para grupos*'}
const smsTex12 = () => { return '*menu de ferramentas*'}
const smsTex13 = () => { return '*menu de informações*'}
const smsTex14 = () => { return '*menu de efeitos e logos*'}
const smsTex15 = () => { return '*menu de logos 2*'}
const smsTex16 = () => { return '*menu de áudios*'}
const smsTex17 = () => { return '*não é necessário usar prefixo em áudios*'}
const smsTex18 = () => { return 'lista de áudios'}
const smsTex19 = () => { return '*pode selecionar o áudio!*'}
const smsTex20 = () => { return '*menu para owners*'}
const smsTex21 = () => { return '*menu rpg*'}
const smsTex22 = () => { return '*menu de stickers e filtros*'}
const smsTex23 = () => { return '*menu de memes e animes aleatórios*'}

//info-grupos-lista.js
const smsLisA = () => { return '_*está nos seguintes grupos:*_'}
const smsLisB = () => { return '*✦ total de grupos:*'}
const smsLisC = () => { return '*✦ grupo:*'}
const smsLisD = () => { return '*✦ ID:*'}
const smsLisE = () => { return '*✦ participantes:*'}

//ad
const smsMalused = () => { return '⚡ uso correto do comando:\n'}
const smsMalused2 = () => { return `${lenguajeGB['smsAvisoMG']()} use o comando como no exemplo:\n`}
const smsMalused3 = () => { return `${lenguajeGB['smsAvisoMG']()} você deve usar o comando ou responder à mensagem de alguém como neste exemplo:\n`}

//gc-config_time.js
const smsGrupoTime1 = () => { return '🔓 *_ABRIR GRUPO EM UMA HORA_*'}
const smsGrupoTime2 = () => { return '🔒 *_FECHE O GRUPO EM UMA HORA_*'}
const smsGrupoTime3 = () => { return 'GRUPO'}
const smsGrupoTime4 = () => { return 'FECHADO'}
const smsGrupoTime5 = () => { return 'ABERTO'}
const smsGrupoTime6 = () => { return 'DURANTE'}
const smsGrupoTime7 = () => { return '🔒 *O GRUPO ESTÁ FECHADO, SOMENTE ADMINISTRADORES PODEM ENVIAR MENSAGENS*'}
const smsGrupoTime8 = () => { return '🔓 *O GRUPO ESTÁ ABERTO, TODOS PODEM ENVIAR MENSAGENS*'}
const smsGrupoTime9 = () => { return '🔓 ABRIR GRUPO DURANTE '}
const smsGrupoTime10 = () => { return '🔒 FECHE O GRUPO DURANTE '}
const smsGrupoTime11 = () => { return ' HORA'}
const smsGrupoTime12 = () => { return 'PERMITIR QUE O GRUPO FIQUE ABERTO POR '}
const smsGrupoTime13 = () => { return 'PERMITIR QUE O GRUPO FECHE POR '}

//grupo-add.js
const smsAddB1 = () => { return `${lenguajeGB['smsAvisoFG']()}não foi possível adicionar o número ao grupo, verifique se está correto. talvez tenha saído recentemente ou sua privacidade está definida.`}
const smsAddB2 = () => { return `${lenguajeGB['smsAvisoFG']()}não foi possível adicionar o número ao grupo. verifique se está correto ou o adicione manualmente.`}

//grupo-admins.js
const smsAddB3 = () => { return `*NOTIFICAÇÃO PARA ADMINISTRADORES*`}
const smsAddB4 = () => { return `*PRESENÇA DO ADMINISTRADOR*`}
const smsAddB5 = () => { return `*MENSAGEM:*`}
const smsAddB6 = () => { return `Solicito aos administradores, por favor.`}

//grupo-advertencia.js
const smsAdveu1 = () => { return `${lenguajeGB['smsAvisoAG']()}pode usar este comando somente se a função estiver ativada:\n`}
const smsAdveu2 = () => { return 'motivo'}
const smsAdveu3 = () => { return `${lenguajeGB['smsAvisoMG']()}escreva o motivo do aviso.\n`}
const smsAdveu4 = () => { return 'recebeu uma advertência neste grupo.'}
const smsAdveu5 = () => { return 'aviso'}
const smsAdveu6 = () => { return '🎒 inventário'} 
const smsAdveu7 = () => { return 'você recebeu aviso várias vezes.'}
const smsAdveu8 = () => { return 'será removido.'}
const smsAdveu9 = () => { return 'muito obrigado. 😇'}
const smsAdveu10 = () => { return 'um aviso foi removido deste grupo!'}
const smsAdveu11 = () => { return 'antes:'}
const smsAdveu12 = () => { return 'agora:'}

//grupo-demote.js || grupo-promote.js 
const smsDemott = () => { return 'o número não é válido, tente novamente respondendo a mensagem de alguém ou use o comando como no exemplo:\n'}
const smsDemott2 = () => { return 'agora é administrador do grupo!'}
const smsDemott3 = () => { return 'não é mais administrador do grupo!'}

//grupo-info.js
const smsGI1 = () => { return '*informaçaõ do grupo*'}
const smsGI2 = () => { return '*ID do grupo*'}
const smsGI3 = () => { return '*nome do grupo*'}
const smsGI4 = () => { return '*descrição do grupo*'}
const smsGI5 = () => { return '*não tem nenhuma descrição*'}
const smsGI6 = () => { return '*número de usuários*'}
const smsGI7 = () => { return '*usuários*'}
const smsGI8 = () => { return '*criador do grupo*'}
const smsGI9 = () => { return '*administradores do grupo*'}
const smsGI10 = () => { return '⚙️ configurações do grupo'}

//grupo-kick.js
const smskick1 = () => { return `${lenguajeGB['smsAvisoAG']()}marque a pessoa ou mencione alguma mensagem dela para excluir. por exemplo:\n`}
const smskick2 = () => { return `excluído(a).`}
const smskick3 = () => { return `não se pode remover o criador do grupo.`}
const smskick4 = () => { return `não está neste grupo. 👻`}

//grupo-tagall.js
const smstagaa = () => { return `⚡ marcando todos do grupo`}

//grupo-setbye.js
const smsSetB = () => { return `${lenguajeGB['smsAvisoEG']()}a mensagem de despedida do grupo foi configurada.`}
const smsSetB2 = () => { return `${lenguajeGB['smsAvisoIIG']()}escreva a mensagem de despedida - você também pode usar "@" para adicionar mais informações, como:\n\n⚡ _@user (menciona o usuário)_`}

//grupo-setwelcome.js
const smsSetW = () => { return `${lenguajeGB['smsAvisoEG']()}a mensagem de boas-vindas do grupo foi configurada.`}
const smsSetW2 = () => { return `${lenguajeGB['smsAvisoIIG']()}escreva a mensagem de boas-vindas - você também pode usar "@" para adicionar mais informações, como:\n\n⚡ _@user (menciona o usuário)_\n⚡ _@subject (nome do grupo)\n⚡ _@desc (descrição do grupo)_`}

//grupo-setdesc.js
const smsDest = () => { return `${lenguajeGB['smsAvisoEG']()}a descrição do grupo foi configurada.`}

//grupo-setname.js
const smsNam1 = () => { return `${lenguajeGB['smsAvisoEG']()}*o nome do grupo foi trocado.`}
const smsNam2 = () => { return `${lenguajeGB['smsAvisoMG']()}*escreva o novo nome do grupo.`}
const smsNam3 = () => { return `${lenguajeGB['smsAvisoFG']()}o nome do grupo não deve ter mais de 25 caracteres.`}

//grupo-restaurarEnlace.js
const smsRestGp = () => { return `${lenguajeGB['smsAvisoEG']()}o link do grupo foi redefinido.`}

//Botón 
const smsSig = () => { return `➡️ próximo`}
const smsSigPrem = () => { return `❤️‍🔥 próximo`}
const smsCont18Porn = () => { return `🔞 *conteúdo*`} //texto
const smsCont18Porn2 = () => { return `🔞 *conteúdo*`} //texto
const smsCont18PornP = () => { return `🌟 *conteúdo premium*`} //texto
const smsCont18PornP2 = () => { return `conteúdo premium`} //texto  

//propietario(a).js
const smsJoin = (user) => { return `*${packname}* - é um bot do WhatsApp que vai te ajudar a realizar diversas atividades de no privado ou em grupo. você também pode se divertir com suas múltiplas funções, aproveite o botAnuudek! 😁\n\n💖 botAnuudek foi convidado por: @${user}!`}
const smsJoin1 = (usedPrefix, command) => { return lenguajeGB['smsAvisoMG']() + `entre por algum link de grupo, por exemplo:\n_${usedPrefix + command}_ ${nna}`}
const smsJoin2 = () => { return lenguajeGB['smsAvisoEG']() + `*${packname}* entrou no grupo! ✅`}

//propietario(a).js
const smsBCMensaje = (usedPrefix, command) => { return `responde à mensagem ou utilize o comando usando _${usedPrefix + command}_.`}
const smsBCMensaje2 = () => { return `enviando mensagem oficial, aguarde um momento...`}
const smsBCMensaje3 = (totalPri, time) => { return `✅ a mensagem foi enviada para ${totalPri} chats privados.\n\ntempo total de envio: ${time}*\n${totalPri >= 3000 ? '\nnão foi enviado para todos os chats privados para evitar saturação.' : ''}`}

//propietario(a).js
const smsBCbot1 = () => { return `✅ mensagem enviada:`}
const smsBCbot2 = () => { return `privado`}
const smsBCbot3 = () => { return `grupo`}
const smsBCbot4 = () => { return `total`}
const smsBCbot5 = () => { return `tempo total de envio:`}
const smsBCbot6 = () => { return `não foi enviado para todos os chats privados para evitar saturação.`}
const smsBCbot7 = () => { return `✅ *comunicado oficial*`}

//propietario(a).js
const smsChatGP1 = () => { return "enviando mensagem, aguarde um momento..."}
const smsChatGP2 = (readMS, dia, mes, año, fecha, tiempo) => { return `✅ *Ccomunicado oficial*\n${readMS}\n\`\`\`${dia}, ${mes} ${año}\`\`\`\n\`\`\`${fecha} || ${tiempo}\`\`\`\n\n`}
const smsChatGP3 = (totalGP) => { return `✅ a mensagem foi enviada para o total de *${totalGP}* grupos.`}

//propietario(a.js
const smsPropban1 = (usedPrefix, command, bot) => { return `${lenguajeGB['smsAvisoMG']()}*marque alguém, responda alguma mensagem do usuário ou escreva o número que deseja proibir comando. por exemplo:\n_${usedPrefix + command} @${bot}_.`}
const smsPropban2 = (bot) => { return `${lenguajeGB['smsAvisoFG']()}o @${bot} não pode ser banido com esse comando...`}
const smsPropban3 = (ownerNumber) => { return `${lenguajeGB.smsAvisoIIG()}não pode banir o owner @${ownerNumber} do ${packname}.`}
const smsPropban4 = (number) => { return `${lenguajeGB.smsAvisoIIG()}o número @${number} já está banido!`}
const smsPropban5 = () => { return `${lenguajeGB['smsAvisoEG']()}o usuário foi banido. 😱\nnão poderá usar o ${gt}`}
const smsPropban6 = (number, usr) => { return `${lenguajeGB.smsAvisoAG()}@${number} foi banido por @${usr}. não poderá usar comandos até ser desbanido. 🥲`}
const smsPropban7 = (usedPrefix, command, number) => { return `${lenguajeGB['smsAvisoFG']()}*SURGIÓ UN ERROR, PUEDE SER QUE EL USUARIO NO ESTE EN MI BASE DE DATOS INTENTE ESCRIBIR ${usedPrefix + command} ${number}*\n\`\`\`SI EL ERROR CONTINÚA REPORTE ESTE COMANDO\`\`\``}

//jadibot-serbot.js
const smsIniJadi = () => { return `*⊹ • • • ミ★ ${global.packname} ミ★• • • ⊹*\n\n*ღ Versión de ${global.packname} » _${global.vs}_*\n*ღ Versión de JadiBot » _${global.vsJB}_*\n\n🟢 *_FUNCIÓN SER SUB BOT_* 🟢\n\n*➡️ Con otro celular o en la PC escanea este QR para convertirte en Sub Bot*\n\n*1️⃣ Diríjase en los tres puntos en la esquina superior derecha*\n*2️⃣ Ir a la opción Dispositivos vinculados*\n*3️⃣ Escanee este codigo QR para iniciar sesión*\n\n📢 *¡Este código QR expira en 45 segundos!*`}
const smsSoloOwnerJB = () => { return `${lenguajeGB['smsAvisoAG']()}*ESTE COMANDO ESTÁ DESACTIVADO POR MÍ PROPIETARIO(A)*`}
const smsJBPrincipal = () => { return `${lenguajeGB['smsAvisoAG']()}🔵 *PARA SER SUB BOT DIRÍJASE AL NÚMERO PRINCIPAL*\n*ღ Ingrese al siguiente enlace:*\n`}
const smsJBConexion = () => { return `${lenguajeGB['smsAvisoFG']()}🟡 *LA CONEXIÓN SE HA CERRADO DE MANERA INESPERADA, INTENTAREMOS RECONECTAR...*`}
const smsJBConexionClose = () => { return `${lenguajeGB['smsAvisoFG']()}🔴 *LA CONEXIÓN SE HA CERRADO, DEBERÁ DE CONECTARSE MANUALMENTE USANDO EL COMANDO #serbot Y REESCANEAR EL NUEVO CÓDIGO QR*`}
const smsJBConexionTrue = () => { return `${lenguajeGB['smsAvisoEG']()}🟢 *CONEXIÓN CON ÉXITO!!!*`}
const smsJBConexionTrue2 = () => { return `${lenguajeGB['smsAvisoEG']()}🟢 *CONEXIÓN CON ÉXITO!!! PUEDE CONECTARSE USANDO SU (ID) O USAR:*`}
const smsJBCargando = () => { return `${lenguajeGB['smsAvisoIIG']()}⚪ *ESTÁ CONECTADO(A)!! POR FAVOR ESPERE SE ESTÁ CARGANDO LOS MENSAJES...*\n\n♻️ *OPCIONES DISPONIBLES:*\n*» #stop _(Detener la función Sub Bot)_*\n*» #eliminarsesion _(Borrar todo rastro de Sub Bot)_*\n*» #serbot _(Obtener nuevo código QR para ser Sub Bot)_*`}
const smsJBInfo1 = () => { return `💖 *ENLACE ÚTIL*`}
const smsJBInfo2 = () => { return `💖 *La función es estable, sí presenta algún inconveniente Comuníquese al correo: centergatabot@gmail.com*\n💝 *Puede hacer una Donación voluntaria por PayPal: ${global.paypal}*\n\n*Muchas Gracias por el apoyo a ${global.packname}*`}

//jadibot-deleteSesion.js
const smsJBDel = () => { return `${lenguajeGB['smsAvisoAG']()}*USE ESSE COMANDO COM O BOT PRINCIPAL*`}
const smsJBAdios = () => { return `${lenguajeGB['smsAvisoEG']()}*IREI SENTIR SAUDADES, ${global.packname}. ADEUS! 🥹*`}
const smsJBCerrarS = () => { return `${lenguajeGB['smsAvisoEG']()}*VOCÊ SAIU E EXCLUIU TODOS OS RASTREIOS*`}
const smsJBErr = () => { return `*VOCÊ SAIU COMO SUB BOT* ♻️`}

//comandos+18-adult.js
const smsContAdult = () => { return `${lenguajeGB['smsAvisoAG']()}*LOS COMANDOS 🔞 ESTÁN DESACTIVADOS, SI USTED ES MI CREADOR(A) USE .on modohorny*`}

//comandos+18-menu.js
const smsList1 = () => { return `você não tem o suficiente `}
const smsList2 = () => { return `\nclique aqui para comprar `}
const smsList3 = () => { return `conteúdo disponível 😸`}
const smsList4 = () => { return `conteúdo não disponível 😿\nclique aqui para comprar `}
const smsList5 = () => { return `*Sescolha uma opção*\n*da lista para verificar*\n*o conteúdo* 😋`}
const smsList6 = () => { return `👀 ver lista`}

//descargas-consejos.js
const smsConj = () => { return `🍃 novo conselho`}
const smsFras = () => { return `🍃 nova frase`}

//info-contacto.js
const smsContacto1 = () => { return ' sou o ' + packname + '. um bot de whatsapp multitarefas.'}
const smsContacto2 = () => { return 'sou o dono de ' + packname + '. caso tenha alguma dúvida pode me chamar ✌️'}
const smsContacto3 = () => { return '👑 owner'}
const smsContacto4 = () => { return 'contato oficial do botAnuudek 🐈'}
const smsContacto5 = () => { return '🐣 posso te ajudar em algo?'}
const smsContacto6 = () => { return 'não tenho e-mail 🙏'}
const smsContacto7 = () => { return '🌎 global'}
const smsContacto8 = () => { return 'essa conta é um bot. 👀'}


export default { lenguaje, smsConexioncerrar, smsConexionperdida, smsConexionreem, smsConexionreinicio, smsConexiontiem, smsConexiondescon, smsAvisoRG, smsJoin, smsJoin1, smsJoin2, smsPropban1, smsPropban2, smsPropban3, smsPropban4, smsPropban5, smsPropban6, smsPropban7, smsLisA, smsLisB, smsLisC, smsLisD, smsLisE, smsChatGP1, smsChatGP2, smsChatGP3, smsBCMensaje, smsBCMensaje2, smsBCMensaje3, smsAvisoAG, smsAvisoIIG, smsBCbot1, smsBCbot2, smsBCbot3, smsBCbot4, smsBCbot5, smsBCbot6, smsBCbot7, smsAvisoFG, smsAvisoMG, smsAvisoEEG, smsAvisoEG, smsRowner, smsOwner, smsMods, smsPremium, smsGroup, smsPrivate, smsAdmin, smsBotAdmin, smsUnreg, smsRestrict, smsTime, smsUptime, smsVersion, smsTotalUsers, smsMode, smsModePublic, smsModePrivate, smsBanChats, smsBanUsers, smsPareja, smsResultPareja, smsSaludo, smsDia, smsTarde, smsTarde2, smsNoche, smsListaMenu, smsLista1, smsLista2, smsLista3, smsLista4, smsLista5, smsLista6, smsLista7, smsLista8, smsLista9, smsLista10, smsLista11, smsLista12, smsLista13, smsLista14, smsLista15, smsLista16, smsLista17, smsLista18, smsLista19, smsLista20, smsLista21, smsLista22, smsLista23, smsLista24, smsLista25, smsLista26, smsLista27, smsLista28, smsLista29, smsLista30, smsLista31, smsLista32, smsLista33, smsLista34, smsLista35, smsWelcome, smsBye, smsSpromote, smsSdemote, smsSdesc, smsSsubject, smsSicon, smsSrevoke, smsConexion, smsClearTmp, smsCargando, smspurgeSession, smspurgeOldFiles, smspurgeSessionSB1, smspurgeSessionSB2, smspurgeSessionSB3, smspurgeOldFiles1, smspurgeOldFiles2, smspurgeOldFiles3, smspurgeOldFiles4, smsTextoYT, smsApagar, smsEncender, smsEnlaceTik, smsEnlaceYt, smsEnlaceTel, smsEnlaceFb, smsEnlaceIg, smsEnlaceTw, smsAllAdmin, smsSoloOwner, smsCont1, smsCont2, smsCont3, smsCont4, smsCont5, smsCont6, smsCont7, smsCont8, smsCont9, smsCont10, smsCont11, smsCont12, smsCont13, smsCont14, smsCont15, smsCont16, smsCont17, smsCont18, smsCont19, smsCont20, smsCont21, smsInt1, smsInt2, smsAdwa, smsEnlaceWat, smsEnlaceWatt, smsNoSpam, smsNoSpam2, smsConMenu, smsMalError, smsMalError2, smsMalError3, smsToxic1, smsToxic2, smsToxic3, smsToxic4, smsToxic5, smsToxic6, smsToxic7, eExp, eDiamante, eDiamantePlus, eToken, eEsmeralda, eJoya, eMagia, eOro, eGataCoins, eGataTickers, eEnergia, ePocion, eAgua, eBasura, eMadera, eRoca, ePiedra, eCuerda, eHierro, eCarbon, eBotella, eLata, eCarton, eEletric, eBarraOro, eOroComun, eZorroG, eBasuraG, eLoboG, eMaderaG, eEspada, eCarnada, eBillete, ePinata, eGancho, eCanaPescar, eCComun, ePComun, eCMistica, eCMascota, eCJardineria, eClegendaria, eUva, eManzana, eNaranja, eMango, ePlatano, eSUva, eSManzana, eSNaranja, eSMango, eSPlatano, eCentauro, eAve, eGato, eDragon, eZorro, eCaballo, eFenix, eLobo, ePerro, eAMascots, eCCentauro, eCAve, eCMagica, eCDragon, eACaballo, eCFenix, smsWel1, smsWel2, smsParaAdmins, smsDete1, smsDete2, smsANivel1, smsANivel2, smsParaAdYOw, smsParaOw, smsRestri1, smsRestri2, smsLlamar1, smsLlamar2, smsModP1, smsModP2, smsModAd1, smsModAd2, smsLect1, smsLect2, smsTempo1, smsTempo2, smsStik1, smsStik2, smsStickA1, smsStickA2, smsReacc1, smsReacc2, smsAudi1, smsAudi2, smsModHor1, smsModHor2, smsAntitoc1, smsAntitoc2, smsModOb1, smsModOb2,
smsAntiEli1, smsAntiEli2, smsAntiInt1, smsAntiInt2, smsAntiE1, smsAntiE2, smsAntiEE1, smsAntiEE2, smsAntiTT1, smsAntiTT2, smsAntiYT1, smsAntiYT2, smsAntiTEL1, smsAntiTEL2, smsAntiFB1, smsAntiFB2, smsAntiIG1, smsAntiIG2, smsAntiTW1, smsAntiTW2, smsSOLOP1, smsSOLOP2, smsSOLOG1, smsSOLOG2, smsNoGg, smsConfi1, smsConfi2, smsConfi3, smsConfi4, smsConfi5, smsConfi6, smsConfi7, smsConfi8, smsConfi9, smsConfi10, smsMens1, smsMens2, smsMens3, smsMens4, smsMens5, smsMensError1, smsMensError2, smsAntiView, smsAutoLv1, smsAutoLv2, smsAutoLv3, smsAutoLv4, smsAutoLv5, smsAutoLv6, smsAutoLv7, smsAntiSp1, smsAntiSp2, smsAutoStik, smsBottem1, smsBottem2, smsBottem3, smsPremI,
smsAfkM1, smsAfkM2, smsAfkM3, smsAfkM4, smsAfkM5, smsAfkM6, smsAfkM1A, smsAfkM1B, smsChatAn1, smsChatAn2, smsChatAn3, smsChatAn4, smsChatAn5, smsChatAn6, smsChatAn7, smsChatAn8, smsChatAn9, smsChatAn10, smsChatAn11, smsChatAn12, smsChatAn13, smsBotonM1, smsBotonM2, smsBotonM3, smsBotonM4, smsBotonM5, smsBotonM6, smsBotonM7, smsTex1, smsTex2, smsTex3, smsTex4, smsTex5, smsTex6, smsTex7, smsTex8, smsTex9, smsTex10, smsTex11, smsTex12, smsTex13, smsTex14, smsTex15, smsTex16, smsTex17, smsTex18, smsTex19, smsTex20, smsTex21, smsTex22, smsTex23, smsMalused, smsGrupoTime1, smsGrupoTime2, smsGrupoTime3, smsGrupoTime4, smsGrupoTime5, smsGrupoTime6, smsGrupoTime7, smsGrupoTime8, smsGrupoTime9, smsGrupoTime10, smsGrupoTime11, smsGrupoTime12, smsGrupoTime13, smsAddB1, smsAddB2, smsAddB3, smsAddB4, smsAddB5, smsAddB6, smsAdveu1, smsMalused2, smsAdveu2, smsAdveu3, smsAdveu4, smsAdveu5, smsAdveu6, smsAdveu7, smsAdveu8, smsAdveu9, smsMalused3, smsAdveu10, smsAdveu11, smsAdveu12, smsDemott, smsDemott2, smsDemott3,
smsGI1, smsGI2, smsGI3, smsGI4, smsGI5, smsGI6, smsGI7, smsGI8, smsGI9, smsGI10, smsLista22_1, smsCodigoQR, smsConexionOFF, smskick1, smskick2, smskick3, smskick4, smstagaa,
smsSetB, smsSetB2, smsSetW, smsSetW2, smsDest, smsNam1, smsNam2, smsNam3, smsRestGp, smsSig, smsSigPrem, smsCont18Porn, smsCont18Porn2, smsCont18PornP, smsCont18PornP2,
smsIniJadi, smsSoloOwnerJB, smsJBPrincipal, smsJBConexion, smsJBConexionClose, smsJBConexionTrue, smsJBConexionTrue2, smsJBCargando, smsJBInfo1, smsJBInfo2, smsJBDel, smsJBAdios, 
smsJBCerrarS, smsJBErr, smsContAdult, smsList1, smsList2, smsList3, smsList4, smsList5, smsList6, smsConj, smsFras, smsContacto1, smsContacto2, smsContacto3, smsContacto4,
smsContacto5, smsContacto6, smsContacto7, smsContacto8, smsAfkQ1, smsAfkQ2, smsAfkTime, smsAfkResultTime }
