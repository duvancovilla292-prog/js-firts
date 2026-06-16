//console.log("Ciel");
//
//const jol= "Ciel";
//{
//  const jol2= "Ciel2";
//  console.log(jol2);
//}
//const yo=true;
//
//console.log(jol);
//let edad = 18;
//edad = 19;
//
//const pi = 3.1416;
//const inde=null;
//const array = [1,2,3,4,5];
//const valor1 = undefined;
//const objeto = {
//  nombre: "Ciel",
//  edad: 18,
//  esEstudiante: true
//};
//function saludar(nombre) {
//  return `Hola, ${nombre}!`;
//}
//
//console.log(edad);
//console.log(typeof jol);
//console.log(typeof edad);
//console.log(typeof yo);
//console.log(typeof pi);
//console.log(typeof inde);
//console.log(typeof array);
//console.log(typeof objeto);
//console.log(saludar("Ciel"));
//console.log(typeof saludar("Ciel"));
//console.log(typeof saludar);
//console.log(valor1);
//
//
//
//
//const precio = 50000;
//const cantidad = 2;
//const subtotal = precio * cantidad;
//const aplicaDescuento = subtotal >= 100000;
//
//console.log(subtotal);
//console.log(aplicaDescuento);
//
//const precioTexto = "15000";
//const total = Number(precioTexto) * 3;
//console.log(total);
//console.log(Number("hola"));
//
//const producto = "  teclado gamr  ";
//
//console.log(producto.trim());   // "teclado gamer"
//console.log(producto.toUpperCase());         // "  TECLADO GAMER  "
//console.log(producto.includes("ga"));     // true
//console.log(producto.trim().slice(0, 7));    // "teclado"
//
//const tecnologias = ["HTML", "CSS", "JavaScript"];
//
//console.log(tecnologias[0]);
//console.log(tecnologias.length);
//console.log(tecnologias.includes("JavaScript"));
//console.log(tecnologias.join("0 "));  // "HTML, CSS, JavaScript"
//console.log(tecnologias.push("React"));  // Agrega "React" al final del array
//console.log(tecnologias);  // ["HTML", "CSS", "JavaScript", "React"]
//console.log(tecnologias.pop());  // Elimina el último elemento ("React")
//console.log(tecnologias.map(tecnologia => tecnologia.toUpperCase()));  // ["HTML", "CSS", "JAVASCRIPT"]

const objeto = {
    nombre: "Ciel",
    apellido: "Covilla",
    edad: 18,
    esEstudiante: true
};
console.log(objeto);
console.log(typeof objeto);
console.log(objeto.nombre);
console.log(objeto.apellido);
console.log(objeto.edad);
console.log(objeto.esEstudiante);
console.log(objeto["nombre"]);
console.log(objeto["apellido"]);
console.log(objeto["edad"]);
console.log(objeto["esEstudiante"]);


//======================

const num1 = parseFloat(prompt("Ingresa el primer número:"));
const operacion = prompt("Ingresa la operación (+, -, *, /):");
const num2 = parseFloat(prompt("Ingresa el segundo número:"));

let resultado;

switch (operacion) {
  case "+":
    resultado = num1 + num2;
    break;
  case "-":
    resultado = num1 - num2;
    break;
  case "*":
    resultado = num1 * num2;
    break;
  case "/":
    resultado = num2 !== 0 ? num1 / num2 : "Error: División por cero";
    break;
  default:
    resultado = "Operación no válida";
}

console.log(`Resultado: ${resultado}`);

//================================
const nombreOriginal = "   teclado gamer   "; 
const precio = 120000;
const cantidad = 2;
const descuento = 10000;
const disponible = true;

const nombreLimpio = nombreOriginal.trim();
const nombreMayusculas = nombreLimpio.toUpperCase();
const tienePalabraClave = nombreLimpio.toLowerCase().includes("gamer");

const categorias = ["Periféricos", "Gaming", "Accesorios"];
const primeraCategoria = categorias[0];
const totalCategorias = categorias.length;

const producto = {
    nombre: nombreMayusculas,
    precio: precio,
    cantidad: cantidad,
    disponible: disponible,
    categorias: categorias
};

function calcularSubtotal(precioUnitario, cantidadComprada) {
    return precioUnitario * cantidadComprada;
}

function calcularTotalFinal(subtotalValor, descuentoValor) {
    return subtotalValor - descuentoValor;
}

const subtotal = calcularSubtotal(precio, cantidad);
const total = calcularTotalFinal(subtotal, descuento);

console.log(`Producto: ${producto.nombre}`);
console.log(`Precio unitario: ${producto.precio}`);
console.log(`Cantidad: ${producto.cantidad}`);
console.log(`Subtotal: ${subtotal}`);
console.log(`Descuento: ${descuento}`);
console.log(`Total a pagar: ${total}`);
console.log(`Producto disponible: ${producto.disponible}`);
console.log(`Contiene palabra clave gamer: ${tienePalabraClave}`);

console.log(`Primera categoría: ${primeraCategoria}`);
console.log(`Cantidad total de categorías: ${totalCategorias}`);

if (total >= 200000 && disponible === true) {
    console.log("Aplica envío gratis");
}
