let resultado = 0;

let data = process.argv;

for (let i = 2; i < data.length; i++) {
    resultado += Number(data[i]);
}

console.log(resultado);
