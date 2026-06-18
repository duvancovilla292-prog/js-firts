//console.log("A-Inicio");
//function Tarea() {
//    console.log("B-Desarrollo");
//};
//
//Tarea();
//console.log("C-Final Tarea");
//
//////////////////////////////////////////////////////
//
//
//
//// Paso 1: Inicio
//console.log("1. Preparando la masa para la pizza...");
//
//// Paso 2: Ejecución síncrona (bloqueante)
//function hornearPizza() {
//    console.log("2. Metiendo la pizza al horno...");
//    // Simulación de un proceso que toma tiempo de forma síncrona
//    for (let i = 0; i < 999999999; i++) {}
//    return "Pizza horneada";
//}
//
//// Paso 3: Llamado a la función
//let resultado = hornearPizza();
//console.log("3. " + resultado);
//
//// Paso 4: Fin
//console.log("4. ¡La pizza está lista para servir!");

////////////////////////////////

// Proceso Sincrono
// console.log("1. Inicio");
// alert("2. Proceso Intermedio");
// console.log("3. Fin");
 

//////////////////////////////////////////


//console.log(" paso 1");

//setTimeout(function() {
  //  console.log('pasaron 3 segundos');
//}, 3000);

//console.log("paso 3");


////////


//console.log("A-inicio");
//function tarea(){
//    console.log("B-dentro función tarea");
//}
//setTimeout(tarea, 1000);
//console.log("C-Fin");

//////

function sumatoria(a, b){
    return a + b;
}
function restar(a, b){
    return a - b;
} 
function multiplicar(a, b){
    return a * b;
} 
function dividir(a, b){
  if (b === 0) {
        return "Error: No se puede dividir por cero";
    }
  else {
    return a / b;}
}

function resultado(a, b, operacioncallback){
    return operacioncallback(a, b);
}

console.log(resultado(10, 5, sumatoria));
console.log(resultado(10, 5, restar));
console.log(resultado(10, 5, multiplicar));
console.log(resultado(10,0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001, dividir));

setTimeout(function() {
    console.log('Pasaron 3 segundos');
      setTimeout(function() {
        console.log('Pasaron 6 segundos');
        setTimeout(function() {
            console.log('Pasaron 9 segundos');
        }, 3000);
      }, 3000);
    }, 3000);



//function calculadura(a, b){
//    let resultado = a + b;
//    return ("El resultado de la suma es: " + resultado);
//}
//
//async function tarea2(){
//    const i= await calculadura(5, 10);
//    console.log("D-Estoy dentro de la función tarea2");
//
//    console.log(i);
//    
//}
//
//tarea2();