const path = require('path');
//const server = require(path.join(__dirname, '', 'server.js'));
const fs = require('fs');

/* fs.writeFile(path.join(__dirname, 'ejemplo1.txt'), 'Hola mundo', (err) => {
    if (err) console.log(err);
    console.log('Archivo creado');
});

fs.readFile(path.join(__dirname, 'ejemplo1.txt'), 'utf8', (err, data) => {
    if (err) console.log(err);
    console.log(data);
});

fs.appendFile(path.join(__dirname, 'ejemplo1.txt'), '\nNueva linea!!!', (err) => {
    if (err) console.log(err);
    console.log('Archivo actualizado');
}); */

fs.writeFileSync(path.join(__dirname, 'ejemplo1.txt'), 'Hola mundo');

fs.readFileSync(path.join(__dirname, 'ejemplo1.txt'), 'utf8');

fs.appendFileSync(path.join(__dirname, 'ejemplo1.txt'), '\nNueva linea!!!');
