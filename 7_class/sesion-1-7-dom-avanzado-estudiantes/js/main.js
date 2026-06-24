// SESIÓN 1.7 - Manipulación Avanzada del DOM
// Proyecto base para estudiantes

const btnCargar = document.querySelector("#btn-cargar");
const btnAgregarFinal = document.querySelector("#btn-agregar-final");
const btnAgregarInicio = document.querySelector("#btn-agregar-inicio");
const btnAviso = document.querySelector("#btn-aviso");
const btnResumen = document.querySelector("#btn-resumen");
const btnReemplazarPrimera = document.querySelector("#btn-reemplazar-primera");

const resumen = document.querySelector("#resumen");
const panelEquipos = document.querySelector("#panel-equipos");
const listaEquipos = document.querySelector("#lista-equipos");

function crearTarjetaEquipo(equipo) {
  // TODO 1: crear un article con document.createElement("article")
  const card = document.createElement("article"); // El createElement crea una etiqueta HTML en memoria (un <article>)

  // TODO 2: agregar la clase card-equipo
  card.classList.add("card-equipo"); // El classList.add añade una clase CSS al elemento para darle estilos

  // TODO 3: si equipo.destacado es true, agregar la clase destacado
  if (equipo.destacado) {
    card.classList.add("destacado");
  }

  // TODO 4: crear h3 y párrafos con createElement()
  const titulo = document.createElement("h3");
  const pGrupo = document.createElement("p");
  const pRegion = document.createElement("p");

  // TODO 5: asignar contenido con textContent
  titulo.textContent = `${equipo.nombre} (${equipo.codigo})`; // El textContent define o cambia el texto limpio dentro de la etiqueta
  pGrupo.textContent = `Grupo: ${equipo.grupo}`;
  pRegion.textContent = `${equipo.continente} - ${equipo.confederacion}`;

  // TODO 6: crear botón eliminar
  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar";
  btnEliminar.classList.add("btn-eliminar");

  // TODO 7: al hacer clic, eliminar la tarjeta usando parentElement y remove()
  btnEliminar.addEventListener("click", function() {
    const tarjetaPadre = btnEliminar.parentElement; // El .parentElement viaja hacia arriba en la jerarquía del DOM para seleccionar la etiqueta que contiene a este botón (el <article>)
    tarjetaPadre.remove(); // El .remove() elimina por completo el elemento seleccionado del árbol HTML de la página
  });

  // TODO 8: agregar los elementos internos con append()
  card.append(titulo, pGrupo, pRegion, btnEliminar); // El .append() mete múltiples elementos hijos al final de este contenedor (<article>) uno tras otro

  // TODO 9: retornar la tarjeta
  return card;
}

async function cargarEquipos() {
  try {
    // TODO: usar fetch("data/equipos.json")
    const respuesta = await fetch("data/equipos.json"); // El fetch realiza una petición HTTP asíncrona para consultar el archivo de datos externos
    
    // TODO: convertir la respuesta con .json()
    const datos = await respuesta.json(); // El .json() transforma la respuesta cruda del servidor en un objeto o array de JavaScript que podemos recorrer
    
    // TODO: limpiar el contenedor con replaceChildren()
    listaEquipos.replaceChildren(); // El .replaceChildren() sin argumentos vacía por completo el contenedor, borrando todos sus hijos de golpe de forma eficiente
    
    // TODO: recorrer datos.equipos y crear tarjetas
    datos.equipos.forEach(equipo => {
      const nuevaTarjeta = crearTarjetaEquipo(equipo);
      // TODO: insertar cada tarjeta con append()
      listaEquipos.append(nuevaTarjeta);
    });
    
    // TODO: actualizar el resumen
    actualizarResumen();
  } catch (error) {
    console.error("Error al cargar equipos:", error);
  }
}

function agregarEquipoAlFinal() {
  // TODO: crear un objeto equipo de prueba
  const equipoPrueba = {
    id: 999,
    nombre: "Equipo Nuevo Final",
    codigo: "NEW",
    grupo: "Z",
    continente: "Simulación",
    confederacion: "CONMEBOL",
    destacado: false
  };
  
  // TODO: crear una tarjeta y agregarla con append()
  const nuevaTarjeta = crearTarjetaEquipo(equipoPrueba);
  listaEquipos.append(nuevaTarjeta); // El .append() inserta la nueva tarjeta al final de toda la lista (como el último hijo del contenedor)
}

function agregarEquipoAlInicio() {
  // TODO: crear un objeto equipo de prueba
  const equipoPrueba = {
    id: 111,
    nombre: "Equipo Nuevo Inicio",
    codigo: "FIRST",
    grupo: "A",
    continente: "Simulación",
    confederacion: "UEFA",
    destacado: true
  };
  
  // TODO: crear una tarjeta y agregarla con prepend()
  const nuevaTarjeta = crearTarjetaEquipo(equipoPrueba);
  listaEquipos.prepend(nuevaTarjeta); // El .prepend() inserta la nueva tarjeta al principio de toda la lista (como el primer hijo del contenedor)
}

function insertarAviso() {
  // TODO: crear un elemento p
  const aviso = document.createElement("p");
  
  // TODO: asignar clase aviso y texto
  aviso.classList.add("aviso");
  aviso.textContent = "⚠️ Alerta de Laboratorio: Panel dinámico en uso.";
  
  // TODO: insertarlo antes del panel con before()
  panelEquipos.before(aviso); // El .before() inserta este nuevo elemento justo afuera y antes de la sección seleccionada (actúa como hermano previo, no como hijo)
}

function actualizarResumen() {
  // TODO: usar listaEquipos.children.length
  const totalTarjetas = listaEquipos.children.length; // El .children.length cuenta en tiempo real cuántas etiquetas hijas directas tiene guardadas el contenedor
  
  // TODO: crear un p con el total de tarjetas
  const mensaje = document.createElement("p");
  mensaje.textContent = `Total de equipos cargados: ${totalTarjetas}`;
  
  // TODO: usar resumen.replaceChildren(mensaje)
  resumen.replaceChildren(mensaje); // El .replaceChildren(mensaje) borra todo lo que había dentro del contenedor de resumen y lo reemplaza únicamente por este nuevo párrafo
}

function reemplazarPrimeraTarjeta() {
  // TODO: obtener listaEquipos.firstElementChild
  const primeraTarjeta = listaEquipos.firstElementChild; // El .firstElementChild apunta directamente al primer hijo que tenga este contenedor en el DOM
  
  // TODO: validar si existe
  if (primeraTarjeta) {
    // TODO: crear una nueva tarjeta
    const equipoReemplazo = {
      id: 555,
      nombre: "Equipo Reemplazado",
      codigo: "REP",
      grupo: "M",
      continente: "Europa",
      confederacion: "UEFA",
      destacado: true
    };
    const nuevaTarjeta = crearTarjetaEquipo(equipoReemplazo);
    
    // TODO: reemplazar la primera tarjeta con replaceWith()
    primeraTarjeta.replaceWith(nuevaTarjeta); // El .replaceWith() remueve el elemento original de la pantalla y pone la nueva tarjeta exactamente en su lugar
  }
}

btnCargar.addEventListener("click", cargarEquipos);
btnAgregarFinal.addEventListener("click", agregarEquipoAlFinal);
btnAgregarInicio.addEventListener("click", agregarEquipoAlInicio);
btnAviso.addEventListener("click", insertarAviso);
btnResumen.addEventListener("click", actualizarResumen);
btnReemplazarPrimera.addEventListener("click", reemplazarPrimeraTarjeta);
