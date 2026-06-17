
const persona = {
  nombre: "Ciel",
  edad: 30,
  ciudad: "Cucuta",
  esEstudiante: false,

  saludar: function () {
    return `Hola, mi nombre es ${this.nombre} Tengo ${this.edad} años y vivo en ${this.ciudad}.`;
  },
  saludar2: function () {
    return `Hola, mi nombre es ` + this.nombre + " Tengo " + this.edad + ` años y vivo en ` + this.ciudad + `.`;
  }
};

console.log(persona.nombre);
console.log(persona["edad"]);
console.log(persona.saludar());
console.log(persona.saludar2());
console.log(this);

console.log("----------------------------");
json = JSON.stringify(persona);
console.log("JSON - ", json);
console.log("OBJETO - ", JSON.parse(json));

console.log("----------------------------");
console.log(Object.keys(persona));
console.log(Object.values(persona));

const a = { x: 1 };
const b = { y: 2, z: 5 };
const c = { y: 3 };
console.log(a);
console.log(b);
console.log(Object.assign(a, b));
console.log(Object.assign(b, c));

console.log("----------------------------");

const usuario = {
  id: 1,
  nombre: "Lucía",
  apellido: "Martinez"
};
console.log(usuario.id);
console.log(usuario.nombre);
console.log("----------------------------");
const { id, nombre } = usuario;
console.log(id);
console.log(nombre);
console.log("----------------------------");

const system = {
  so: "LINUX",
  software: "tech",
  ...usuario
};
console.log(system);

// Manipulación
const notas = [3.5, 4.2, 2.8, 5.0];
console.log(notas[0]); // 3.5
console.log(notas[1]); // 4.2
notas.push(4); // push() agrega un nuevo elemento al final del arreglo.
console.log(notas);
notas.pop(); // pop() elimina el último elemento del arreglo.
console.log(notas);

const precios = [10000, 20000, 30000];
const preciosConIva = precios.map(precio => precio * 1.19); // map() recorre el arreglo y transforma cada elemento en algo nuevo.
console.log(preciosConIva);

const mayoresA20000 = preciosConIva.filter(preciosConIva => preciosConIva > 20000); // filter() crea un nuevo arreglo solo con los elementos que cumplen...
console.log(mayoresA20000);

const total = precios.reduce((acumulador, precio) => acumulador + precio, 0); // reduce(): resumir todo en un solo resultado
console.log(total);

console.log(precios.includes(20000)); // includes() verifica si un elemento existe en el arreglo

console.log("-----------------------------------");
const listSet = new Set([1, 2, 3, 4]);
console.log(listSet);
listSet.add(4);
console.log(listSet)
console.log(notaSet)

const map = new Map();
Map.set("nombre", "javier");
Map.set("edad", 18);
console.log(map)