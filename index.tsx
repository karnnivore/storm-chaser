//load http module
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

//create http server listen on port 3000
const server = http.createServer((req, res) => {
  //set http response header with http status and content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

//listen for request on port 3000, and as a callback function have 
//port listened on log
server.listen(port, hostname, () => {
  console.log(`Server running at https://${hostname}:${port}/`);
})