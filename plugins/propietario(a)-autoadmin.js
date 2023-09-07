let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'Nggk'
  if (isAdmin) throw `você já é administrador desse grupo! <3`
  await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")
}
handler.command = /^autoadmin$/i
handler.rowner = true
handler.botAdmin = true
export default handler
