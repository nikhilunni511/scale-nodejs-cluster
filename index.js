const http = require('http');
const cluster = require('cluster');
const cpus = require('os').cpus();
const numCPUs = cpus.length;

if (cluster.isMaster) {
  console.log('This is the master process: ', process.pid);
  
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

} else {
  http.createServer((req, res) => {
    const message = `worker ${process.pid}...`;
    console.log(message);
    res.end(message);
  }).listen(3000);
}
