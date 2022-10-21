const path = require('path');
//const server = require(path.join(__dirname, '', 'server.js'));
const fs = require('fs');

//Escribir un programa llamado grep.js que lea el archivo input.txt, lo procese e imprima por pantalla cuantas líneas, cuantos espacio y cuantos caracteres contiene el archivo.
fs.readFile(path.join(__dirname, 'input.txt'), 'utf8', (err, data) => {
    if (err) console.log(err);
    //recorre un archivo y cuenta las lineas
    let lineas = data.split('\n').length;
    //recorre un archivo y cuenta los espacios
    let espacios = data.split(' ').length;
    //recorre un archivo y cuenta los caracteres
    let caracteres = data.length;
    console.log(`El archivo tiene ${lineas} lineas, ${espacios} espacios y ${caracteres} caracteres`);
    //console.log(`El archivo tiene ${espacios} espacios`);
    //console.log(`El archivo tiene ${caracteres} caracteres`);
    //console.log(data);
});