//function callback(){

function mensage(msg, callback){
    let mensaje = "El mensage es: " + msg;
    callback(mensaje); // 2
}

function imprimir(msg){
    console.log(msg);
}

mensage("Hola mundo", imprimir); // 1
