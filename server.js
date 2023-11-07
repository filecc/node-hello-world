require('dotenv').config()
const http = require('http')

const port = process.env.PORT || 8080
const host = process.env.HOST || 'localhost'

const randomPhrase = [
    "Il successo non è la chiave della felicità. La felicità è la chiave del successo. Se ami ciò che fai, avrai successo. - Albert Schweitzer",
  "Il fallimento è l'opportunità di cominciare di nuovo con maggiore intelligenza. - Henry Ford",
  "Non aspettare. Il momento perfetto non arriverà mai. Inizia da dove sei, con ciò che hai, e fai del tuo meglio. - Napoleon Hill",
  "Il modo migliore per prevedere il futuro è crearlo. - Peter Drucker",
  "Ogni sfida rappresenta un'opportunità. Tu devi solo trovare il modo di trasformarla in un vantaggio. - Mary Kay Ash",
  "Il successo è andare da un fallimento all'altro senza perdere l'entusiasmo. - Winston Churchill",
  "Le uniche limitazioni che avrai saranno quelle che ti imponi. - Les Brown",
  "Non smettere di sognare, perché i sogni si realizzano. - Walt Disney",
  "Se vuoi qualcosa che non hai mai avuto, devi essere disposto a fare qualcosa che non hai mai fatto. - Thomas Jefferson",
  "Il successo è camminare da un fallimento all'altro senza perdere l'entusiasmo. - Confucio"
]

let counter = 0


const server = http.createServer((req, res) => {
    res.end(process.env.MESSAGE)
}).listen(port, host, ()=>console.log(`Server started at http://${host}:${port}`))