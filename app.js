const http = require('http')
const port = parseInt(process.argv[2] || '3000')

const options = [
  "Random string 1",
  "Random string 2",
  "Random string 3",
  "Random string 4",
  "Random string 5"
]

const server = http.createServer((req, res) => {
  const randomIndex = Math.floor(Math.random() * options.length)
  const payload = JSON.stringify({
    port,
    processID: process.pid,
    advise: options[randomIndex]
  })

  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(payload)
})

server.listen(port)
console.log(`advise service running on port ${port}`)