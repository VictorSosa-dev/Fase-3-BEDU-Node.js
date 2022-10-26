//api start wars
const https = require('https');
const result = [];

function getStarWars(){
    https.get('https://swapi.dev/api/people/', (resp) => {
        let data = '';
        resp.setEncoding('utf8');
        resp.on('data', (chunk) => {
            data += chunk;
        })

        resp.on('end', () => {
            let body = JSON.parse(data);
            body.results.sort(function(a, b){
                return a.films.length - b.films.length;
            });
            console.log(body.results);
        }).on('error', (err) => {
            console.log(err);
        })
    });
}

//getStarWars();

//ejemplo 02

/* let promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        let num = Math.random();
        if (num >= 0.5) resolve('Correcto'+num);
        reject('Incorrecto'+num);
    }, 1000);
});

promise
    .then(data => console.log(data))
    .catch(err => console.log(err)); */

    
