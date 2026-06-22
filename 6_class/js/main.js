const mensaje = document.querySelector("#mensaje")

btnTextContent.addEventListener("mouseout", function () {
  mensaje.classList.add("resultado-texto"); //agrega la clase "resultado-texto" al elemento con id "mensaje"
  mensaje.textContent = "¡Hola estudiantes <strong>DOM</strong> con textContent!"; //remplaza el contenido del elemento con id "mensaje" con un texto plano
});

btnInnerHTML.addEventListener("mouseover", function () {
  mensaje.classList.add("resultado-html"); //agrega la clase "resultado-html" al elemento con id "mensaje"
  mensaje.innerHTML = "¡Hola estudiantes <strong>DOM<strong> con innerHTML!"; //remplaza el contenido del elemento con id "mensaje" con un texto que puede contener etiquetas HTML
});

function alternarMensaje() {// el classList es una propiedad que devuelve un objeto DOMTokenList que representa la lista de clases del elemento. Permite agregar, eliminar y alternar clases de manera sencilla.
    mensaje.classList.toggle("oculto"); //remueve la clase "oculto" si está presente, o la agrega si no lo está, alternando la visibilidad del mensaje
}
btnAlternar.addEventListener("click", alternarMensaje);

function verificarClase() {
  if (mensaje.classList.contains("resultado-html")) {//el .contains() es un método que devuelve true si la clase especificada está presente en la lista de clases del elemento, y false si no lo está.
    console.log("El mensaje tiene estilo de innerHTML");
  } else {
    console.warn("El mensaje NO tiene estilo de innerHTML");
  }
}
btnVerificar.addEventListener("click", verificarClase);

function reemplazarClase() {
  if (mensaje.classList.contains("resultado-texto")) {
    mensaje.classList.replace("resultado-texto", "resultado-htl");//el .replace() es un método que reemplaza una clase existente por otra en la lista de clases del elemento.
    mensaje.innerHTML = "Ahora el mensaje cambió de estilo";
  } else {
    alert("Primero usa el botón textContent para aplicar la clase resultado-texto");
  }
}
btnReemplazarClase.addEventListener("click", reemplazarClase);


const enlace = document.querySelector("#enlace");
const btnLeer = document.querySelector("#btnLeer");
const btnCambiar = document.querySelector("#btnCambiar");
const botonEnviar = document.querySelector("#botonEnviar");
const btnHabilitar = document.querySelector("#btnHabilitar");

btnLeer.addEventListener("click", function () {
  const valorHref = enlace.getAttribute("href");//el .getAttribute() es un método que devuelve el valor del atributo especificado del elemento, en este caso el valor del atributo href del enlace.

  console.log("El href del enlace es:", valorHref);
});

btnCambiar.addEventListener("click", function () {
  enlace.setAttribute("href", "https://estudiante-cucuta.campuslands.com/");//el .setAttribute() es un método que establece el valor de un atributo especificado del elemento, en este caso cambia el valor del atributo href del enlace a "https://www.wikipedia.org".
  enlace.textContent = "Ir a Campus Lands";
  enlace.setAttribute("target", "_blank");
  console.log("El enlace fue cambiado");

});

btnHabilitar.addEventListener("click", function () {
  botonEnviar.removeAttribute("disabled");//el .removeAttribute() es un método que elimina un atributo especificado del elemento, en este caso elimina el atributo disabled del botón enviar, habilitándolo para que pueda ser clickeado.
  console.log("El atributo disabled fue eliminado");
});

botonEnviar.addEventListener("click", function () {
  alert("Botón Enviar Habilitado");
});
