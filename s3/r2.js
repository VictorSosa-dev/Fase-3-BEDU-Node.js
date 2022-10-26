//leer 3 archivos con promesas

const fs = require('fs');
const path = require('path');

function readFilePromise(file){
    return new Promise(function(resolve, reject){
        fs.readFile(file, "utf-8", function(err, data){
            if(err) reject(err);
            resolve(data);
        });
    });
}

let file1 = readFilePromise(path.join(__dirname, 'file1.txt'))
let file2 = readFilePromise(path.join(__dirname, 'file2.txt'))
let file3 = readFilePromise(path.join(__dirname, 'file3.txt'))

Promise.all([file1, file2, file3])
    .then(data => console.log(data))
    .catch(err => console.log(err));