const http = require('http');
const moment = require('moment');
const hostname = 'localhost';
const date = moment().format('MMMM Do YYYY, h:mm:ss a');

//Responda una petición a /pin
const server = http.createServer((req, res) => {
    if (req.method === 'GET'){
        switch (req.url) {
            case '/pin':
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(
                JSON.stringify({
                    success: true,
                    body: 'pong'
                }));
                break;
            case '/health':
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(
                JSON.stringify({
                    success: true,
                    body: { version: '1.0.0',date }

                }));
                break;
            default:
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(
                JSON.stringify({
                    success: true,
                    body: 'BEDU API v1.0.0'
                })
                );
                break;
        }
    }
});

const port = 3003;
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});