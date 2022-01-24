const http = require('http');
const host = '127.0.0.1';
const portnumber = 8000;

const nodeserver = http.createServer((req, res) => {
  res.end('Hello world');
});

nodeserver.listen(portnumber, host, () => {
  console.log(`Running Server at http://${host}:${portnumber}/`);
});
