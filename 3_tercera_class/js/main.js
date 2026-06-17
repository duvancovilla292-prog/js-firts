
const persona = {
    nombre: "Ciel",
    edad: 30,
    ciudad: "Cucuta",
    esEstudiante: false,
    
    saludar: function() {
      return `Hola, mi nombre es ${this.nombre} Tengo ${this.edad} años y vivo en ${this.ciudad}.`;
    },
    saludar2: function() {
        return `Hola, mi nombre es `+ this.nombre + " Tengo " + this.edad + ` años y vivo en ` + this.ciudad + `.`;
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