console.log("Sesion 2 LAB 1");
console.log("----------------------------------------");
const edad = 16;
const activo = true;
const rol = "usuario";         
const tieneDescuento = false;

console.log(edad > 18);
console.log(edad >= 18 && activo);
console.log(edad <= 18 && activo);
console.log(edad < 18);


console.log("¿El rol es exactamente 'admin'?:", rol === "admin"); // false
console.log("¿La edad es exactamente el número 16?:", edad === 16); // true
console.log("¿La edad es igual al texto '16'?:", edad === "16"); // false (mismo valor, diferente tipo)

// 6. Diferente valor o tipo (!==)
console.log("¿El rol es diferente de 'admin'?:", rol !== "admin"); // true

// 7. Y lógico (&&) - Ambas deben ser verdaderas
console.log("¿Es mayor de edad Y está activo?:", edad >= 18 && activo); // false (falla la primera)

// 8. O lógico (||) - Al menos una debe ser verdadera
console.log("¿Es mayor de edad O está activo?:", edad >= 18 || activo); // true (se cumple la segunda)

// 9. Negación (!) - Invierte el valor booleano
console.log("¿NO tiene descuento?:", !tieneDescuento); // true (invierte false a true)
console.log("¿NO está activo?:", !activo); // false (invierte true a false)

if (edad <=18){
    console.log("menor de edad");
}else if (edad > 18 && edad < 30 ){
    console.log("adolecente")
}else{
    console.log("mayor de edad");
}

console.log("------------------------------------------------------");

const metodoPago = "efectivo";

switch (metodoPago) {
  case "efectivo":
    console.log("Pago en efectivo");
    break;
  case "tarjeta":
    console.log("Pago con tarjeta");
    break;
  default:
    console.log("Método de pago no válido");
}

console.log("------------------------------------------------------");

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

for(let i=1; i <= 5; i++){
    console.log("For ::: " + i);
};

const productos = ["Mouse", "Teclado", "Monitor"];

for (let i = 0; i < productos.length; i++) {
    console.log(productos[i]);
}

/////////////////////////////////

function evaluarNotas(nota){
    if(nota >= 3){
        return "Aprobado";
    }else{
        return "Reprobado";
    }
};

console.log(evaluarNotas(3));