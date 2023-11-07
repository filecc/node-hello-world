require('dotenv').config()
const http = require('http')

const port = process.env.PORT || 8080
const host = process.env.HOST || 'localhost'

const randomPhrases = [
    "Il successo non &egrave; la chiave della felicit&agrave;. La felicit&agrave; &egrave; la chiave del successo. Se ami ci&ograve; che fai, avrai successo. - Albert Schweitzer",
  "Il fallimento &egrave; l'opportunit&agrave; di cominciare di nuovo con maggiore intelligenza. - Henry Ford",
  "Non aspettare. Il momento perfetto non arriver&agrave; mai. Inizia da dove sei, con ci&ograve; che hai, e fai del tuo meglio. - Napoleon Hill",
  "Il modo migliore per prevedere il futuro &egrave; crearlo. - Peter Drucker",
  "Ogni sfida rappresenta un'opportunit&agrave;. Tu devi solo trovare il modo di trasformarla in un vantaggio. - Mary Kay Ash",
  "Il successo &egrave; andare da un fallimento all'altro senza perdere l'entusiasmo. - Winston Churchill",
  "Le uniche limitazioni che avrai saranno quelle che ti imponi. - Les Brown",
  "Se vuoi qualcosa che non hai mai avuto, devi essere disposto a fare qualcosa che non hai mai fatto. - Thomas Jefferson",
  "Il successo &egrave; camminare da un fallimento all'altro senza perdere l'entusiasmo. - Confucio"
]

const getRandomPhrase = (arrayOfPhrases, index) => {
    return arrayOfPhrases[index]
}


const server = http.createServer((req, res) => {
    let randomIndex = Math.round(Math.random() *( randomPhrases.length - 1)) 
    
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>${process.env.MESSAGE}:</h1>
    <p>${getRandomPhrase(randomPhrases, randomIndex)}</p>
`)

}).listen(port, host, ()=>console.log(`Server started at http://${host}:${port}`))