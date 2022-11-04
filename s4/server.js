const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

//texto plano
app.use(express.text());

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    const data = fs.readFileSync(
        path.join(__dirname + '/file.html'), 'utf-8');
    res.send(data);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

