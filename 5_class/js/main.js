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

const miPromesa3 = new Promise((resolve, reject) => {
    console.log("Creando Mi Promesa 3");

    fetch("../data/equipos_mundial_2026.json").then(r => r.json()).then(data => {
        console.log(typeof data);
        console.log(data);
        console.table(data.grupos);
    });

    const exito = true;
    if(exito){
        resolve("Operación Exitosa 3");
    }else{
        reject("Operacion Fallida 3");
    }
});

console.log(typeof miPromesa);
console.log(miPromesa);

miPromesa3.then((resultado) => {
    console.log("Exito: ", resultado);
}).catch((error) => {
    console.log("Error: ", error);
}).finally(() => {
    console.log("Proceso finalizado");
});

Promise.all([miPromesa, miPromesa2]).then((resultado) => {
    console.log("Exito: ", resultado);
}).catch((error) => {
    console.log("Error: ", error);
}).finally(() => {
    console.log("Proceso finalizado");
});

async function cargarEquiposMundial(){
    const respuesta = await fetch("../data/equipos_mundial_2026.json");
    const datos = await respuesta.json();
    console.log(typeof datos);
    console.log(datos);
    console.table(datos.equipos);
};
 
cargarEquiposMundial();