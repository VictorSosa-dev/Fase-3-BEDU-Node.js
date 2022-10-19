function sumarFn(num1, num2) {
    console.log(`Suma ${num1} + ${num2} = ${num1 + num2}`)
}

function restarFn(num1, num2) {

    console.log(`Resta ${num1} - ${num2} = ${num1 - num2}`)
}

function multiplicarFn(num1, num2) {
    console.log(`Multiplicacio ${num1} * ${num2} = ${num1 * num2}`)
}

function dividirFn(num1, num2) {
    if (num2 == 0) {
        console.log('No se puede dividir por 0')
    }else{
        console.log(`Division ${num1} / ${num2} = ${num1 / num2}`)
    }
}

module.exports = { 
    sumarFn,
    restarFn,
    multiplicarFn,
    dividirFn
}