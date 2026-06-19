console.log("Ciel paso1"); //muestra el mensaje "Ciel paso1" en la consola
setTimeout(function() {
    console.log("Ciel paso2"); //muestra el mensaje "Ciel paso2" en la consola después de 2 segundos
}, 2000);
console.log("Ciel paso3"); //muestra el mensaje "Ciel paso3" en la consola

console.log(" ---------------------------------------- ");

// function(a,b){} === (a,b) =>

const miPromesa = new Promise((resolve, reject) => {
    console.log("Creando Mi Promesa");
    const exito = false;
    if(exito){
        resolve("Operación Exitosa");
    }else{
        reject("Operacion Fallida");
    }
});

console.log(typeof miPromesa);
console.log(miPromesa);

miPromesa.then((resultado) => {
    console.log("Exito: ", resultado);
}).catch((error) => {
    console.log("Error: ", error);
}).finally(() => {
    console.log("Proceso finalizado");
});