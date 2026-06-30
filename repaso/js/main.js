const cursoCampus = "JavaScript";

localStorage.setItem("curso", cursoCampus);

const cursoGuardado = localStorage.getItem("curso");

console.log(cursoGuardado); 

// Ejemplo # 2. Sin HTML solo JavaScript
const inputNombre = document.querySelector("#inputNombre");
const btnGuardar = document.querySelector("#btnGuardar");
const btnMostrar = document.querySelector("#btnMostrar");
const btnEliminar = document.querySelector("#btnEliminar");
const mensajeAlmacenamiento = document.querySelector("#mensajeAlmacenamiento");


btnGuardar.addEventListener("click", () => {
  const nombre = inputNombre.value;
  if (nombre !== "") {
    localStorage.setItem(
      "nombreEstudiante", nombre);
      mensajeAlmacenamiento.textContent = "Nombre guardado correctamente.";
    inputNombre.value = "";
  }
});

btnMostrar.addEventListener("click", () => {
  const n = localStorage.getItem(
    "nombreEstudiante");
  if (n === null) {
    mensajeAlmacenamiento.textContent =
      "No hay nombre guardado.";
  } else {
    mensajeAlmacenamiento.textContent =
      "Nombre: " + n;
  }
});

btnEliminar.addEventListener("click", () => {
  localStorage.removeItem(
    "nombreEstudiante");
    mensajeAlmacenamiento.textContent =
    "Nombre eliminado.";
});

//ejemplo # 3. Guardar un objeto en localStorage
const estudiante = {
  nombre: "Laura",
  edad: 18,
  curso: "JavaScript"
};

localStorage.setItem(
  "estudiante",
  JSON.stringify(estudiante)
);

const guardado = localStorage.getItem("estudiante");
const convertido = JSON.parse(guardado);

console.log(convertido.nombre); // "Laura"
console.log(convertido.edad);   // 18
console.log(convertido.curso);  // "JavaScript"

// Ejemplo # 4. Guardar un arreglo de objetos en localStorage

const inputNombre1 = document.querySelector("#inputNombreEstudiante");
const inputEdad = document.querySelector("#inputEdadEstudiante");
const inputCurso = document.querySelector("#inputCursoEstudiante");
const btnGuardarEstudiantes = document.querySelector("#btnGuardarEstudiante");
const btnLimpiar = document.querySelector("#btnLimpiarEstudiante");
const listaEstudiantes = document.querySelector("#listaEstudiantes");
const mensajeEstudiantes = document.querySelector("#mensajeEstudiantes");


function obtenerEstudiantes() {
  const estudiantesGuardados = localStorage.getItem("estudiantes");

  if (estudiantesGuardados === null) {
    return [];
  }

  return JSON.parse(estudiantesGuardados);
}

function guardarEstudiantes(estudiantes) {
  localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
}

function pintarEstudiantes() {
  const estudiantes = obtenerEstudiantes();

  listaEstudiantes.textContent = "";

  estudiantes.forEach(function (estudiante) {
    const item = document.createElement("li");

    const texto = document.createElement("span");
    texto.textContent =
      estudiante.nombre +
      " - " +
      estudiante.edad +
      " años - Curso: " +
      estudiante.curso;

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";

    botonEliminar.addEventListener("click", function () {
      eliminarEstudiante(estudiante.id);
    });

    item.append(texto);
    item.append(botonEliminar);

    listaEstudiantes.append(item);
  });
}
  

btnGuardarEstudiantes.addEventListener("click", function () {
  const nombre = inputNombre1.value.trim();
  const edad = inputEdad.value.trim();
  const curso = inputCurso.value.trim();

  if (nombre === "" || edad === "" || curso === "") {
    mensajeEstudiantes.textContent = "Por favor completa todos los campos.";
    return;
  }

  const nuevoEstudiante = {
    id: Date.now(),
    nombre: nombre,
    edad: edad,
    curso: curso
  };

  const estudiantes = obtenerEstudiantes();
  estudiantes.push(nuevoEstudiante); // Agregamos el nuevo estudiante con push().
  guardarEstudiantes(estudiantes);
  pintarEstudiantes();
  mensajeEstudiantes.textContent = "Estudiante guardado correctamente.";
  inputNombre1.value = "";
  inputEdad.value = "";
  inputCurso.value = "";
});


btnLimpiar.addEventListener("click", function () {
  localStorage.removeItem("estudiantes");
  pintarEstudiantes();
  mensajeEstudiantes.textContent = "Todos los estudiantes fueron eliminados.";
});

function eliminarEstudiante(id) {
    const estudiantes = obtenerEstudiantes();
  
    const estudiantesActualizados = estudiantes.filter(function (estudiante) {
      return estudiante.id !== id;
    });
  
    guardarEstudiantes(estudiantesActualizados);
    pintarEstudiantes();
}



