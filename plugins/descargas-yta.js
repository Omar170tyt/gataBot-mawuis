import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!args[0]) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}πππππππ ππ ππππΌπΎπ πΏπ ππππππ½π ππΌππΌ πΏπππΎπΌπππΌπ ππ πππΏππ\nπππππππ\n*${usedPrefix + command} https://youtu.be/85xI8WFMIUY*\n\nπππππ πππ ππππππ½π ππππ ππ πΏππππππΌπΏ πππ πππΏππ\nπππΌππππ\n*${usedPrefix + command} https://youtu.be/c5gJRzCi0f0*`, fkontak, m)
await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()}ππ ππππΌ πΏπππΎπΌπππΌππΏπ ππ πππΏππ, ππππππ ππ πππππππ πππ ππΌπππ\n\nππππ πππΏππ ππ πΏππππππΌπΏπππ, ππΌππ πΌ ππππππ ππππΌππ`, fkontak, m)
try {
let q = '128kbps'
let v = args[0]
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
const dl_url = await yt.audio[q].download()
const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
await conn.sendFile(m.chat, dl_url, ttl + '.mp3', null, m, false, { mimetype: 'audio/mp4' })
} catch {
try {
let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${args[0]}`)    
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error'
await conn.sendMessage(m.chat, { audio: { url: lolh.result.link }, fileName: `${n}.mp3`, mimetype: 'audio/mp4' }, { quoted: m })
//await conn.sendFile(m.chat, lolh.result.link, `${n}.mp3`, null, m, false, { mimetype: 'audio/mp4' })    
} catch {
await conn.reply(m.chat, '${lenguajeGB['smsAvisoFG']()}ππ πππππ½ππ πππ ππ πΌππΎππππ πππΌ πππ ππππΌπΏπ. πππππππ πΎππ ππππΌ πππΎπππ πΏπ πΏπππΎπΌπππΌ\n\nππ ππ ππππππ½ππ πππΌπ πππ ππππ ππ ππππ πππΌππ. πππ πΌππππππ', m)}
}}
handler.command = /^fgmp3|dlmp3|getaud|yt(a|mp3)$/i
export default handler
