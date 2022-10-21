const https = require('https');
const fs = require('fs');

function getAPOD(){
    https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
        let data = '';
        resp.setEncoding('utf8');
        resp.on('data', (chunk) => {
            data += chunk;
        })

        resp.on('end', () => {
            let body = JSON.parse(data);
            console.log(body.title);
            console.log(body.explanation);
            console.log(body.url);
            descargarImagen(body.url, 'imagen.jpg');
        }).on('error', (err) => {
            console.log(err);
        })
    });
}   

getAPOD();
// Función ejemplo para guardar una imagen de una url externa
function descargarImagen(url, nombreArchivo) {
    let file = fs.createWriteStream(__dirname + '/' + nombreArchivo);
    let request = https.get(url, function (response) {
      response.pipe(file);
    });
  }