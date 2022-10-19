const http = require('http');
const hostname = 'localhost';
const router = require('./router');


const server = http.createServer((req, res) => {
  res.statusCode = 418;
  res.setHeader('Content-Type', 'application/json');
  res.end(
    JSON.stringify(
        {
            success: true,
            canIGetCoffee: false,
            responseCode: 0123
        }
    )
  );
});

const port = 3003;
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});